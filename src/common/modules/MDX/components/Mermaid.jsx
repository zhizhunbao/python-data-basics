import { useRef, useEffect, useState } from 'react'
import mermaid from 'mermaid'

/**
 * 简单的 Mermaid 图表组件
 */
export function Mermaid({ children, className = '' }) {
  const mermaidRef = useRef(null)
  const [id] = useState(() => `mermaid-${Math.random().toString(36).substr(2, 9)}`)

  useEffect(() => {
    if (!mermaidRef.current || !children) return

    const renderMermaid = async () => {
      try {
        // 使用默认配置
        mermaid.initialize({
          startOnLoad: false
        })
        
        const element = document.querySelector(`.mermaid-${id}`)
        if (element) {
          await mermaid.run({
            nodes: [element],
            suppressErrors: false
          })
        }
      } catch (error) {
        console.error('Mermaid 渲染失败:', error)
      }
    }

    const timer = setTimeout(renderMermaid, 100)
    return () => clearTimeout(timer)
  }, [children, id])

  return (
    <div className={`my-6 rounded-lg border border-gray-200 dark:border-gray-700 p-4 bg-white dark:bg-gray-900 ${className}`}>
      <div ref={mermaidRef} className={`mermaid mermaid-${id}`} style={{ display: 'flex', justifyContent: 'center' }}>
        {children}
      </div>
    </div>
  )
}

