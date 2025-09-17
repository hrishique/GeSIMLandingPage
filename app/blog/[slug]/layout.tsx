import type React from "react"
import type { Metadata } from "next"

// This would typically fetch the post data to generate metadata
const generateMetadata = async ({ params }: { params: { slug: string } }): Promise<Metadata> => {
  // In a real app, you'd fetch the post data here
  const postTitle = "GeSIM Partners with Airalo to Revolutionize Global eSIM Access"
  const postExcerpt =
    "We're excited to announce our strategic partnership with Airalo, the world's first eSIM store, bringing seamless global connectivity to millions of travelers worldwide."

  return {
    title: `${postTitle} | GeSIM Insights`,
    description: postExcerpt,
    keywords: "GeSIM, Airalo, eSIM, partnership, global connectivity, Web3, blockchain, travel technology",
    openGraph: {
      title: postTitle,
      description: postExcerpt,
      type: "article",
      url: `https://gesim.xyz/blog/${params.slug}`,
      siteName: "GeSIM",
      images: [
        {
          url: "/placeholder.svg?height=400&width=800",
          width: 800,
          height: 400,
          alt: postTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: postTitle,
      description: postExcerpt,
      images: ["/placeholder.svg?height=400&width=800"],
    },
    alternates: {
      canonical: `https://gesim.xyz/blog/${params.slug}`,
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
