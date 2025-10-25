import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import { useLayoutStore } from '@store/Layout/store'
import { MDXTableOfContents } from './MDXTableOfContents'

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
  
  return (
    <MDXProvider>
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
