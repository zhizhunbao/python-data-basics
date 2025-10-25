// Workflow 模块路由配置
import { WorkflowMDXPage } from './WorkflowMDXPage'

export const workflowRoutes = [
  {
    path: '/workflow',
    element: <WorkflowMDXPage />
  },
  {
    path: '/workflow/data-collection',
    element: <WorkflowMDXPage />
  }
]
