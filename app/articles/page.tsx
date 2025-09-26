import { ArticlesGrid } from 'app/components/ArticlesGrid'

export const metadata = {
  title: 'Articles',
  description: 'Expert advice and tips to help you succeed in your job search and career development.',
}

export default function ArticlesPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Career Articles
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Expert insights, interview tips, and career advice to help you land your dream job
          </p>
        </div>

        {/* Articles Grid */}
        <ArticlesGrid />
      </div>
    </div>
  )
}
