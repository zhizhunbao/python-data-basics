import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const useWorkflowStore = create(
  persist(
    (set, get) => ({
      // 工作流步骤状态
      workflowSteps: [],
      setWorkflowSteps: (steps) => set({ workflowSteps: steps }),
      
      // 当前步骤
      currentStep: 0,
      setCurrentStep: (step) => set({ currentStep: step }),
      nextStep: () => set((state) => ({ currentStep: state.currentStep + 1 })),
      prevStep: () => set((state) => ({ currentStep: Math.max(0, state.currentStep - 1) })),
      
      // 数据收集状态
      dataCollection: {
        sources: [],
        methods: [],
        quality: {},
        collectedData: null
      },
      setDataCollection: (collection) => set({ dataCollection: collection }),
      
      // 工作流进度
      progress: {
        completedSteps: [],
        currentStep: 'data-collection',
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
      
      // 工作流模板
      templates: [],
      setTemplates: (templates) => set({ templates }),
      saveTemplate: (template) => set((state) => ({
        templates: [...state.templates, template]
      }))
    }),
    {
      name: 'workflow-storage',
      partialize: (state) => ({
        workflowSteps: state.workflowSteps,
        currentStep: state.currentStep,
        dataCollection: state.dataCollection,
        progress: state.progress,
        notes: state.notes,
        bookmarks: state.bookmarks,
        templates: state.templates
      })
    }
  )
)

export { useWorkflowStore }
