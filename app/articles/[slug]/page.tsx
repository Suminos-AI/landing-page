import { notFound } from 'next/navigation'
import { CustomMDX } from 'app/components/mdx'
import { formatDate, getArticles } from 'app/articles/utils'
import { baseUrl } from 'app/sitemap'
import Link from 'next/link'
import Image from 'next/image'

export async function generateStaticParams() {
  let articles = getArticles()

  return articles.map((article) => ({
    slug: article.slug,
  }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  let article = getArticles().find((article) => article.slug === slug)
  if (!article) {
    return
  }

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = article.metadata
  let ogImage = image
    ? image
    : `${baseUrl}/og?title=${encodeURIComponent(title)}`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      url: `${baseUrl}/articles/${article.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  }
}

export default async function ArticleDetail({ params }) {
  const { slug } = await params
  let article = getArticles().find((article) => article.slug === slug)

  if (!article) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <Link 
          href="/articles" 
          className="inline-flex items-center text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white mb-8 transition-colors duration-200"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Articles
        </Link>

        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Article',
              headline: article.metadata.title,
              datePublished: article.metadata.publishedAt,
              dateModified: article.metadata.publishedAt,
              description: article.metadata.summary,
              image: article.metadata.image
                ? `${baseUrl}${article.metadata.image}`
                : `/og?title=${encodeURIComponent(article.metadata.title)}`,
              url: `${baseUrl}/articles/${article.slug}`,
              author: {
                '@type': 'Person',
                name: article.metadata.author || 'Suminos Career Expert',
              },
            }),
          }}
        />

        <article className="bg-white dark:bg-slate-800 rounded-lg shadow-lg overflow-hidden">
          {/* Featured Image */}
          {article.metadata.image && (
            <div className="aspect-video relative">
              <Image
                src={article.metadata.image}
                alt={article.metadata.title}
                fill
                className="object-cover"
              />
            </div>
          )}

          <div className="p-8">
            {/* Category and Date */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-4">
                {article.metadata.category && (
                  <span className="bg-green-500 text-white text-sm font-medium px-3 py-1 rounded-full">
                    {article.metadata.category}
                  </span>
                )}
                <span className="text-slate-500 dark:text-slate-400 text-sm">
                  {formatDate(article.metadata.publishedAt)}
                </span>
                {article.metadata.readTime && (
                  <span className="text-slate-500 dark:text-slate-400 text-sm">
                    {article.metadata.readTime}
                  </span>
                )}
              </div>
              {article.metadata.author && (
                <span className="text-slate-500 dark:text-slate-400 text-sm">
                  By {article.metadata.author}
                </span>
              )}
            </div>

            {/* Title */}
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
              {article.metadata.title}
            </h1>

            {/* Summary */}
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
              {article.metadata.summary}
            </p>

            {/* Tags */}
            {article.metadata.tags && (
              <div className="flex flex-wrap gap-2 mb-8">
                {article.metadata.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-sm px-3 py-1 rounded-full"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}

            {/* Content */}
            <div className="prose prose-slate dark:prose-invert max-w-none">
              <CustomMDX source={article.content} />
            </div>
          </div>
        </article>
      </div>
    </div>
  )
}
