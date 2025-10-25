import React from 'react'
import { MDXPage } from '@mdx'
import { useTranslation } from 'react-i18next'
import BusinessContentZh from './content-zh.mdx'
import BusinessContentEn from './content-en.mdx'

/**
 * BusinessMDXPage 组件 - 业务模块的 MDX 内容页面
 * 
 * 特点：
 * - 支持中英文切换
 * - 使用 MDXPage 组件渲染对应语言的内容
 * - 自动包含目录功能
 * - 响应式布局
 */
export function BusinessMDXPage() {
  const { i18n } = useTranslation()
  const currentLanguage = i18n.language || 'zh-CN'
  
  // 根据当前语言选择对应的内容组件
  const ContentComponent = currentLanguage.startsWith('zh') ? BusinessContentZh : BusinessContentEn
  
  return (
    <MDXPage 
      MDXContent={ContentComponent}
      className="p-6"
    />
  )
}
