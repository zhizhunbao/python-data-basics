import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const useDataToolsStore = create(
  persist(
    (set, get) => ({
      // 工具选择状态
      selectedTools: [],
      setSelectedTools: (tools) => set({ selectedTools: tools }),
      
      // CSV 处理状态
      csvProcessing: {
        files: [],
        processingOptions: {},
        results: null
      },
      setCsvProcessing: (processing) => set({ csvProcessing: processing }),
      
      // 框架比较状态
      frameworkComparison: {
        frameworks: ['pandas', 'numpy', 'dask'],
        comparisonResults: {},
        selectedFramework: 'pandas'
      },
      setFrameworkComparison: (comparison) => set({ frameworkComparison: comparison }),
      
      // 列表深度分析状态
      listAnalysis: {
        dataStructures: [],
        analysisResults: {},
        performanceMetrics: {}
      },
      setListAnalysis: (analysis) => set({ listAnalysis: analysis }),
      
      // 学习进度
      progress: {
        completedSections: [],
        currentSection: 'framework-comparison',
        lastAccessed: null
      },
      setProgress: (progress) => set({ progress }),
      
      // 笔记和标记
      notes: {},
      setNotes: (sectionId, notes) => set((state) => ({
        notes: { ...state.notes, [sectionId]: notes }
      })),
      
      // 书签
      bookmarks: [],
      addBookmark: (bookmark) => set((state) => ({
        bookmarks: [...state.bookmarks, bookmark]
      })),
      removeBookmark: (bookmarkId) => set((state) => ({
        bookmarks: state.bookmarks.filter(b => b.id !== bookmarkId)
      })),
      
      // 代码示例收藏
      codeExamples: [],
      addCodeExample: (example) => set((state) => ({
        codeExamples: [...state.codeExamples, example]
      })),
      removeCodeExample: (exampleId) => set((state) => ({
        codeExamples: state.codeExamples.filter(e => e.id !== exampleId)
      }))
    }),
    {
      name: 'datatools-storage',
      partialize: (state) => ({
        selectedTools: state.selectedTools,
        csvProcessing: state.csvProcessing,
        frameworkComparison: state.frameworkComparison,
        listAnalysis: state.listAnalysis,
        progress: state.progress,
        notes: state.notes,
        bookmarks: state.bookmarks,
        codeExamples: state.codeExamples
      })
    }
  )
)

export { useDataToolsStore }
