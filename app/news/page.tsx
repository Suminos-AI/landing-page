import { NewsGrid } from 'app/components/NewsGrid'

export const metadata = {
  title: 'News',
  description: 'Stay updated with the latest news and insights.',
}

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Latest News
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Stay informed with the latest updates, insights, and stories from our team
          </p>
        </div>

        {/* News Grid */}
        <NewsGrid />
      </div>
    </div>
  )
}
