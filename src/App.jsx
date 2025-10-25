import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { Layout } from '@common/modules/Layout'
import { businessRoutes } from '@modules/Business/route.jsx'
import { DataToolsRoutes } from '@modules/DataTools/route.jsx'
import { visualizationRoutes } from '@modules/Visualization/route.jsx'
import { workflowRoutes } from '@modules/Workflow/route.jsx'
import '@i18n' // 导入 i18n 配置

// GitHub Pages SPA 重定向处理组件
function GitHubPagesRedirect() {
  const location = useLocation()

  useEffect(() => {
    // 检查是否从404.html重定向而来
    const from404 = sessionStorage.getItem('from404')
    const originalPath = sessionStorage.getItem('originalPath')
    
    if (from404 === 'true' && originalPath) {
      // 清除标记
      sessionStorage.removeItem('from404')
      sessionStorage.removeItem('originalPath')
      
      // 重定向到原始路径
      window.history.replaceState(null, '', originalPath)
      window.location.reload()
    }
  }, [location])

  return null
}

function App() {
  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <GitHubPagesRedirect />
      <Layout>
        <Routes>
          {/* 业务目标与数据理解模块 */}
          {businessRoutes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
          
          {/* Python数据处理工具学习模块 */}
          {DataToolsRoutes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
          
          {/* 数据可视化工具学习模块 */}
          {visualizationRoutes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
          
          {/* 完整数据分析流程实战模块 */}
          {workflowRoutes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
          
          {/* 默认路由 - 重定向到业务目标页面 */}
          <Route path="/" element={<Navigate to="/business" replace />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
