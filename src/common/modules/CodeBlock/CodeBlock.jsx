import React from 'react'
import { CodeHighlight } from './CodeHighlight'

export function CodeBlock({ 
  code, 
  language = 'python', 
  title,
  showLineNumbers = true,
  editable = false,
  wrapper = true  // 新增参数控制是否添加包装器
}) {
  const content = (
    <>
      {title && <h3 className="text-lg font-semibold mb-4">{title}</h3>}
      
      <CodeHighlight
        code={code}
        language={language}
        showLineNumbers={showLineNumbers}
        editable={editable}
      />
    </>
  )

  // 如果不需要包装器，直接返回内容
  if (!wrapper) {
    return content
  }

  // 默认添加包装器
  return (
    <div className="card mb-component-lg">
      {content}
    </div>
  )
}
