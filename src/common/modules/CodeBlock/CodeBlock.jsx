import React from 'react'
import { CodeHighlight } from './CodeHighlight'

export function CodeBlock({ 
  code, 
  language = 'python', 
  title,
  showLineNumbers = true,
  editable = false 
}) {
  return (
    <div className="card mb-component-lg">
      {title && <h3 className="text-lg font-semibold mb-4">{title}</h3>}
      
      <CodeHighlight
        code={code}
        language={language}
        showLineNumbers={showLineNumbers}
        editable={editable}
      />
    </div>
  )
}
