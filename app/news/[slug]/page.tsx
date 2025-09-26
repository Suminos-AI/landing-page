import { notFound } from 'next/navigation'
import { CustomMDX } from 'app/components/mdx'
import { formatDate, getNewsPosts } from 'app/news/utils'
import { baseUrl } from 'app/sitemap'
import Link from 'next/link'
import Image from 'next/image'

export async function generateStaticParams() {
  let posts = getNewsPosts()

  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  let post = getNewsPosts().find((post) => post.slug === slug)
  if (!post) {
    return
  }

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata
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
      url: `${baseUrl}/news/${post.slug}`,
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

export default async function NewsDetail({ params }) {
  const { slug } = await params
  let post = getNewsPosts().find((post) => post.slug === slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <Link 
          href="/news" 
          className="inline-flex items-center text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white mb-8 transition-colors duration-200"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to News
        </Link>

        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'NewsArticle',
              headline: post.metadata.title,
              datePublished: post.metadata.publishedAt,
              dateModified: post.metadata.publishedAt,
              description: post.metadata.summary,
              image: post.metadata.image
                ? `${baseUrl}${post.metadata.image}`
                : `/og?title=${encodeURIComponent(post.metadata.title)}`,
              url: `${baseUrl}/news/${post.slug}`,
              author: {
                '@type': 'Person',
                name: post.metadata.author || 'Suminos Team',
              },
            }),
          }}
        />

        <article className="bg-white dark:bg-slate-800 rounded-lg shadow-lg overflow-hidden">
          {/* Featured Image */}
          {post.metadata.image && (
            <div className="aspect-video relative">
              <Image
                src={post.metadata.image}
                alt={post.metadata.title}
                fill
                className="object-cover"
              />
            </div>
          )}

          <div className="p-8">
            {/* Category and Date */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-4">
                {post.metadata.category && (
                  <span className="bg-blue-500 text-white text-sm font-medium px-3 py-1 rounded-full">
                    {post.metadata.category}
                  </span>
                )}
                <span className="text-slate-500 dark:text-slate-400 text-sm">
                  {formatDate(post.metadata.publishedAt)}
                </span>
              </div>
              {post.metadata.author && (
                <span className="text-slate-500 dark:text-slate-400 text-sm">
                  By {post.metadata.author}
                </span>
              )}
            </div>

            {/* Title */}
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
              {post.metadata.title}
            </h1>

            {/* Summary */}
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
              {post.metadata.summary}
            </p>

            {/* Content */}
            <div className="prose prose-slate dark:prose-invert max-w-none">
              <CustomMDX source={post.content} />
            </div>
          </div>
        </article>
      </div>
    </div>
  )
}
