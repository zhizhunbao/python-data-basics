import React from 'react'
import { Cell, Tooltip, Legend } from 'recharts'

/**
 * Heatmap 组件 - 展示相关性热力图
 * @param {Array} data - 数据数组，格式: [{ name: '变量名', var1: 值1, var2: 值2, ... }]
 * @param {Array} variables - 变量名数组，如: ['median_house_value', 'median_income', 'total_rooms']
 * @param {string} title - 图表标题
 */
export function Heatmap({ data, variables, title }) {
  if (!data || data.length === 0) {
    return (
      <div className="p-4 bg-gray-100 rounded-lg text-center text-gray-500">
        暂无数据
      </div>
    )
  }

  // 生成颜色函数：根据数值生成颜色，范围从蓝色（负）到红色（正）
  const getColor = (value) => {
    // 相关性范围 -1 到 1
    if (value >= 0.7) return '#ff4444' // 强正相关 - 红色
    if (value >= 0.4) return '#ff9999' // 中等正相关 - 浅红色
    if (value >= 0.1) return '#ffcccc' // 弱正相关 - 很浅红色
    if (value >= -0.1) return '#e0e0e0' // 无相关 - 灰色
    if (value >= -0.4) return '#ccccff' // 弱负相关 - 很浅蓝色
    if (value >= -0.7) return '#9999ff' // 中等负相关 - 浅蓝色
    return '#4444ff' // 强负相关 - 蓝色
  }

  return (
    <div className="w-full bg-white rounded-lg border border-gray-200 p-4 mb-6">
      {title && <h4 className="text-lg font-semibold mb-4 text-center">{title}</h4>}
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead>
            <tr>
              <th className="border border-gray-300 p-2 bg-gray-100 font-semibold"></th>
              {variables.map((varName, idx) => (
                <th key={idx} className="border border-gray-300 p-2 bg-gray-100 font-semibold text-sm">
                  {varName}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIdx) => (
              <tr key={rowIdx}>
                <td className="border border-gray-300 p-2 bg-gray-100 font-semibold text-sm">
                  {row.name}
                </td>
                {variables.map((varName, colIdx) => {
                  const value = row[varName] || 0
                  return (
                    <td
                      key={colIdx}
                      className="border border-gray-300 p-3 text-center font-mono text-sm"
                      style={{ backgroundColor: getColor(value) }}
                      title={`${row.name} vs ${varName}: ${value.toFixed(3)}`}
                    >
                      {value.toFixed(3)}
                    </td>
                  )
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4 flex items-center justify-center gap-4 text-xs">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-blue-600"></div>
          <span>强负相关</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-gray-400"></div>
          <span>无相关</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-red-600"></div>
          <span>强正相关</span>
        </div>
      </div>
    </div>
  )
}

