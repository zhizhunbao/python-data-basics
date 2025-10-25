import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

// 导入各模块的翻译文件
import layoutZhCN from '@layout/locales/zh-CN'
import layoutEnUS from '@layout/locales/en-US'
import businessZhCN from '@business/locales/zh-CN'
import businessEnUS from '@business/locales/en-US'
import visualizationZhCN from '@visualization/locales/zh-CN'
import visualizationEnUS from '@visualization/locales/en-US'
import workflowZhCN from '@workflow/locales/zh-CN'
import workflowEnUS from '@workflow/locales/en-US'
import pythonChartZhCN from '@pythonChart/locales/zh-CN'
import pythonChartEnUS from '@pythonChart/locales/en-US'
import codeBlockZhCN from '@codeBlock/locales/zh-CN'
import codeBlockEnUS from '@codeBlock/locales/en-US'
import dataTableZhCN from '@dataTable/locales/zh-CN'
import dataTableEnUS from '@dataTable/locales/en-US'
import mdxZhCN from '@mdx/locales/zh-CN'
import mdxEnUS from '@mdx/locales/en-US'

// 合并所有翻译资源
const resources = {
  'zh-CN': {
    translation: {
      ...layoutZhCN,
      ...businessZhCN,
      ...visualizationZhCN,
      ...workflowZhCN,
      ...pythonChartZhCN,
      ...codeBlockZhCN,
      ...dataTableZhCN,
      ...mdxZhCN
    }
  },
  'en': {
    translation: {
      ...layoutEnUS,
      ...businessEnUS,
      ...visualizationEnUS,
      ...workflowEnUS,
      ...pythonChartEnUS,
      ...codeBlockEnUS,
      ...dataTableEnUS,
      ...mdxEnUS
    }
  }
}

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // 默认语言
    fallbackLng: 'en',
    
    interpolation: {
      escapeValue: false // React 已经处理了 XSS
    },
    
    // 调试模式（开发环境）
    debug: process.env.NODE_ENV === 'development'
  })

// 导出初始化函数，用于在应用启动时同步状态
export const initializeI18n = () => {
  // 从localStorage恢复语言设置
  const savedLanguage = localStorage.getItem('language')
  if (savedLanguage && ['zh-CN', 'en'].includes(savedLanguage)) {
    i18n.changeLanguage(savedLanguage)
  }
  
  // 监听语言变化，保存到localStorage
  i18n.on('languageChanged', (lng) => {
    localStorage.setItem('language', lng)
  })
}

export default i18n
