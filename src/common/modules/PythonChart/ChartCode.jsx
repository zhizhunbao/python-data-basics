import React from 'react'
import { useTranslation } from 'react-i18next'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'

export function ChartCode({ code }) {
  const { t } = useTranslation()
  
  return (
    <div className="space-y-2">
      <h4 className="text-sm font-medium text-gray-700">{t('common.chart.pythonCode')}</h4>
      <div className="rounded-lg overflow-hidden border border-gray-200">
        <SyntaxHighlighter
          language="python"
          style={tomorrow}
          customStyle={{
            margin: 0,
            fontSize: '14px',
            lineHeight: '1.5'
          }}
        >
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  )
}
