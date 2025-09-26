import Link from 'next/link'
import Image from 'next/image'
import { formatDate } from 'app/articles/utils'

interface ArticleCardProps {
  article: {
    slug: string
    metadata: {
      title: string
      publishedAt: string
      summary: string
      image?: string
      category?: string
      author?: string
      readTime?: string
      tags?: string[]
    }
  }
}

export function ArticleCard({ article }: ArticleCardProps) {
  return (
    <Link
      href={`/articles/${article.slug}`}
      className="group block bg-white dark:bg-slate-800 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600"
    >
      <div className="aspect-video relative overflow-hidden">
        {article.metadata.image ? (
          <Image
            src={article.metadata.image}
            alt={article.metadata.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-green-100 to-green-200 dark:from-green-800 dark:to-green-900 flex items-center justify-center">
            <div className="text-green-600 dark:text-green-400 text-4xl">📚</div>
          </div>
        )}
        {article.metadata.category && (
          <div className="absolute top-3 left-3">
            <span className="bg-green-500 text-white text-xs font-medium px-2 py-1 rounded-full">
              {article.metadata.category}
            </span>
          </div>
        )}
      </div>
      
      <div className="p-6">
        <div className="flex items-center justify-between text-sm text-slate-500 dark:text-slate-400 mb-2">
          <span>{formatDate(article.metadata.publishedAt)}</span>
          <div className="flex items-center space-x-2">
            {article.metadata.readTime && (
              <span>{article.metadata.readTime}</span>
            )}
            {article.metadata.author && (
              <span>• {article.metadata.author}</span>
            )}
          </div>
        </div>
        
        <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-200 line-clamp-2">
          {article.metadata.title}
        </h3>
        
        <p className="text-slate-600 dark:text-slate-300 text-sm line-clamp-3 leading-relaxed mb-4">
          {article.metadata.summary}
        </p>

        {/* Tags */}
        {article.metadata.tags && article.metadata.tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-4">
            {article.metadata.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-xs px-2 py-1 rounded"
              >
                #{tag}
              </span>
            ))}
            {article.metadata.tags.length > 3 && (
              <span className="text-slate-400 text-xs">
                +{article.metadata.tags.length - 3} more
              </span>
            )}
          </div>
        )}
        
        <div className="flex items-center text-green-600 dark:text-green-400 text-sm font-medium group-hover:gap-2 transition-all duration-200">
          Read article
          <svg 
            className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </Link>
  )
}
