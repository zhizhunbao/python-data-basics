import React from 'react'
import { ChartCode } from './ChartCode'
import { ChartOutput } from './ChartOutput'

export function PythonChart({ code, output, title }) {
  return (
    <div className="card mb-component-lg">
      {title && (
        <h3 className="text-lg font-semibold mb-4">{title}</h3>
      )}
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ChartCode code={code} />
        <ChartOutput output={output} />
      </div>
    </div>
  )
}
