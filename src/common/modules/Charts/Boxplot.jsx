import React from 'react'

/**
 * Boxplot 组件 - 展示箱线图（用于异常值检测）
 * @param {Object} stats - 统计信息: { min: 最小值, q1: 第一四分位数, median: 中位数, q3: 第三四分位数, max: 最大值, outliers: 异常值数组 }
 * @param {string} title - 图表标题
 * @param {string} yLabel - Y轴标签
 */
export function Boxplot({ stats, title, yLabel }) {
  if (!stats) {
    return (
      <div className="p-4 bg-gray-100 rounded-lg text-center text-gray-500">
        暂无数据
      </div>
    )
  }

  const { min, q1, median, q3, max, outliers = [] } = stats
  
  // 计算箱体位置 (假设高度为300px)
  const height = 300
  const leftMargin = yLabel ? 80 : 40
  const rightMargin = 160  // 为标注值留出空间
  const topMargin = 20
  const bottomMargin = 20
  const chartWidth = 800  // SVG 内部宽度
  const chartHeight = height - topMargin - bottomMargin
  
  // 箱体在图表中的位置（居中偏左）
  const boxCenterX = 120
  const boxWidth = 40
  
  // 归一化值到图表坐标 (Y轴从上到下：max在顶部，min在底部)
  const range = max - min || 1
  const scale = (value) => topMargin + ((max - value) / range) * chartHeight
  
  const q1Pos = scale(q1)  // Q1在下方（Y值更大）
  const medianPos = scale(median)
  const q3Pos = scale(q3)  // Q3在上方（Y值更小）
  const minPos = scale(min)  // 最小值在底部
  const maxPos = scale(max)  // 最大值在顶部
  const boxHeight = q1Pos - q3Pos  // Q1在Q3下方，所以高度为正
  
  // 标注位置
  const labelX = boxCenterX + boxWidth / 2 + 20

  return (
    <div className="w-full bg-white rounded-lg border border-gray-200 p-4 mb-6">
      {title && <h4 className="text-lg font-semibold mb-4 text-center">{title}</h4>}
      <div className="relative flex items-center justify-center" style={{ height: `${height}px`, width: '100%', minHeight: `${height}px` }}>
        <svg width="100%" height={height} viewBox={`0 0 ${chartWidth} ${height}`} preserveAspectRatio="xMidYMid meet" style={{ overflow: 'visible' }}>
          {/* 背景网格 */}
          <defs>
            <pattern id="boxplot-grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#e5e7eb" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width={chartWidth} height={height} fill="url(#boxplot-grid)" opacity="0.3" />
          
          {/* Y轴标签 */}
          {yLabel && (
            <text
              x={leftMargin / 2}
              y={height / 2}
              fill="#374151"
              fontSize="12"
              textAnchor="middle"
              transform={`rotate(-90 ${leftMargin / 2} ${height / 2})`}
            >
              {yLabel}
            </text>
          )}
          
          {/* 下须线 (min to Q1) */}
          <line x1={boxCenterX} x2={boxCenterX} y1={minPos} y2={q1Pos} stroke="#00A651" strokeWidth="2" />
          
          {/* 箱体 */}
          <rect
            x={boxCenterX - boxWidth / 2}
            y={q3Pos}
            width={boxWidth}
            height={boxHeight}
            fill="#00A651"
            fillOpacity="0.3"
            stroke="#00A651"
            strokeWidth="2"
          />
          
          {/* 中位数线 */}
          <line x1={boxCenterX - boxWidth / 2} x2={boxCenterX + boxWidth / 2} y1={medianPos} y2={medianPos} stroke="#00A651" strokeWidth="2" />
          
          {/* 上须线 (Q3 to max) */}
          <line x1={boxCenterX} x2={boxCenterX} y1={q3Pos} y2={maxPos} stroke="#00A651" strokeWidth="2" />
          
          {/* 须线端点 */}
          <line x1={boxCenterX - boxWidth / 2} x2={boxCenterX + boxWidth / 2} y1={minPos} y2={minPos} stroke="#00A651" strokeWidth="2" />
          <line x1={boxCenterX - boxWidth / 2} x2={boxCenterX + boxWidth / 2} y1={maxPos} y2={maxPos} stroke="#00A651" strokeWidth="2" />
          
          {/* 异常值点 */}
          {outliers.map((outlier, idx) => {
            const outlierPos = scale(outlier)
            return (
              <circle
                key={idx}
                cx={boxCenterX}
                cy={outlierPos}
                r="4"
                fill="#ef4444"
                stroke="#dc2626"
                strokeWidth="1"
              />
            )
          })}
          
          {/* 标注值 */}
          <g fontSize="11" fill="#6b7280" textAnchor="start" fontWeight="500">
            <text x={labelX} y={minPos + 4}>{min.toLocaleString()}</text>
            <text x={labelX} y={q1Pos + 4}>Q1: {q1.toLocaleString()}</text>
            <text x={labelX} y={medianPos + 4}>中位数: {median.toLocaleString()}</text>
            <text x={labelX} y={q3Pos + 4}>Q3: {q3.toLocaleString()}</text>
            <text x={labelX} y={maxPos + 4}>{max.toLocaleString()}</text>
          </g>
        </svg>
      </div>
    </div>
  )
}

