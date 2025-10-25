import React from 'react'
import { Sidebar } from './Sidebar'
import { PageContent } from './PageContent'

export function MainContainer({ children }) {
  return (
    <div className="flex min-h-screen pt-16">
      <Sidebar />
      <main className="flex-1 overflow-auto">
        <div className="w-full px-6 py-8">
          <article className="prose prose-lg max-w-none">
            <PageContent>
              {children}
            </PageContent>
          </article>
        </div>
      </main>
    </div>
  )
}
