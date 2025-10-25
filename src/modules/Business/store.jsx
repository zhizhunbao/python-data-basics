import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const useBusinessStore = create(
  persist(
    (set, get) => ({
      // 业务目标相关状态
      businessGoals: [],
      setBusinessGoals: (goals) => set({ businessGoals: goals }),
      
      // 问题定义状态
      problemDefinition: {
        problem: '',
        objectives: [],
        constraints: [],
        successCriteria: []
      },
      setProblemDefinition: (definition) => set({ problemDefinition: definition }),
      
      // 数据理解状态
      dataUnderstanding: {
        dataSources: [],
        dataQuality: {},
        dataTypes: [],
        sampleData: null
      },
      setDataUnderstanding: (understanding) => set({ dataUnderstanding: understanding }),
      
      // 学习进度状态
      learningProgress: {
        completedSections: [],
        currentSection: 'goals',
        lastAccessed: null
      },
      setLearningProgress: (progress) => set({ learningProgress: progress }),
      
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
      
      // 交互式练习状态
      exercises: {},
      setExerciseResult: (exerciseId, result) => set((state) => ({
        exercises: { ...state.exercises, [exerciseId]: result }
      }))
    }),
    {
      name: 'business-storage',
      partialize: (state) => ({
        businessGoals: state.businessGoals,
        problemDefinition: state.problemDefinition,
        dataUnderstanding: state.dataUnderstanding,
        learningProgress: state.learningProgress,
        notes: state.notes,
        bookmarks: state.bookmarks,
        exercises: state.exercises
      })
    }
  )
)

export { useBusinessStore }
