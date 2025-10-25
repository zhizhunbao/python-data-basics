import { create } from 'zustand'

const useDataTableStore = create((set) => ({
  // 表格数据
  data: [],
  setData: (data) => set({ data }),
  
  // 分页状态
  currentPage: 1,
  pageSize: 10,
  totalItems: 0,
  
  setCurrentPage: (page) => set({ currentPage: page }),
  setPageSize: (size) => set({ pageSize: size }),
  setTotalItems: (total) => set({ totalItems: total }),
  
  // 排序状态
  sortColumn: null,
  sortDirection: 'asc',
  setSort: (column, direction) => set({ sortColumn: column, sortDirection: direction }),
  
  // 过滤状态
  filters: {},
  setFilter: (column, value) => set((state) => ({
    filters: { ...state.filters, [column]: value }
  })),
  clearFilters: () => set({ filters: {} })
}))

export { useDataTableStore }
