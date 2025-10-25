import React from 'react'
import { useTranslation } from 'react-i18next'
import { Pagination } from './Pagination'

export function DataTable({ 
  data = [], 
  columns = [], 
  title,
  showPagination = true,
  pageSize = 10 
}) {
  const { t } = useTranslation()
  
  if (!data.length) {
    return (
      <div className="card mb-component-lg">
        {title && <h3 className="text-lg font-semibold mb-4">{title}</h3>}
        <div className="text-center py-8 text-gray-500">
          {t('common.dataTable.noData')}
        </div>
      </div>
    )
  }

  return (
    <div className="card mb-component-lg">
      {title && <h3 className="text-lg font-semibold mb-4">{title}</h3>}
      
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-gray-200">
              {columns.map((column, index) => (
                <th 
                  key={index}
                  className="text-left py-3 px-4 font-medium text-gray-700"
                >
                  {column.title}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIndex) => (
              <tr 
                key={rowIndex}
                className="border-b border-gray-100 hover:bg-gray-50"
              >
                {columns.map((column, colIndex) => (
                  <td 
                    key={colIndex}
                    className="py-3 px-4 text-gray-900"
                  >
                    {column.render ? column.render(row[column.key], row) : row[column.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {showPagination && (
        <div className="mt-4">
          <Pagination 
            totalItems={data.length}
            pageSize={pageSize}
          />
        </div>
      )}
    </div>
  )
}
