"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import {
  Moon,
  Sun,
  Globe,
  Smartphone,
  Building2,
  Zap,
  Mail,
  Calendar,
  Clock,
  ArrowLeft,
  Tag,
  Twitter,
  Linkedin,
  LinkIcon,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

// Mock blog post data (in a real app, this would come from a CMS or API)
const getBlogPost = (slug: string) => {
  const posts = {
    "gesim-partners-airalo-global-esim-access": {
      id: 1,
      title: "GeSIM Partners with Airalo to Revolutionize Global eSIM Access",
      excerpt:
        "We're excited to announce our strategic partnership with Airalo, the world's first eSIM store, bringing seamless global connectivity to millions of travelers worldwide.",
      content: `
        <p class="lead">We're thrilled to announce a groundbreaking partnership between GeSIM and Airalo, the world's first eSIM store. This strategic alliance marks a significant milestone in our mission to revolutionize global connectivity through blockchain technology and crypto-powered eSIM solutions.</p>
        
        <h2>What This Partnership Means</h2>
        <p>By joining forces with Airalo, GeSIM users will gain access to an unprecedented network of eSIM providers across 190+ countries and regions. This partnership combines Airalo's extensive global coverage with GeSIM's innovative crypto payment infrastructure and DID-linked security features.</p>
        
        <blockquote>
          <p>"This partnership represents the future of global connectivity—where traditional telecom meets Web3 innovation to create seamless, secure, and accessible mobile internet for everyone."</p>
          <cite>— Sarah Chen, Head of Partnerships at GeSIM</cite>
        </blockquote>
        
        <h2>Key Benefits for Users</h2>
        <ul>
          <li><strong>Expanded Coverage:</strong> Access to eSIM plans in 190+ countries through Airalo's network</li>
          <li><strong>Crypto Payments:</strong> Pay for Airalo eSIM plans using USDC, Bitcoin, and other cryptocurrencies</li>
          <li><strong>Seamless Integration:</strong> One-click activation through the GeSIM mobile app</li>
          <li><strong>Enhanced Security:</strong> DID-linked travel credentials for secure identity verification</li>
          <li><strong>Real-time Tracking:</strong> Monitor your data usage and spending across all connected devices</li>
        </ul>
        
        <h3>Technical Integration</h3>
        <p>The integration leverages GeSIM's blockchain infrastructure to provide:</p>
        <ol>
          <li>Instant cryptocurrency settlements</li>
          <li>Decentralized identity verification</li>
          <li>Smart contract-based billing</li>
          <li>Cross-border compliance automation</li>
        </ol>
        
        <h2>The Future of Travel Connectivity</h2>
        <p>This partnership represents more than just expanded coverage—it's a step toward a future where global connectivity is truly borderless, secure, and accessible to everyone. By combining traditional telecom infrastructure with Web3 innovation, we're creating a new paradigm for how travelers stay connected worldwide.</p>
        
        <p>Digital nomads, business travelers, and tourists will benefit from a unified platform that eliminates the complexity of managing multiple eSIM providers while ensuring the highest levels of security and transparency.</p>
        
        <h3>What's Next?</h3>
        <p>The integration will roll out in phases starting Q2 2025, beginning with major travel destinations in Europe and Asia. Users can expect:</p>
        <ul>
          <li>Beta access for existing GeSIM users</li>
          <li>Expanded country coverage monthly</li>
          <li>New crypto payment options</li>
          <li>Enhanced mobile app features</li>
        </ul>
        
        <p>Stay tuned for more updates as we continue to build the future of global connectivity together. <a href="/blog">Read more insights</a> on our blog or <a href="/#waitlist">join our waitlist</a> to be among the first to experience this revolutionary partnership.</p>
      `,
      thumbnail: "/placeholder.svg?height=400&width=800",
      category: "Partnerships",
      tags: ["Partnership", "Airalo", "Global", "eSIM", "Web3"],
      publishedAt: "2025-01-10",
      readTime: "5 min read",
      author: {
        name: "Sarah Chen",
        role: "Head of Partnerships",
        avatar: "/placeholder.svg?height=100&width=100",
        bio: "Sarah leads strategic partnerships at GeSIM, focusing on expanding global connectivity through innovative telecom and Web3 collaborations.",
      },
    },
    "crypto-payments-usdc-esim-plans": {
      id: 2,
      title: "Introducing Crypto Payments: Pay for Your eSIM with USDC",
      excerpt:
        "GeSIM now supports cryptocurrency payments! Learn how you can purchase eSIM plans using USDC, Bitcoin, and other major cryptocurrencies with instant settlement.",
      content: `
        <p class="lead">Today marks a revolutionary milestone in global connectivity as GeSIM becomes the first eSIM platform to fully integrate cryptocurrency payments. Users can now purchase eSIM plans using USDC, Bitcoin, Ethereum, and other major cryptocurrencies with instant settlement and zero traditional banking fees.</p>
        
        <h2>Why Crypto Payments Matter</h2>
        <p>Traditional payment methods for international services often involve high fees, slow processing times, and complex currency conversions. Cryptocurrency payments eliminate these friction points while providing enhanced security and transparency.</p>
        
        <h2>Supported Cryptocurrencies</h2>
        <ul>
          <li><strong>USDC:</strong> Instant settlement with stable value</li>
          <li><strong>Bitcoin (BTC):</strong> The world's most trusted cryptocurrency</li>
          <li><strong>Ethereum (ETH):</strong> Smart contract-powered transactions</li>
          <li><strong>USDT:</strong> Tether stablecoin for price stability</li>
        </ul>
        
        <p>This integration represents the future of borderless payments for global connectivity services.</p>
      `,
      thumbnail: "/placeholder.svg?height=400&width=800",
      category: "Product Updates",
      tags: ["Product", "Crypto", "USDC", "Payments", "Bitcoin"],
      publishedAt: "2025-01-08",
      readTime: "7 min read",
      author: {
        name: "Alex Rodriguez",
        role: "Product Manager",
        avatar: "/placeholder.svg?height=100&width=100",
        bio: "Alex drives product innovation at GeSIM, specializing in Web3 integrations and cryptocurrency payment systems.",
      },
    },
  }

  return posts[slug as keyof typeof posts] || null
}

// Mock suggested articles
const getSuggestedArticles = (currentId: number) => {
  const allArticles = [
    {
      id: 3,
      title: "The Ultimate Digital Nomad's Guide to eSIM Technology",
      excerpt: "Everything you need to know about eSIM technology for remote work and travel.",
      thumbnail: "/placeholder.svg?height=300&width=500",
      category: "Travel Tips",
      slug: "digital-nomad-guide-esim-technology",
      readTime: "12 min read",
    },
    {
      id: 4,
      title: "Telnyx Integration: Enterprise-Grade Infrastructure for GeSIM",
      excerpt: "Discover how our integration with Telnyx brings enterprise-grade telecom infrastructure.",
      thumbnail: "/placeholder.svg?height=300&width=500",
      category: "Partnerships",
      slug: "telnyx-integration-enterprise-infrastructure",
      readTime: "6 min read",
    },
    {
      id: 5,
      title: "DID-Linked Travel NFTs: Your Digital Identity on the Blockchain",
      excerpt: "Learn about our innovative DID-linked travel NFTs that secure your digital identity.",
      thumbnail: "/placeholder.svg?height=300&width=500",
      category: "Product Updates",
      slug: "did-linked-travel-nfts-digital-identity",
      readTime: "9 min read",
    },
    {
      id: 6,
      title: "Top 10 Countries for Remote Work with GeSIM",
      excerpt: "Explore the best destinations for digital nomads and remote workers.",
      thumbnail: "/placeholder.svg?height=300&width=500",
      category: "Travel Tips",
      slug: "top-10-countries-remote-work-gesim",
      readTime: "8 min read",
    },
  ]

  return allArticles.filter((article) => article.id !== currentId).slice(0, 3)
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const post = getBlogPost(params.slug)
  const suggestedArticles = post ? getSuggestedArticles(post.id) : []

  if (!post) {
    notFound()
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  const shareUrl = `https://gesim.com/blog/${params.slug}`
  const shareTitle = post.title

  const shareOnTwitter = () => {
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareTitle)}&url=${encodeURIComponent(shareUrl)}`
    window.open(url, "_blank")
  }

  const shareOnLinkedIn = () => {
    const url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`
    window.open(url, "_blank")
  }

  const shareOnFarcaster = () => {
    const url = `https://warpcast.com/~/compose?text=${encodeURIComponent(`${shareTitle} ${shareUrl}`)}`
    window.open(url, "_blank")
  }

  const copyLink = () => {
    navigator.clipboard.writeText(shareUrl)
    // You could add a toast notification here
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % suggestedArticles.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + suggestedArticles.length) % suggestedArticles.length)
  }

  return (
    <div
      className={`min-h-screen transition-all duration-700 bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:bg-none dark:bg-slate-950`}
    >
      {/* Header */}
     

      {/* Article */}
      <article className="px-6 pt-8 pb-16">
        <div className="container mx-auto max-w-4xl">
          {/* Back Button */}
          <Link
            href="/blog"
            className={`inline-flex items-center gap-2 mb-8 text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors group`}
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Blog
          </Link>

          {/* Article Header */}
          <header className="mb-12">
            {/* Category Badge */}
            <div className="mb-6">
              <span
                className={`px-4 py-2 rounded-full text-sm font-semibold ${
                  post.category === "Product Updates"
                    ? "bg-blue-500 text-white"
                    : post.category === "Partnerships"
                      ? "bg-green-500 text-white"
                      : "bg-purple-500 text-white"
                }`}
              >
                {post.category}
              </span>
            </div>

            {/* Title */}
            <h1
              className={`text-4xl md:text-5xl lg:text-6xl font-black mb-8 leading-tight text-slate-900 dark:text-white`}
            >
              {post.title}
            </h1>

            {/* Meta Information */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 mb-8">
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 overflow-hidden rounded-full">
                  <Image
                    src={post.author.avatar || "/placeholder.svg"}
                    alt={post.author.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className={`font-semibold text-slate-900 dark:text-white`}>{post.author.name}</div>
                  <div className={`text-sm text-slate-600 dark:text-slate-400`}>{post.author.role}</div>
                </div>
              </div>

              <div className="flex items-center gap-6 text-sm">
                <div className={`flex items-center gap-2 text-slate-600 dark:text-slate-400`}>
                  <Calendar className="w-4 h-4" />
                  {formatDate(post.publishedAt)}
                </div>
                <div className={`flex items-center gap-2 text-slate-600 dark:text-slate-400`}>
                  <Clock className="w-4 h-4" />
                  {post.readTime}
                </div>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className={`inline-flex items-center gap-1 px-3 py-1 rounded-lg text-sm font-medium bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300`}
                >
                  <Tag className="w-3 h-3" />
                  {tag}
                </span>
              ))}
            </div>

            {/* Share Buttons */}
            <div className="flex items-center gap-3 mb-8">
              <span className={`text-sm font-medium text-slate-600 dark:text-slate-400`}>Share:</span>
              <Button
                variant="outline"
                size="sm"
                onClick={shareOnTwitter}
                className={`rounded-lg border-slate-300 text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800`}
              >
                <Twitter className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={shareOnFarcaster}
                className={`rounded-lg border-slate-300 text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800`}
              >
                <Globe className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={shareOnLinkedIn}
                className={`rounded-lg border-slate-300 text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800`}
              >
                <Linkedin className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={copyLink}
                className={`rounded-lg border-slate-300 text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800`}
              >
                <LinkIcon className="w-4 h-4" />
              </Button>
            </div>
          </header>

          {/* Featured Image */}
          <div className="relative h-96 md:h-[500px] mb-12 overflow-hidden rounded-3xl">
            <Image src={post.thumbnail || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
          </div>

          {/* Article Content */}
          <div
            className={`prose prose-lg max-w-none prose-headings:text-slate-900 prose-p:text-slate-700 prose-strong:text-slate-900 prose-a:text-blue-600 prose-blockquote:border-slate-300 dark:prose-invert dark:prose-headings:text-white dark:prose-p:text-slate-300 dark:prose-strong:text-white dark:prose-a:text-blue-400 dark:prose-blockquote:border-slate-700 prose-headings:font-bold prose-h2:text-3xl prose-h3:text-2xl prose-p:leading-relaxed prose-li:leading-relaxed prose-blockquote:font-medium prose-blockquote:italic`}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Author Bio */}
          <div
            className={`mt-16 p-8 rounded-3xl bg-slate-50 border-slate-200 dark:bg-slate-800/30 dark:border-slate-700/50 border`}
          >
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="relative w-20 h-20 overflow-hidden rounded-full flex-shrink-0">
                <Image
                  src={post.author.avatar || "/placeholder.svg"}
                  alt={post.author.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1">
                <h3 className={`text-xl font-bold mb-2 text-slate-900 dark:text-white`}>
                  About {post.author.name}
                </h3>
                <p className={`text-sm text-slate-600 dark:text-slate-400 mb-2`}>{post.author.role}</p>
                <p className={`text-slate-700 dark:text-slate-300 leading-relaxed`}>{post.author.bio}</p>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Suggested Articles Carousel */}
      <section className={`py-16 px-6 bg-slate-50 dark:bg-slate-900/30`}>
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center justify-between mb-12">
            <h2 className={`text-3xl md:text-4xl font-bold text-slate-900 dark:text-white`}>
              Suggested Articles
            </h2>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={prevSlide}
                className={`rounded-lg border-slate-300 text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800`}
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={nextSlide}
                className={`rounded-lg border-slate-300 text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800`}
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {suggestedArticles.map((article, index) => (
              <article
                key={article.id}
                className={`group rounded-3xl overflow-hidden bg-white border-slate-200 dark:bg-slate-800/30 dark:border-slate-700/50 border shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105`}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={article.thumbnail || "/placeholder.svg"}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        article.category === "Product Updates"
                          ? "bg-blue-500 text-white"
                          : article.category === "Partnerships"
                            ? "bg-green-500 text-white"
                            : "bg-purple-500 text-white"
                      }`}
                    >
                      {article.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3 text-sm">
                    <div className={`flex items-center gap-1 text-slate-600 dark:text-slate-400`}>
                      <Clock className="w-4 h-4" />
                      {article.readTime}
                    </div>
                  </div>

                  <h3
                    className={`text-xl font-bold mb-3 text-slate-900 dark:text-white group-hover:text-slate-900 dark:group-hover:text-white line-clamp-2`}
                  >
                    {article.title}
                  </h3>

                  <p className={`text-slate-600 dark:text-slate-400 mb-4 line-clamp-3 leading-relaxed`}>
                    {article.excerpt}
                  </p>

                  <Link
                    href={`/blog/${article.slug}`}
                    className={`inline-flex items-center gap-2 font-semibold text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors group-hover:gap-3`}
                  >
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
