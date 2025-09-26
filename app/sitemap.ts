import { getNewsPosts } from 'app/news/utils'
import { getArticles } from 'app/articles/utils'

export const baseUrl = 'https://portfolio-blog-starter.vercel.app'

export const dynamic = 'force-static'

export default async function sitemap() {
  let news = getNewsPosts().map((post) => ({
    url: `${baseUrl}/news/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }))

  let articles = getArticles().map((post) => ({
    url: `${baseUrl}/articles/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }))

  let routes = ['', '/news', '/articles'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [...routes, ...news, ...articles]
}
