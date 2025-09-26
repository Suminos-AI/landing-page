import Link from 'next/link'
import Image from 'next/image'
import { formatDate } from 'app/news/utils'

interface NewsCardProps {
  post: {
    slug: string
    metadata: {
      title: string
      publishedAt: string
      summary: string
      image?: string
      category?: string
      author?: string
    }
  }
}

export function NewsCard({ post }: NewsCardProps) {
  return (
    <Link
      href={`/news/${post.slug}`}
      className="group block bg-white dark:bg-slate-800 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600"
    >
      <div className="aspect-video relative overflow-hidden">
        {post.metadata.image ? (
          <Image
            src={post.metadata.image}
            alt={post.metadata.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-800 flex items-center justify-center">
            <div className="text-slate-400 dark:text-slate-500 text-4xl">📰</div>
          </div>
        )}
        {post.metadata.category && (
          <div className="absolute top-3 left-3">
            <span className="bg-blue-500 text-white text-xs font-medium px-2 py-1 rounded-full">
              {post.metadata.category}
            </span>
          </div>
        )}
      </div>
      
      <div className="p-6">
        <div className="flex items-center justify-between text-sm text-slate-500 dark:text-slate-400 mb-2">
          <span>{formatDate(post.metadata.publishedAt)}</span>
          {post.metadata.author && (
            <span>By {post.metadata.author}</span>
          )}
        </div>
        
        <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200 line-clamp-2">
          {post.metadata.title}
        </h3>
        
        <p className="text-slate-600 dark:text-slate-300 text-sm line-clamp-3 leading-relaxed">
          {post.metadata.summary}
        </p>
        
        <div className="mt-4 flex items-center text-blue-600 dark:text-blue-400 text-sm font-medium group-hover:gap-2 transition-all duration-200">
          Read more
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
