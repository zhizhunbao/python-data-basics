import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

/**
 * Histogram 组件 - 展示直方图
 * @param {Array} data - 数据数组，格式: [{ value: 值, count: 频数 }] 或 [{ name: 名称, value: 值 }]
 * @param {string} dataKey - 数据键名，默认为 'count' 或 'value'
 * @param {string} title - 图表标题
 * @param {string} xLabel - X轴标签
 * @param {string} yLabel - Y轴标签
 */
export function Histogram({ data, dataKey, title, xLabel, yLabel, xKey = 'range' }) {
  if (!data || data.length === 0) {
    return (
      <div className="p-4 bg-gray-100 rounded-lg text-center text-gray-500">
        暂无数据
      </div>
    )
  }

  // 自动检测数据键名
  const valueKey = dataKey || (data[0].count !== undefined ? 'count' : 'value')
  const categoryKey = xKey || (data[0].range !== undefined ? 'range' : 'name')

  return (
    <div className="w-full bg-white rounded-lg border border-gray-200 p-4 mb-6">
      {title && <h4 className="text-lg font-semibold mb-4 text-center">{title}</h4>}
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} margin={{ top: 10, right: 30, left: yLabel ? 100 : 50, bottom: xLabel ? 90 : 60 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis 
            dataKey={categoryKey} 
            label={xLabel ? { value: xLabel, position: 'bottom', offset: 15, style: { textAnchor: 'middle' } } : null}
            angle={-45}
            textAnchor="end"
            height={80}
          />
          <YAxis 
            label={yLabel ? { value: yLabel, angle: -90, position: 'left', offset: 20, style: { textAnchor: 'middle' } } : null}
            width={yLabel ? 100 : 50}
          />
          <Tooltip />
          <Bar dataKey={valueKey} fill="#00A651" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

