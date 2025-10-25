import React from 'react'
import { useTranslation } from 'react-i18next'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'

export function CodeHighlight({ 
  code, 
  language = 'python', 
  showLineNumbers = true,
  editable = false 
}) {
  const { t } = useTranslation()
  
  if (editable) {
    return (
      <textarea
        value={code}
        onChange={(e) => {
          // 这里可以添加编辑处理逻辑
        }}
        className="w-full h-64 p-4 font-mono text-sm bg-gray-900 text-gray-100 rounded-lg border border-gray-200 resize-none focus:outline-none focus:ring-2 focus:ring-primary-500"
        placeholder={t('codeBlock.placeholder')}
      />
    )
  }

  return (
    <div className="rounded-lg overflow-hidden border border-gray-200">
      <SyntaxHighlighter
        language={language}
        style={tomorrow}
        showLineNumbers={showLineNumbers}
        customStyle={{
          margin: 0,
          fontSize: '14px',
          lineHeight: '1.5',
          padding: '16px'
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  )
}
