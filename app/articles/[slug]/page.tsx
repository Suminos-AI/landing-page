import { notFound } from 'next/navigation'
import { CustomMDX } from 'app/components/mdx'
import { formatDate, getArticles } from 'app/articles/utils'
import { baseUrl } from 'app/sitemap'
import Link from 'next/link'
import Image from 'next/image'

export async function generateStaticParams() {
  const articles = getArticles()
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

  const articleUrl = `${baseUrl}/articles/${article.slug}`
  const tags = article.metadata.tags || []

  return {
    title,
    description,
    keywords: [
      ...tags,
      article.metadata.category || '',
      'job search',
      'career advice',
      'resume tips',
    ].filter(Boolean),
    authors: article.metadata.author ? [{ name: article.metadata.author }] : undefined,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      url: articleUrl,
      siteName: 'Suminos',
      locale: 'en_US',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      authors: article.metadata.author ? [article.metadata.author] : undefined,
      tags: tags,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
      creator: '@suminos',
    },
    alternates: {
      canonical: articleUrl,
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
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900" style={{ fontFamily: "var(--font-merriweather), 'Merriweather', Georgia, serif" }}>
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
                : `${baseUrl}/og?title=${encodeURIComponent(article.metadata.title)}`,
              url: `${baseUrl}/articles/${article.slug}`,
              author: {
                '@type': 'Person',
                name: article.metadata.author || 'Suminos Career Expert',
                url: baseUrl,
              },
              publisher: {
                '@type': 'Organization',
                name: 'Suminos',
                url: baseUrl,
                logo: {
                  '@type': 'ImageObject',
                  url: `${baseUrl}/images/icon-120.png`,
                },
              },
              mainEntityOfPage: {
                '@type': 'WebPage',
                '@id': `${baseUrl}/articles/${article.slug}`,
              },
              articleSection: article.metadata.category || 'Career Advice',
              keywords: article.metadata.tags?.join(', ') || '',
              wordCount: article.content.split(/\s+/).length,
              timeRequired: article.metadata.readTime || 'PT5M',
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
            <div 
              className="prose prose-slate dark:prose-invert max-w-none prose-lg prose-headings:font-semibold prose-p:leading-relaxed prose-p:text-slate-900 dark:prose-p:text-slate-100 prose-p:text-base prose-p:mb-6 prose-headings:text-slate-900 dark:prose-headings:text-slate-100 prose-headings:mb-4 prose-headings:mt-8 prose-a:text-[#0060F3] prose-a:no-underline hover:prose-a:underline prose-strong:text-slate-900 dark:prose-strong:text-slate-100 prose-strong:font-semibold prose-ul:text-base prose-ol:text-base prose-li:text-slate-700 dark:prose-li:text-slate-300 prose-li:mb-2 prose-blockquote:border-l-[#0060F3] prose-blockquote:border-l-4 prose-blockquote:pl-6 prose-blockquote:pr-4 prose-blockquote:py-4 prose-blockquote:my-6 prose-blockquote:bg-slate-50 dark:prose-blockquote:bg-slate-800 prose-blockquote:not-italic prose-blockquote:text-slate-900 dark:prose-blockquote:text-slate-100 prose-blockquote:text-base prose-code:text-sm prose-code:bg-slate-100 dark:prose-code:bg-slate-800 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-pre:bg-slate-900 dark:prose-pre:bg-slate-950 prose-pre:text-white"
              style={{ fontFamily: "var(--font-merriweather), 'Merriweather', Georgia, serif" }}
            >
              <CustomMDX source={article.content} />
            </div>

            {/* CTA Section */}
            {article.metadata.category && (
              <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-700">
                <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-2">
                  {article.metadata.category === 'Resume & Profile' && 'Improve your resume with AI'}
                  {article.metadata.category === 'Job Discovery' && 'See how AI finds your perfect role'}
                  {article.metadata.category === 'Application Management' && 'Track your applications effortlessly'}
                  {article.metadata.category === 'Interview Prep' && 'Prepare for interviews with confidence'}
                  {!['Resume & Profile', 'Job Discovery', 'Application Management', 'Interview Prep'].includes(article.metadata.category) && 'Start your career journey'}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
                  {article.metadata.category === 'Resume & Profile' && 'Get AI-powered resume feedback tailored to your target roles'}
                  {article.metadata.category === 'Job Discovery' && 'Let AI discover opportunities that match your experience and goals'}
                  {article.metadata.category === 'Application Management' && 'Stay organized with our comprehensive application tracker'}
                  {article.metadata.category === 'Interview Prep' && 'Practice with AI-generated questions and get personalized tips'}
                  {!['Resume & Profile', 'Job Discovery', 'Application Management', 'Interview Prep'].includes(article.metadata.category) && 'Join Suminos and take control of your job search'}
                </p>
                <a
                  href="https://app.suminos.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-5 py-2 bg-[#0060F3] text-white text-sm rounded-lg font-medium hover:bg-[#1d4ed8] transition-colors"
                >
                  Try Suminos Free →
                </a>
              </div>
            )}
          </div>
        </article>
      </div>
    </div>
  )
}
