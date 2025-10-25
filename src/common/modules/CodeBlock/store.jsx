import { create } from 'zustand'

const useCodeBlockStore = create((set) => ({
  // 代码内容
  code: '',
  setCode: (code) => set({ code }),
  
  // 语言类型
  language: 'python',
  setLanguage: (language) => set({ language }),
  
  // 是否显示行号
  showLineNumbers: true,
  setShowLineNumbers: (show) => set({ showLineNumbers: show }),
  
  // 是否可编辑
  editable: false,
  setEditable: (editable) => set({ editable }),
  
  // 主题
  theme: 'tomorrow',
  setTheme: (theme) => set({ theme })
}))

export { useCodeBlockStore }
