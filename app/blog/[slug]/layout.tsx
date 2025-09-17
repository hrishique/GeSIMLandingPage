import type React from "react"
import type { Metadata } from "next"

interface BlogPost {
  id: number
  title: string
  excerpt:
    string
  thumbnail: string
  category: string
  tags: string[]
  publishedAt: string
  readTime: string
  slug: string
}

// This would typically fetch the post data to generate metadata
const generateMetadata = async ({ params }: { params: Promise<BlogPost> }): Promise<Metadata> => {
  // In a real app, you'd fetch the post data here
  let param = await params
  const postTitle = param?.title || ''
  const postExcerpt = param?.excerpt || ''

  return {
    title: `${postTitle} | GeSIM Insights`,
    description: postExcerpt,
    keywords: "GeSIM, Airalo, eSIM, partnership, global connectivity, Web3, blockchain, travel technology",
    openGraph: {
      title: postTitle,
      description: postExcerpt,
      type: "article",
      url: `https://gesim.xyz/blog/${param.slug}`,
      siteName: "GeSIM",
      images: [
        {
          url: param?.thumbnail || '',
          width: 800,
          height: 400,
          alt: postTitle,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: postTitle,
      description: postExcerpt,
      images: [param?.thumbnail || ''],
      site: '@gesimxyz',
      creator: '@gesimxyz',
    },
    alternates: { 
      canonical: `https://gesim.xyz/blog/${param.slug}`,
    },
  }
}

export { generateMetadata }

export default function BlogPostLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
