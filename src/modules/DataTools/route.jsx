// DataTools 模块路由配置
import { DataToolsMDXPage } from './DataToolsMDXPage'

export const DataToolsRoutes = [
  {
    path: '/data-tools',
    element: <DataToolsMDXPage />
  },
  {
    path: '/data-tools/framework-comparison',
    element: <DataToolsMDXPage />
  },
  {
    path: '/data-tools/csv-processing',
    element: <DataToolsMDXPage />
  },
  {
    path: '/data-tools/list-deep-dive',
    element: <DataToolsMDXPage />
  }
]
