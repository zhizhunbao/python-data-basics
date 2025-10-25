// Business 模块路由配置
import { BusinessMDXPage } from './BusinessMDXPage'

export const businessRoutes = [
  {
    path: '/business',
    element: <BusinessMDXPage />
  },
  {
    path: '/business/content',
    element: <BusinessMDXPage />
  },
  {
    path: '/business/goals',
    element: <BusinessMDXPage />
  },
  {
    path: '/business/problem-definition',
    element: <BusinessMDXPage />
  },
  {
    path: '/business/data-understanding',
    element: <BusinessMDXPage />
  }
]
