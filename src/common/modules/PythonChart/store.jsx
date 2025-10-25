import { create } from 'zustand'

const usePythonChartStore = create((set) => ({
  // 图表代码
  chartCode: '',
  setChartCode: (code) => set({ chartCode: code }),
  
  // 图表输出
  chartOutput: null,
  setChartOutput: (output) => set({ chartOutput: output }),
  
  // 图表类型
  chartType: 'line',
  setChartType: (type) => set({ chartType: type }),
  
  // 执行状态
  isExecuting: false,
  setIsExecuting: (executing) => set({ isExecuting: executing }),
  
  // 错误信息
  error: null,
  setError: (error) => set({ error })
}))

export { usePythonChartStore }
