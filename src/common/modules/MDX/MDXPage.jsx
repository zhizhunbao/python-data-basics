import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import { useLayoutStore } from '@store/Layout/store'
import { MDXTableOfContents } from './MDXTableOfContents'
import { CodeBlock } from '@codeBlock'
import { Mermaid } from './components/Mermaid'

/**
 * MDXPage 组件 - 用于渲染 MDX 内容的页面组件
 * 
 * 特点：
 * - 自动包装 MDXProvider
 * - 渲染 MDX 内容（包含主题样式）
 * - 包含目录组件
 * - 响应式布局
 */
export function MDXPage({ MDXContent, className = '' }) {
  const { theme } = useLayoutStore()
  
  // 辅助函数：从标题内容生成 ID
  const getHeadingId = (children) => {
    if (!children) return ''
    
    // 递归提取所有文本内容
    const extractText = (node) => {
      if (typeof node === 'string') return node
      if (typeof node === 'number') return String(node)
      if (Array.isArray(node)) return node.map(extractText).join('')
      if (node && node.props && node.props.children) return extractText(node.props.children)
      return ''
    }
    
    const text = extractText(children)
    return text
      .toLowerCase()
      .trim()
      .replace(/\s+/g, '-')
      .replace(/[^a-z0-9-\u4e00-\u9fa5]/g, '') // 支持中文字符
      || 'heading'
  }
  
  // MDX 组件映射配置
  const components = {
    // 标题组件 - 自动添加 id 属性
    h1: (props) => {
      const id = getHeadingId(props.children)
      return <h1 id={id} {...props} />
    },
    h2: (props) => {
      const id = getHeadingId(props.children)
      return <h2 id={id} {...props} />
    },
    h3: (props) => {
      const id = getHeadingId(props.children)
      return <h3 id={id} {...props} />
    },
    h4: (props) => {
      const id = getHeadingId(props.children)
      return <h4 id={id} {...props} />
    },
    h5: (props) => {
      const id = getHeadingId(props.children)
      return <h5 id={id} {...props} />
    },
    h6: (props) => {
      const id = getHeadingId(props.children)
      return <h6 id={id} {...props} />
    },
    
    // 代码块组件 - 直接处理代码块
    pre: ({ children, ...props }) => {
      // 检查是否包含 code 元素且是代码块
      if (children && children.props && children.props.className && children.props.className.startsWith('language-')) {
        const language = children.props.className.replace('language-', '')
        
        // 特殊处理 Mermaid 图表
        if (language === 'mermaid') {
          return (
            <Mermaid>
              {children.props.children}
            </Mermaid>
          )
        }
        
        // 其他代码块使用 CodeBlock
        return (
          <CodeBlock
            code={children.props.children}
            language={language}
            showLineNumbers={true}
            wrapper={false}  // 不添加额外的包装器，避免双重嵌套
          />
        )
      }
      
      // 普通预格式化文本
      return (
        <pre 
          className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm font-mono"
          {...props}
        >
          {children}
        </pre>
      )
    },
    
    // Mermaid 图表组件 - 使用 Mermaid 语法
    Mermaid: (props) => <Mermaid {...props} />,
    
    // 注意：不定义 code 组件，避免嵌套
    // 内联代码会使用默认的 <code> 标签
  }
  
  return (
    <MDXProvider components={components}>
      <div className={`flex gap-6 ${className}`}>
        {/* 主内容区域 */}
        <div className="flex-1 min-w-0">
          <div 
            className={`prose prose-lg max-w-none ${
              theme === 'dark' 
                ? 'prose-invert prose-slate' 
                : 'prose-slate'
            }`}
            data-mdx-content
          >
            <MDXContent />
          </div>
        </div>
        
        {/* 目录区域 */}
        <aside className="hidden xl:block w-64 flex-shrink-0">
          <div className="sticky top-4">
            <MDXTableOfContents 
              className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm"
              showTitle={true}
              maxLevel={3}
              scrollOffset={100}
              smoothScroll={true}
              showLevelNumbers={false}
              customSelector="h1, h2, h3, h4, h5, h6"
              containerSelector="[data-mdx-content]"
            />
          </div>
        </aside>
      </div>
    </MDXProvider>
  )
}
