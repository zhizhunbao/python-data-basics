import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const useVisualizationStore = create(
  persist(
    (set, get) => ({
      // 图表类型状态
      chartTypes: [],
      setChartTypes: (types) => set({ chartTypes: types }),
      
      // Matplotlib 基础状态
      matplotlibBasics: {
        plots: [],
        styles: [],
        customizations: {},
        currentPlot: null
      },
      setMatplotlibBasics: (basics) => set({ matplotlibBasics: basics }),
      
      // 可视化配置
      visualizationConfig: {
        theme: 'default',
        colorPalette: 'viridis',
        figureSize: { width: 8, height: 6 },
        dpi: 100
      },
      setVisualizationConfig: (config) => set({ visualizationConfig: config }),
      
      // 图表库状态
      chartLibraries: {
        matplotlib: { version: '3.7.0', features: [] },
        seaborn: { version: '0.12.0', features: [] },
        plotly: { version: '5.15.0', features: [] }
      },
      setChartLibraries: (libraries) => set({ chartLibraries: libraries }),
      
      // 学习进度
      progress: {
        completedSections: [],
        currentSection: 'matplotlib-basics',
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
      
      // 图表模板
      chartTemplates: [],
      setChartTemplates: (templates) => set({ chartTemplates: templates }),
      saveChartTemplate: (template) => set((state) => ({
        chartTemplates: [...state.chartTemplates, template]
      })),
      
      // 交互式练习
      exercises: {},
      setExerciseResult: (exerciseId, result) => set((state) => ({
        exercises: { ...state.exercises, [exerciseId]: result }
      }))
    }),
    {
      name: 'visualization-storage',
      partialize: (state) => ({
        chartTypes: state.chartTypes,
        matplotlibBasics: state.matplotlibBasics,
        visualizationConfig: state.visualizationConfig,
        chartLibraries: state.chartLibraries,
        progress: state.progress,
        notes: state.notes,
        bookmarks: state.bookmarks,
        chartTemplates: state.chartTemplates,
        exercises: state.exercises
      })
    }
  )
)

export { useVisualizationStore }
