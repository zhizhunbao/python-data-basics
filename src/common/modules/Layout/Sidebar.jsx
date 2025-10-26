import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate, useLocation } from 'react-router-dom'
import { useLayoutStore } from './store'
import { 
  Target, 
  Settings, 
  BarChart3, 
  Zap
} from 'lucide-react'

const navigationItems = [
  {
    id: 'business',
    key: 'nav.business',
    path: '/business',
    icon: <Target className="w-5 h-5" />,
    color: 'from-green-500 to-green-600'
  },
  {
    id: 'dataTools',
    key: 'nav.dataTools',
    path: '/data-tools',
    icon: <Settings className="w-5 h-5" />,
    color: 'from-emerald-500 to-emerald-600'
  },
  {
    id: 'visualization',
    key: 'nav.visualization',
    path: '/visualization',
    icon: <BarChart3 className="w-5 h-5" />,
    color: 'from-purple-500 to-purple-600'
  },
  {
    id: 'workflow',
    key: 'nav.workflow',
    path: '/workflow',
    icon: <Zap className="w-5 h-5" />,
    color: 'from-orange-500 to-orange-600'
  }
]

// 根据当前路径确定应该选中的模块
const getModuleFromPath = (pathname) => {
  if (pathname.startsWith('/business')) return 'business'
  if (pathname.startsWith('/data-tools')) return 'dataTools'
  if (pathname.startsWith('/visualization')) return 'visualization'
  if (pathname.startsWith('/workflow')) return 'workflow'
  return 'business' // 默认选中business模块
}

export function Sidebar() {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const location = useLocation()
  const { currentModule, setCurrentModule, mobileMenuOpen, theme, sidebarCollapsed } = useLayoutStore()

  // 根据当前路径自动设置当前模块
  useEffect(() => {
    const moduleFromPath = getModuleFromPath(location.pathname)
    if (moduleFromPath !== currentModule) {
      setCurrentModule(moduleFromPath)
    }
  }, [location.pathname, currentModule, setCurrentModule])

  const toggleModule = (moduleId) => {
    // 所有模块始终保持展开状态，只进行导航
    setCurrentModule(moduleId)
  }

  const renderNavigationItem = (item, isMobile = false) => {
    const isActive = currentModule === item.id

    return (
      <button
        key={item.id}
        onClick={() => {
          if (isMobile) {
            setCurrentModule(item.id)
            navigate(item.path)
            useLayoutStore.getState().toggleMobileMenu()
          } else {
            toggleModule(item.id)
            navigate(item.path)
          }
        }}
        className={`group flex items-center w-full py-3 px-3 rounded-lg transition-colors duration-150 ${
          isActive 
            ? (theme === 'dark' ? 'bg-slate-800 text-white font-semibold' : 'bg-slate-100 text-slate-900 font-semibold')
            : (theme === 'dark' ? 'text-slate-300 hover:text-white hover:bg-slate-800' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50')
        }`}
      >
        <div className={`mr-3 flex-shrink-0 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-400'}`}>
          {item.icon}
        </div>
        <span className={`text-sm leading-tight ${
          isActive 
            ? (theme === 'dark' ? 'text-white' : 'text-slate-900')
            : (theme === 'dark' ? 'text-slate-300' : 'text-slate-600')
        }`}>{t(item.key)}</span>
      </button>
    )
  }

  return (
    <>
      {/* 桌面端侧边栏 */}
      <aside className={`hidden md:block w-64 border-r p-6 transition-all duration-300 fixed left-0 top-16 z-30 ${
        sidebarCollapsed ? '-translate-x-full' : 'translate-x-0'
      } ${
        theme === 'dark' 
          ? 'bg-slate-900 border-slate-700' 
          : 'bg-white border-gray-200'
      }`} style={{ height: 'calc(100vh - 64px)' }}>
        <nav className="space-y-1">
          {navigationItems.map((item) => renderNavigationItem(item, false))}
        </nav>
      </aside>

      {/* 移动端抽屉菜单 */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40">
          <div className="fixed inset-0 bg-black bg-opacity-50" onClick={() => useLayoutStore.getState().toggleMobileMenu()} />
          <aside className={`fixed left-0 top-0 h-full w-64 border-r p-6 transition-colors duration-200 ${
            theme === 'dark' 
              ? 'bg-slate-900 border-slate-700' 
              : 'bg-white border-gray-200'
          }`}>
            <nav className="space-y-1">
              {navigationItems.map((item) => renderNavigationItem(item, true))}
            </nav>
          </aside>
        </div>
      )}
    </>
  )
}
