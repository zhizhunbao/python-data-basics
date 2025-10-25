import React, { useState, useEffect, useCallback, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { useMDXStore } from './store'

/**
 * MDXTableOfContents 组件 - 专门为 MDX 内容设计的目录组件
 * 
 * 特点：
 * - 使用 zustand store 管理状态
 * - 自动检测 MDX 容器中的标题
 * - 支持滚动同步和高亮
 * - 轻量级，性能优化
 */
export function MDXTableOfContents({ 
  className = '',
  showTitle = true,
  maxLevel = 6,
  minLevel = 1,
  scrollOffset = 100,
  smoothScroll = true,
  showLevelNumbers = false,
  customSelector = 'h1, h2, h3, h4, h5, h6',
  containerSelector = 'article.prose, .mdx-content, [data-mdx-content]'
}) {
  const { t } = useTranslation()
  const { 
    headings, 
    setHeadings, 
    activeHeadingId, 
    setActiveHeadingId,
    tocVisible,
    setTocVisible 
  } = useMDXStore()
  
  const [isReady, setIsReady] = useState(false)
  const scrollTimeoutRef = useRef(null)
  const tocRef = useRef(null)
  const retryTimeoutRef = useRef(null)
  const mountedRef = useRef(true)

  // 获取标题列表
  const getHeadings = useCallback(() => {
    let container = document.querySelector(containerSelector)
    
    if (!container) {
      setIsReady(false)
      return []
    }
    
    setIsReady(true)
    
    const headingElements = container.querySelectorAll(customSelector)
    const headingList = Array.from(headingElements)
      .filter(heading => {
        const level = parseInt(heading.tagName.charAt(1))
        return level >= minLevel && level <= maxLevel
      })
      .map((heading, index) => ({
        id: heading.id || `heading-${index}`,
        text: heading.textContent?.trim() || '',
        level: parseInt(heading.tagName.charAt(1)),
        element: heading,
        offsetTop: heading.offsetTop
      }))
    
    setHeadings(headingList)
    return headingList
  }, [customSelector, minLevel, maxLevel, containerSelector, setHeadings])

  // 滚动监听处理
  const handleScroll = useCallback(() => {
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current)
    }
    
    scrollTimeoutRef.current = setTimeout(() => {
      const scrollPosition = window.scrollY + scrollOffset
      
      // 找到当前可见的标题
      for (let i = headings.length - 1; i >= 0; i--) {
        const heading = headings[i]
        if (heading.offsetTop <= scrollPosition) {
          setActiveHeadingId(heading.id)
          break
        }
      }
    }, 10)
  }, [scrollOffset, headings, setActiveHeadingId])

  // 滚动到指定标题
  const scrollToHeading = useCallback((id) => {
    const element = document.getElementById(id)
    if (element) {
      const targetPosition = element.offsetTop - scrollOffset
      
      if (smoothScroll) {
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        })
      } else {
        window.scrollTo(0, targetPosition)
      }
    }
  }, [scrollOffset, smoothScroll])

  // 键盘导航支持
  const handleKeyDown = useCallback((e) => {
    if (!tocRef.current?.contains(document.activeElement)) return
    
    const currentIndex = headings.findIndex(h => h.id === activeHeadingId)
    
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault()
        if (currentIndex < headings.length - 1) {
          scrollToHeading(headings[currentIndex + 1].id)
        }
        break
      case 'ArrowUp':
        e.preventDefault()
        if (currentIndex > 0) {
          scrollToHeading(headings[currentIndex - 1].id)
        }
        break
      case 'Home':
        e.preventDefault()
        if (headings.length > 0) {
          scrollToHeading(headings[0].id)
        }
        break
      case 'End':
        e.preventDefault()
        if (headings.length > 0) {
          scrollToHeading(headings[headings.length - 1].id)
        }
        break
    }
  }, [headings, activeHeadingId, scrollToHeading])

  // 重试机制 - 等待容器加载
  useEffect(() => {
    const retryGetHeadings = () => {
      if (!mountedRef.current) return
      
      const container = document.querySelector(containerSelector)
      if (container) {
        getHeadings()
      } else {
        retryTimeoutRef.current = setTimeout(retryGetHeadings, 500)
      }
    }
    
    retryGetHeadings()
    
    return () => {
      if (retryTimeoutRef.current) {
        clearTimeout(retryTimeoutRef.current)
      }
    }
  }, [containerSelector, getHeadings])

  // 初始化事件监听
  useEffect(() => {
    // 监听滚动事件
    window.addEventListener('scroll', handleScroll, { passive: true })
    
    // 监听容器变化
    let container = document.querySelector(containerSelector)
    let observer = null
    
    if (container) {
      observer = new MutationObserver(() => {
        getHeadings()
      })
      
      observer.observe(container, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ['id']
      })
    }
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (observer) {
        observer.disconnect()
      }
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current)
      }
      if (retryTimeoutRef.current) {
        clearTimeout(retryTimeoutRef.current)
      }
    }
  }, [handleScroll, getHeadings, containerSelector])

  // 组件卸载时清理
  useEffect(() => {
    return () => {
      mountedRef.current = false
    }
  }, [])

  // 如果没有标题，显示空状态
  if (headings.length === 0) {
    return (
      <div className={`p-4 ${className}`}>
        {showTitle && (
          <div className="mb-4">
            <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700 pb-2 text-center">
              {t('tableOfContents.title')}
            </h3>
          </div>
        )}
        <div className="text-sm text-gray-500 dark:text-gray-400">
          {!isReady ? (
            <div className="flex items-center space-x-2">
              <div className="animate-spin rounded-full h-3 w-3 border-b-2 border-gray-400"></div>
              <span>{t('tableOfContents.loading')}</span>
            </div>
          ) : (
            <p>{t('tableOfContents.noHeadings')}</p>
          )}
        </div>
      </div>
    )
  }

  return (
    <div 
      ref={tocRef}
      className={`p-4 ${className}`}
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      {/* 标题栏 */}
      {showTitle && (
        <div className="mb-4">
          <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700 pb-2 text-center">
            {t('tableOfContents.title')}
          </h3>
        </div>
      )}

      {/* 目录内容 */}
      <nav className="space-y-1" role="navigation" aria-label={t('tableOfContents.title')}>
        {headings.map((heading, index) => (
          <button
            key={heading.id}
            onClick={() => scrollToHeading(heading.id)}
            className={`block w-full text-left py-1 px-2 rounded text-sm transition-all duration-200 ${
              activeHeadingId === heading.id
                ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 font-medium'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800/50'
            }`}
            style={{ 
              paddingLeft: `${(heading.level - minLevel) * 12 + 8}px`,
              fontSize: `${Math.max(0.75, 1 - (heading.level - minLevel) * 0.05)}rem`
            }}
            aria-current={activeHeadingId === heading.id ? 'location' : undefined}
            title={heading.text}
          >
            <span className="flex items-center">
              {showLevelNumbers && (
                <span className="mr-2 text-xs text-gray-400 dark:text-gray-500">
                  {heading.level}.
                </span>
              )}
              <span className="truncate">{heading.text}</span>
            </span>
          </button>
        ))}
      </nav>
    </div>
  )
}
