import React from 'react'
import { ComposedChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Line, Legend } from 'recharts'

/**
 * Scatter 组件 - 展示散点图
 * @param {Array} data - 数据数组，格式: [{ x: x值, y: y值, category?: 分类, predicted?: 预测值, actual?: 真实值 }]
 * @param {string} title - 图表标题
 * @param {string} xLabel - X轴标签
 * @param {string} yLabel - Y轴标签
 * @param {string} xKey - X轴数据键名，默认为 'x'
 * @param {string} yKey - Y轴数据键名，默认为 'y'
 * @param {string} categoryKey - 分类键名，用于不同颜色，默认为 'category'
 * @param {boolean} showIdealLine - 是否显示理想预测线（y=x），默认为 false
 * @param {boolean} showPredictionLine - 是否显示预测线+真实值散点模式，默认为 false
 * @param {string} predictedKey - 预测值键名，默认为 'predicted'
 * @param {string} actualKey - 真实值键名，默认为 'actual'
 * @param {string} xDataKey - 当 showPredictionLine 为 true 时，X 轴数据的键名（如 'year'），默认为 'index'
 */
export function ScatterChart({ 
  data, 
  title, 
  xLabel, 
  yLabel, 
  xKey = 'x', 
  yKey = 'y',
  categoryKey = 'category',
  showIdealLine = false,
  showPredictionLine = false,
  predictedKey = 'predicted',
  actualKey = 'actual',
  xDataKey = 'index' // 默认使用索引，但如果数据有 year 等字段，可传入 'year'
}) {
  if (!data || data.length === 0) {
    return (
      <div className="p-4 bg-gray-100 rounded-lg text-center text-gray-500">
        暂无数据
      </div>
    )
  }

  // 如果显示预测线模式
  if (showPredictionLine) {
    // 使用指定的 xDataKey 作为X轴值，如果不存在则使用索引
    // 为相同X值的点添加轻微偏移（jitter），避免重叠
    const xValueGroups = new Map() // 记录每个X值对应的所有点索引
    
    // 第一步：按X值分组并计算X值的范围（用于动态调整jitter）
    let minX = Infinity
    let maxX = -Infinity
    data.forEach((d, index) => {
      const baseXValue = d[xDataKey] !== undefined ? d[xDataKey] : index
      minX = Math.min(minX, baseXValue)
      maxX = Math.max(maxX, baseXValue)
      if (!xValueGroups.has(baseXValue)) {
        xValueGroups.set(baseXValue, [])
      }
      xValueGroups.get(baseXValue).push(index)
    })
    
    // 计算动态jitter范围：基于X值范围的5%，最小为0.5，最大为2
    const xRange = maxX - minX
    const dynamicJitterRange = Math.max(0.5, Math.min(2, xRange * 0.05))
    
    // 第二步：为每个数据点计算jitter后的X值
    const chartData = data.map((d, index) => {
      const baseXValue = d[xDataKey] !== undefined ? d[xDataKey] : index
      const groupIndices = xValueGroups.get(baseXValue)
      const groupSize = groupIndices.length
      const positionInGroup = groupIndices.indexOf(index)
      
      // 如果有多个相同X值的点，均匀分布在X值附近
      // 使用动态计算的jitter范围，确保点之间有明显的分离
      const jitter = groupSize > 1 
        ? (positionInGroup / (groupSize - 1) - 0.5) * dynamicJitterRange * 2
        : 0
      
      const xValue = baseXValue + jitter
      
      // 计算颜色：实际价格 > 预测价格：红色，实际价格 < 预测价格：绿色
      const actual = d[actualKey]
      const predicted = d[predictedKey]
      const color = predicted !== undefined && actual !== undefined
        ? (actual > predicted ? '#ef4444' : '#10b981')
        : '#2563eb'
      
      return {
        [xDataKey]: xValue,
        predicted: d[predictedKey],
        actual: d[actualKey],
        color: color, // 预计算颜色
        originalData: d // 保存原始数据用于 tooltip
      }
    })

    // 为预测线创建平滑的数据系列（按原始X值分组，每个X值取预测值的平均值）
    const predictionGroups = new Map()
    data.forEach((d, index) => {
      const baseXValue = d[xDataKey] !== undefined ? d[xDataKey] : index
      if (!predictionGroups.has(baseXValue)) {
        predictionGroups.set(baseXValue, [])
      }
      predictionGroups.get(baseXValue).push(d[predictedKey])
    })
    
    const predictionLineData = Array.from(predictionGroups.entries())
      .map(([xValue, predictedValues]) => ({
        [xDataKey]: xValue,
        predicted: predictedValues.reduce((sum, val) => sum + val, 0) / predictedValues.length
      }))
      .sort((a, b) => a[xDataKey] - b[xDataKey])

    // 计算Y轴范围 - 统一的Y轴范围，包含预测价格和真实价格
    const predictedPrices = chartData.map(d => d.predicted)
    const actualPrices = chartData.map(d => d.actual)
    const allPrices = [...predictedPrices, ...actualPrices]
    const minPrice = Math.min(...allPrices)
    const maxPrice = Math.max(...allPrices)

    return (
      <div className="w-full bg-white rounded-lg border border-gray-200 p-4 mb-6">
        {title && <h4 className="text-lg font-semibold mb-4 text-center">{title}</h4>}
        <ResponsiveContainer width="100%" height={400}>
          <ComposedChart margin={{ top: 10, right: 30, left: yLabel ? 100 : 50, bottom: xLabel ? 70 : 50 }} data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis 
              type="number"
              dataKey={xDataKey}
              domain={xDataKey === 'index' ? [0, 'dataMax'] : ['dataMin', 'dataMax']}
              label={xLabel ? { value: xLabel, position: 'bottom', offset: 10, style: { textAnchor: 'middle' } } : null}
              tickFormatter={(value) => Math.round(value)}
            />
            {/* 统一的 Y 轴 */}
            <YAxis 
              type="number"
              domain={[minPrice * 0.95, maxPrice * 1.05]}
              label={yLabel ? { value: '价格 (美元)', angle: -90, position: 'left', offset: 20, style: { textAnchor: 'middle' } } : null}
              width={yLabel ? 100 : 50}
              tickFormatter={(value) => Math.round(value)}
            />
            <Tooltip 
              cursor={{ strokeDasharray: '3 3' }}
              formatter={(value, name) => {
                if (name === 'predicted') return [`$${Math.round(value).toLocaleString()}`, '预测价格']
                if (name === 'actual') return [`$${Math.round(value).toLocaleString()}`, '真实价格']
                return [value, name]
              }}
              labelFormatter={(value) => {
                // 如果 xDataKey 是 year 或类似的字段名，显示更友好的标签
                if (xDataKey === 'year' || xDataKey === 'Year') {
                  return `年份: ${value}`
                }
                if (xDataKey === 'index') {
                  return `样本 ${value + 1}`
                }
                return `${xLabel || xDataKey}: ${value}`
              }}
            />
            <Legend wrapperStyle={{ paddingTop: '20px' }} />
            
            {/* 预测线 - 使用统一的 Y 轴，使用平滑的预测数据系列 */}
            <Line 
              type="monotone"
              data={predictionLineData}
              dataKey="predicted"
              name="预测价格"
              stroke="#dc2626"
              strokeWidth={2}
              dot={{ fill: '#dc2626', r: 4 }}
              isAnimationActive={false}
            />
            
            {/* 真实值散点 - 使用统一的 Y 轴 */}
            <Scatter 
              dataKey="actual"
              name="真实价格"
              fill="#2563eb"
              shape={(props) => {
                const { cx, cy, payload } = props;
                // 使用预计算的颜色，如果不存在则尝试从 payload 中计算
                let color = payload?.color;
                if (!color) {
                  // 降级方案：从 payload 中获取值并计算
                  const actual = payload?.actual ?? payload?.value;
                  const predicted = payload?.predicted;
                  if (predicted !== undefined && actual !== undefined) {
                    color = actual > predicted ? '#ef4444' : '#10b981';
                  } else {
                    color = '#2563eb'; // 默认蓝色
                  }
                }
                
                return (
                  <circle
                    cx={cx}
                    cy={cy}
                    r={6}
                    fill={color}
                    stroke="#ffffff"
                    strokeWidth={2}
                    fillOpacity={0.9}
                  />
                );
              }}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    )
  }

  // 原有的散点图模式
  // 计算坐标范围，用于理想线
  const xValues = data.map(d => d[xKey])
  const yValues = data.map(d => d[yKey])
  const minValue = Math.min(...xValues, ...yValues)
  const maxValue = Math.max(...xValues, ...yValues)
  
  // 理想预测线数据
  const idealLineData = showIdealLine ? [
    { [xKey]: minValue, [yKey]: minValue },
    { [xKey]: maxValue, [yKey]: maxValue }
  ] : null

  // 获取所有不同的分类
  const categories = [...new Set(data.map(d => d[categoryKey]).filter(Boolean))]
  const colors = [
    '#3b82f6', // blue
    '#ef4444', // red
    '#10b981', // green
    '#f59e0b', // amber
    '#8b5cf6', // purple
    '#ec4899', // pink
    '#06b6d4', // cyan
    '#f97316', // orange
  ]

  return (
    <div className="w-full bg-white rounded-lg border border-gray-200 p-4 mb-6">
      {title && <h4 className="text-lg font-semibold mb-4 text-center">{title}</h4>}
      <ResponsiveContainer width="100%" height={400}>
        <ComposedChart margin={{ top: 10, right: 30, left: yLabel ? 100 : 50, bottom: xLabel ? 70 : 50 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis 
            type="number" 
            dataKey={xKey}
            domain={['dataMin', 'dataMax']}
            label={xLabel ? { value: xLabel, position: 'bottom', offset: 10, style: { textAnchor: 'middle' } } : null}
          />
          <YAxis 
            type="number" 
            dataKey={yKey}
            domain={['dataMin', 'dataMax']}
            label={yLabel ? { value: yLabel, angle: -90, position: 'left', offset: 20, style: { textAnchor: 'middle' } } : null}
            width={yLabel ? 100 : 50}
          />
          <Tooltip cursor={{ strokeDasharray: '3 3' }} />
          
          {/* 理想预测线 - 使用实线，加粗，更鲜艳的红色 */}
          {showIdealLine && idealLineData && (
            <Line 
              type="linear" 
              dataKey={yKey} 
              data={idealLineData}
              name="理想预测线 (y=x)"
              stroke="#dc2626" 
              strokeWidth={4}
              dot={false}
              isAnimationActive={false}
            />
          )}
          
          {/* 图例 */}
          {showIdealLine && (
            <Legend 
              wrapperStyle={{ paddingTop: '20px' }}
              iconType="line"
            />
          )}
          
          {/* 如果没有分类，显示单一颜色的点 */}
          {categories.length === 0 ? (
            <Scatter data={data} fill="#00A651" />
          ) : (
            // 如果有分类，为每个分类创建不同颜色的散点
            categories.map((category, index) => (
              <Scatter 
                key={category}
                name={category}
                data={data.filter(d => d[categoryKey] === category)}
                fill={colors[index % colors.length]}
              />
            ))
          )}
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  )
}

