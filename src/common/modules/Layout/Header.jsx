import React from 'react'
import { useTranslation } from 'react-i18next'
import { Menu, Sun, Moon, Globe, BookOpen, ChevronLeft, ChevronRight } from 'lucide-react'
import { useLayoutStore } from './store'

export function Header() {
  const { t } = useTranslation()
  const { theme, toggleTheme, language, setLanguage, sidebarCollapsed, toggleSidebar } = useLayoutStore()

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 h-16 px-4 flex items-center justify-between transition-colors duration-200 ${
      theme === 'dark' 
        ? 'bg-gray-900 border-gray-700' 
        : 'bg-white border-gray-200'
    } border-b shadow-sm`}>
      
      {/* 左侧：Logo 和侧边栏切换 */}
      <div className="flex items-center space-x-4">
        {/* 侧边栏切换按钮 */}
        <button
          onClick={toggleSidebar}
          className={`p-2 rounded-lg transition-all duration-200 ${
            theme === 'dark' 
              ? 'hover:bg-gray-800 text-gray-300 hover:text-white' 
              : 'hover:bg-gray-100 text-gray-600 hover:text-gray-900'
          }`}
        >
          {sidebarCollapsed ? <ChevronRight className="w-5 h-5" /> : <ChevronLeft className="w-5 h-5" />}
        </button>
        
        {/* Logo 和标题 */}
        <div className="flex items-center space-x-3">
          <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
            theme === 'dark' 
              ? 'bg-blue-600' 
              : 'bg-blue-600'
          }`}>
            <BookOpen className="w-4 h-4 text-white" />
          </div>
          <h1 className={`text-lg font-semibold ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            {t('common.title')}
          </h1>
        </div>
      </div>

      {/* 右侧：控制按钮 */}
      <div className="flex items-center space-x-2">
        {/* 语言切换 */}
        <button
          onClick={() => setLanguage(language === 'en' ? 'zh-CN' : 'en')}
          className={`p-2 rounded-lg transition-all duration-200 ${
            theme === 'dark' 
              ? 'hover:bg-gray-800 text-gray-300 hover:text-white' 
              : 'hover:bg-gray-100 text-gray-600 hover:text-gray-900'
          }`}
          title={language === 'zh-CN' ? t('language.en') : t('language.zh')}
        >
          <Globe className="w-4 h-4" />
        </button>

        {/* 主题切换 */}
        <button
          onClick={toggleTheme}
          className={`p-2 rounded-lg transition-all duration-200 ${
            theme === 'dark' 
              ? 'hover:bg-gray-800 text-gray-300 hover:text-white' 
              : 'hover:bg-gray-100 text-gray-600 hover:text-gray-900'
          }`}
          title={theme === 'light' ? t('theme.dark') : t('theme.light')}
        >
          {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
        </button>
      </div>
    </header>
  )
}