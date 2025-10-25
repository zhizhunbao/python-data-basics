import { create } from 'zustand'

const useMDXStore = create((set) => ({
  // MDX 内容
  content: '',
  setContent: (content) => set({ content }),
  
  // 组件映射
  components: {},
  setComponents: (components) => set({ components }),
  
  // 交互状态
  interactiveMode: false,
  setInteractiveMode: (mode) => set({ interactiveMode: mode }),
  
  // 数据预览
  previewData: null,
  setPreviewData: (data) => set({ previewData: data }),
  
  // 目录相关状态
  headings: [],
  setHeadings: (headings) => set({ headings }),
  
  activeHeadingId: '',
  setActiveHeadingId: (id) => set({ activeHeadingId: id }),
  
  tocVisible: true,
  setTocVisible: (visible) => set({ tocVisible: visible })
}))

export { useMDXStore }
