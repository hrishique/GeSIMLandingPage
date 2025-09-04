"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Moon,
  Sun,
  Globe,
  Smartphone,
  Building2,
  Zap,
  Mail,
  Search,
  Calendar,
  Clock,
  ArrowRight,
  Tag,
  Filter,
  Grid3X3,
  List,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Header from "@/components/header"

// Mock blog data
const blogPosts = [
  {
    id: 1,
    title: "GeSIM Partners with Airalo to Revolutionize Global eSIM Access",
    excerpt:
      "We're excited to announce our strategic partnership with Airalo, the world's first eSIM store, bringing seamless global connectivity to millions of travelers worldwide.",
    thumbnail: "/placeholder.svg?height=300&width=500",
    category: "Partnerships",
    tags: ["Partnership", "Airalo", "Global"],
    publishedAt: "2025-01-10",
    readTime: "5 min read",
    slug: "gesim-partners-airalo-global-esim-access",
  },
  {
    id: 2,
    title: "Introducing Crypto Payments: Pay for Your eSIM with USDC",
    excerpt:
      "GeSIM now supports cryptocurrency payments! Learn how you can purchase eSIM plans using USDC, Bitcoin, and other major cryptocurrencies with instant settlement.",
    thumbnail: "/placeholder.svg?height=300&width=500",
    category: "Product Updates",
    tags: ["Product", "Crypto", "USDC", "Payments"],
    publishedAt: "2025-01-08",
    readTime: "7 min read",
    slug: "crypto-payments-usdc-esim-plans",
  },
  {
    id: 3,
    title: "The Ultimate Digital Nomad's Guide to eSIM Technology",
    excerpt:
      "Everything you need to know about eSIM technology for remote work and travel. From setup to troubleshooting, we've got you covered.",
    thumbnail: "/placeholder.svg?height=300&width=500",
    category: "Travel Tips",
    tags: ["Travel", "Digital Nomad", "Guide", "eSIM"],
    publishedAt: "2025-01-05",
    readTime: "12 min read",
    slug: "digital-nomad-guide-esim-technology",
  },
  {
    id: 4,
    title: "Telnyx Integration: Enterprise-Grade Infrastructure for GeSIM",
    excerpt:
      "Discover how our integration with Telnyx brings enterprise-grade telecom infrastructure to GeSIM users, ensuring reliable connectivity worldwide.",
    thumbnail: "/placeholder.svg?height=300&width=500",
    category: "Partnerships",
    tags: ["Partnership", "Telnyx", "Infrastructure", "Enterprise"],
    publishedAt: "2025-01-03",
    readTime: "6 min read",
    slug: "telnyx-integration-enterprise-infrastructure",
  },
  {
    id: 5,
    title: "DID-Linked Travel NFTs: Your Digital Identity on the Blockchain",
    excerpt:
      "Learn about our innovative DID-linked travel NFTs that secure your digital identity while traveling, powered by blockchain technology.",
    thumbnail: "/placeholder.svg?height=300&width=500",
    category: "Product Updates",
    tags: ["Product", "DID", "NFT", "Blockchain", "Security"],
    publishedAt: "2025-01-01",
    readTime: "9 min read",
    slug: "did-linked-travel-nfts-digital-identity",
  },
  {
    id: 6,
    title: "Top 10 Countries for Remote Work with GeSIM",
    excerpt:
      "Explore the best destinations for digital nomads and remote workers, complete with connectivity tips and GeSIM coverage information.",
    thumbnail: "/placeholder.svg?height=300&width=500",
    category: "Travel Tips",
    tags: ["Travel", "Remote Work", "Countries", "Coverage"],
    publishedAt: "2024-12-28",
    readTime: "8 min read",
    slug: "top-10-countries-remote-work-gesim",
  },
]

const categories = ["All", "Product Updates", "Partnerships", "Travel Tips"]

export default function BlogPage() {
  const [isDark, setIsDark] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [searchQuery, setSearchQuery] = useState("")

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark)
  }, [isDark])

  const toggleTheme = () => setIsDark(!isDark)

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

    const scrollToWaitlist = () => {
    const waitlistSection = document.getElementById('waitlist')
    if (waitlistSection) {
      waitlistSection.scrollIntoView({ behavior: 'smooth' })
    }
  }
  
  return (
    <div
      className={`min-h-screen transition-all duration-700 ${isDark ? "bg-slate-950" : "bg-gradient-to-br from-slate-50 via-white to-slate-100"}`}
    >
   
          <Header isDark={isDark} toggleTheme={toggleTheme} scrollToWaitlist={scrollToWaitlist} />
    
      {/* Blog Header */}
      <section className="relative px-6 pt-20 pb-16">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h1 className={`text-5xl md:text-6xl font-black mb-6 ${isDark ? "text-white" : "text-slate-900"}`}>
              GeSIM Insights
            </h1>
            <p
              className={`text-xl md:text-2xl ${isDark ? "text-slate-400" : "text-slate-600"} max-w-3xl mx-auto leading-relaxed`}
            >
              Stay updated with the latest in global connectivity, Web3 technology, and digital nomad lifestyle
            </p>
          </div>

          {/* Search and Filters */}
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between mb-12">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search
                className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 ${isDark ? "text-slate-400" : "text-slate-500"}`}
              />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`pl-12 h-12 rounded-xl ${isDark ? "bg-slate-800 border-slate-700 text-white placeholder:text-slate-400" : "bg-white border-slate-300 text-slate-900 placeholder:text-slate-500"} shadow-lg`}
              />
            </div>

            {/* View Toggle */}
            <div className="flex items-center gap-2">
              <Button
                variant={viewMode === "grid" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("grid")}
                className={`rounded-lg ${
                  viewMode === "grid"
                    ? isDark
                      ? "bg-slate-800 text-white"
                      : "bg-slate-900 text-white"
                    : isDark
                      ? "border-slate-700 text-slate-300 hover:bg-slate-800"
                      : "border-slate-300 text-slate-700 hover:bg-slate-100"
                }`}
              >
                <Grid3X3 className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("list")}
                className={`rounded-lg ${
                  viewMode === "list"
                    ? isDark
                      ? "bg-slate-800 text-white"
                      : "bg-slate-900 text-white"
                    : isDark
                      ? "border-slate-700 text-slate-300 hover:bg-slate-800"
                      : "border-slate-300 text-slate-700 hover:bg-slate-100"
                }`}
              >
                <List className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-3 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={`rounded-full px-6 py-2 font-medium transition-all ${
                  selectedCategory === category
                    ? isDark
                      ? "bg-slate-800 text-white"
                      : "bg-slate-900 text-white"
                    : isDark
                      ? "border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white"
                      : "border-slate-300 text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                }`}
              >
                <Filter className="w-4 h-4 mr-2" />
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="px-6 pb-32">
        <div className="container mx-auto max-w-6xl">
          {viewMode === "grid" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article
                  key={post.id}
                  className={`group rounded-3xl overflow-hidden ${isDark ? "bg-slate-800/30 border-slate-700/50" : "bg-white border-slate-200"} border shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105`}
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={post.thumbnail || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
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
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-3 text-sm">
                      <div className={`flex items-center gap-1 ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                        <Calendar className="w-4 h-4" />
                        {formatDate(post.publishedAt)}
                      </div>
                      <div className={`flex items-center gap-1 ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </div>
                    </div>

                    <h2
                      className={`text-xl font-bold mb-3 ${isDark ? "text-white" : "text-slate-900"} group-hover:${isDark ? "text-white" : "text-slate-900"} line-clamp-2`}
                    >
                      {post.title}
                    </h2>

                    <p className={`${isDark ? "text-slate-400" : "text-slate-600"} mb-4 line-clamp-3 leading-relaxed`}>
                      {post.excerpt}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className={`inline-flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-medium ${isDark ? "bg-slate-700 text-slate-300" : "bg-slate-100 text-slate-700"}`}
                        >
                          <Tag className="w-3 h-3" />
                          {tag}
                        </span>
                      ))}
                    </div>

                    <Link
                      href={`/blog/${post.slug}`}
                      className={`inline-flex items-center gap-2 font-semibold ${isDark ? "text-slate-300 hover:text-white" : "text-slate-700 hover:text-slate-900"} transition-colors group-hover:gap-3`}
                    >
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="space-y-8">
              {filteredPosts.map((post) => (
                <article
                  key={post.id}
                  className={`group flex flex-col md:flex-row gap-6 p-6 rounded-3xl ${isDark ? "bg-slate-800/30 border-slate-700/50" : "bg-white border-slate-200"} border shadow-lg hover:shadow-2xl transition-all duration-300`}
                >
                  <div className="relative w-full md:w-80 h-48 flex-shrink-0 overflow-hidden rounded-2xl">
                    <Image
                      src={post.thumbnail || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
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
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-3 text-sm">
                      <div className={`flex items-center gap-1 ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                        <Calendar className="w-4 h-4" />
                        {formatDate(post.publishedAt)}
                      </div>
                      <div className={`flex items-center gap-1 ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </div>
                    </div>

                    <h2
                      className={`text-2xl font-bold mb-4 ${isDark ? "text-white" : "text-slate-900"} group-hover:${isDark ? "text-white" : "text-slate-900"}`}
                    >
                      {post.title}
                    </h2>

                    <p className={`${isDark ? "text-slate-400" : "text-slate-600"} mb-4 leading-relaxed`}>
                      {post.excerpt}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`inline-flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-medium ${isDark ? "bg-slate-700 text-slate-300" : "bg-slate-100 text-slate-700"}`}
                        >
                          <Tag className="w-3 h-3" />
                          {tag}
                        </span>
                      ))}
                    </div>

                    <Link
                      href={`/blog/${post.slug}`}
                      className={`inline-flex items-center gap-2 font-semibold ${isDark ? "text-slate-300 hover:text-white" : "text-slate-700 hover:text-slate-900"} transition-colors group-hover:gap-3`}
                    >
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}

          {filteredPosts.length === 0 && (
            <div className="text-center py-16">
              <div className={`text-6xl mb-4 ${isDark ? "text-slate-700" : "text-slate-300"}`}>
                <Search className="w-16 h-16 mx-auto" />
              </div>
              <h3 className={`text-2xl font-bold mb-2 ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                No articles found
              </h3>
              <p className={`${isDark ? "text-slate-500" : "text-slate-500"}`}>
                Try adjusting your search or filter criteria
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer
        className={`py-16 px-6 ${isDark ? "bg-slate-900 border-t border-slate-800" : "bg-slate-50 border-t border-slate-200"}`}
      >
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="relative w-8 h-8 p-1.5 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl shadow-lg">
              <Image src="/gesim-logo.png" alt="GeSIM" fill className="object-contain" />
            </div>
            <span className={`text-2xl font-bold ${isDark ? "text-white" : "text-slate-900"}`}>GeSIM</span>
          </div>
          <p
            className={`${isDark ? "text-slate-500" : "text-slate-600"} text-sm flex items-center justify-center gap-2`}
          >
            <Globe className="w-4 h-4" />© 2025 GeSIM. Revolutionizing global connectivity with blockchain technology.
          </p>
        </div>
      </footer>
    </div>
  )
}
