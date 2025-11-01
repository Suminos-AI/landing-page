import fs from 'fs'
import path from 'path'

type Metadata = {
  title: string
  publishedAt: string
  summary: string
  image?: string
  category?: string
  author?: string
  readTime?: string
  tags?: string[]
}

function parseFrontmatter(fileContent: string) {
  let frontmatterRegex = /---\s*([\s\S]*?)\s*---/
  let match = frontmatterRegex.exec(fileContent)
  let frontMatterBlock = match![1]
  let content = fileContent.replace(frontmatterRegex, '').trim()
  let frontMatterLines = frontMatterBlock.trim().split('\n')
  let metadata: Partial<Metadata> = {}

  frontMatterLines.forEach((line) => {
    let [key, ...valueArr] = line.split(': ')
    let value = valueArr.join(': ').trim()
    value = value.replace(/^['"](.*)['"]$/, '$1') // Remove quotes
    
    // Handle array values (like tags)
    if (key.trim() === 'tags' && value.startsWith('[') && value.endsWith(']')) {
      (metadata as any)[key.trim()] = value.slice(1, -1).split(',').map(tag => tag.trim().replace(/['"]/g, ''))
    } else {
      (metadata as any)[key.trim()] = value
    }
  })

  return { metadata: metadata as Metadata, content }
}

function getMDXFiles(dir) {
  if (!fs.existsSync(dir)) {
    return []
  }
  return fs.readdirSync(dir).filter((file) => path.extname(file) === '.mdx')
}

function readMDXFile(filePath) {
  let rawContent = fs.readFileSync(filePath, 'utf-8')
  return parseFrontmatter(rawContent)
}

function getMDXData(dir) {
  if (!fs.existsSync(dir)) {
    return []
  }
  let mdxFiles = getMDXFiles(dir)
  return mdxFiles.map((file) => {
    let { metadata, content } = readMDXFile(path.join(dir, file))
    let slug = path.basename(file, path.extname(file))

    return {
      metadata,
      slug,
      content,
    }
  })
}

export function getArticles() {
  return getMDXData(path.join(process.cwd(), 'app', 'articles', 'posts'))
}

// Re-export formatDate for backward compatibility with server components
export { formatDate } from 'app/lib/date-utils'
