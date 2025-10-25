import React from 'react'
import { useTranslation } from 'react-i18next'

export function ChartOutput({ output }) {
  const { t } = useTranslation()
  
  if (!output) {
    return (
      <div className="space-y-2">
        <h4 className="text-sm font-medium text-gray-700">{t('common.chart.output')}</h4>
        <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
          <p className="text-gray-500">{t('common.chart.noData')}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-2">
      <h4 className="text-sm font-medium text-gray-700">{t('common.chart.output')}</h4>
      <div className="h-64 bg-white rounded-lg border border-gray-200 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-2">
            <span className="text-primary-600 text-2xl">📊</span>
          </div>
          <p className="text-sm text-gray-600">{t('common.chart.willDisplay')}</p>
        </div>
      </div>
    </div>
  )
}
