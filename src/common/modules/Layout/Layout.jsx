import React, { useEffect } from 'react'
import { Header } from '@layout/Header'
import { Sidebar } from '@layout/Sidebar'
import { useLayoutStore } from '@layout/store'
import { initializeI18n } from '@i18n'

export function Layout({ children }) {
  const { theme, sidebarCollapsed } = useLayoutStore()
  
  // 初始化 i18n
  useEffect(() => {
    initializeI18n()
  }, [])
  
  return (
    <div className={`min-h-screen transition-colors duration-200 ${
      theme === 'dark' 
        ? 'bg-gray-900 text-white' 
        : 'bg-white text-gray-900'
    }`}>
      {/* Header - Fixed at top */}
      <Header />
      
      {/* Main Layout - Docusaurus Style */}
      <div className="flex min-h-screen pt-16">
        {/* 侧边栏容器 - 用于抵消固定定位 */}
        <div className={`hidden md:block ${sidebarCollapsed ? 'w-0' : 'w-64'} transition-all duration-300 flex-shrink-0`}>
          <Sidebar />
        </div>
        
        {/* Main Content Area */}
        <main className="flex-1 flex min-w-0">
          {/* Content Column */}
          <div className="flex-1 min-w-0">
            <div className="w-full px-6 py-8">
              <article className="prose prose-lg max-w-none">
                {children}
              </article>
            </div>
          </div>
          
        </main>
      </div>
      
      {/* 移动端侧边栏 */}
      <div className="md:hidden">
        <Sidebar />
      </div>
    </div>
  )
}
