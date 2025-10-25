import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import i18n from 'i18next'

const useLayoutStore = create(
  persist(
    (set, get) => ({
      // 侧边栏状态
      sidebarCollapsed: false,
      toggleSidebar: () => set((state) => ({ sidebarCollapsed: !state.sidebarCollapsed })),
      
      // 当前模块
      currentModule: 'business',
      setCurrentModule: (module) => set({ currentModule: module }),
      
      // 主题状态
      theme: 'light',
      toggleTheme: () => {
        const newTheme = get().theme === 'light' ? 'dark' : 'light'
        set({ theme: newTheme })
        // 应用主题到document
        document.documentElement.classList.toggle('dark', newTheme === 'dark')
      },
      
      // 语言状态
      language: 'en',
      setLanguage: (lang) => {
        set({ language: lang })
        // 同步到i18n
        i18n.changeLanguage(lang)
      },
      
      // 移动端菜单状态
      mobileMenuOpen: false,
      toggleMobileMenu: () => set((state) => ({ mobileMenuOpen: !state.mobileMenuOpen }))
    }),
    {
      name: 'layout-storage',
      partialize: (state) => ({ 
        theme: state.theme, 
        language: state.language,
        sidebarCollapsed: state.sidebarCollapsed 
      }),
      onRehydrateStorage: () => (state) => {
        // 恢复主题
        if (state?.theme) {
          document.documentElement.classList.toggle('dark', state.theme === 'dark')
        }
        // 恢复语言
        if (state?.language) {
          i18n.changeLanguage(state.language)
        }
      }
    }
  )
)

export { useLayoutStore }
