"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Globe,
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

// Mock blog data
const blogPosts = [
  {
    id: 1,
    title: "GeSIM × Airalo — $100k sandbox to validate our infra",
    excerpt:
      "We’ve partnered with Airalo and received a $100K sandbox grant to stress-test GeSIM’s infrastructure.",
    thumbnail: "/AiraloxGeSIMblog.png?height=300&width=500",
    category: "Partnerships",
    tags: ["Partnership", "Airalo", "Global"],
    publishedAt: "2025-09-05",
    readTime: "2 min read",
    slug: "gesim-x-airalo-partnership",
  },
  {
    id: 2,
    title: "GeSIM × eSIMAccess — strengthening infra, distribution & revenue with wallet-first connectivity",
    excerpt:
      "We’re teaming up with eSIMAccess to lean on their distribution support and jointly explore global postpaid offerings",
    thumbnail: "/eSIMACCESSxGeSIMblog.png?height=300&width=500",
    category: "Partnerships",
    tags: ["Product", "Crypto", "USDC", "Payments"],
    publishedAt: "2025-09-07",
    readTime: "3 min read",
    slug: "gesim-x-esimaccess-partnership",
  },
  {
    id: 3,
    title: "The Ultimate Digital Nomad's Guide to eSIM Technology",
    excerpt:
      "If you travel for work, creativity, or the freedom to live anywhere, reliable mobile data isn’t a luxury - it’s the infrastructure of your life.",
    thumbnail: "/DigitalNomadblog.png?height=300&width=500",
    category: "Travel Tips",
    tags: ["Travel", "Digital Nomad", "Guide", "eSIM"],
    publishedAt: "2025-09-10",
    readTime: "12 min read",
    slug: "digital-nomad-guide-esim-technology",
  },
  {
    id: 4,
    title: "GeSIM × Telnyx — mapping SM-DP+ points to GeSIM ID to harden infra, UX & compliance",
    excerpt:
      "We’re integrating Telnyx’s SM-DP+ server to map critical eSIM provisioning points directly to the GeSIM ID",
    thumbnail: "/TelnyxxGeSIMblog.png?height=300&width=500",
    category: "Partnerships",
    tags: ["Partnership", "Telnyx", "Infrastructure", "Enterprise"],
    publishedAt: "2025-09-13",
    readTime: "4 min read",
    slug: "gesim-x-telnyx-partnership",
  },
  {
    id: 5,
    title: "Private Testing — Join GeSIM’s Invite-Only Waitlist ",
    excerpt:
      "We’re opening private testing - invite-only - and we want you to poke the plumbing.",
    thumbnail: "/privatetesting.png?height=300&width=500",
    category: "Product Updates",
    tags: ["Product", "DID", "NFT", "Blockchain", "Security"],
    publishedAt: "2025-09-15",
    readTime: "9 min read",
    slug: "gesim-private-testing",
  },
  // {
  //   id: 6,
  //   title: "Top 10 Countries for Remote Work with GeSIM",
  //   excerpt:
  //     "Explore the best destinations for digital nomads and remote workers, complete with connectivity tips and GeSIM coverage information.",
  //   thumbnail: "/placeholder.svg?height=300&width=500",
  //   category: "Travel Tips",
  //   tags: ["Travel", "Remote Work", "Countries", "Coverage"],
  //   publishedAt: "2024-12-28",
  //   readTime: "8 min read",
  //   slug: "top-10-countries-remote-work-gesim",
  // },
]

const categories = ["All", "Product Updates", "Partnerships", "Travel Tips"]

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [searchQuery, setSearchQuery] = useState("")

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

  
  return (
    <div
      className={`min-h-screen transition-all duration-700 bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:bg-none dark:bg-slate-900`}
    >    
      {/* Blog Header */}
      <section className="relative px-6 pt-20 pb-16">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h1 className={`text-5xl md:text-6xl font-black mb-6 text-slate-900 dark:text-white`}>
              GeSIM Insights
            </h1>
            <p
              className={`text-xl md:text-2xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed`}
            >
              Stay updated with the latest in global connectivity, Web3 and digital nomad lifestyle
            </p>
          </div>

          {/* Search and Filters */}
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between mb-12">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search
                className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-500 dark:text-slate-400`}
              />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`pl-12 h-12 rounded-xl bg-white border-slate-300 text-slate-900 placeholder:text-slate-500 dark:bg-slate-800 dark:border-slate-700 dark:text-white dark:placeholder:text-slate-400 shadow-lg`}
              />
            </div>

            {/* View Toggle */}
            <div className="hidden md:inline-flex items-center gap-2">
              <Button
                variant={viewMode === "grid" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("grid")}
                className={`rounded-lg ${
                  viewMode === "grid"
                    ? "bg-slate-900 text-white dark:bg-slate-800"
                    : "border-slate-300 text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
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
                    ? "bg-slate-900 text-white dark:bg-slate-800"
                    : "border-slate-300 text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
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
                    ? "bg-slate-900 text-white dark:bg-slate-800"
                    : "border-slate-300 text-slate-700 hover:bg-slate-100 hover:text-slate-900 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
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
                  className={`group rounded-3xl overflow-hidden bg-white border-slate-200 dark:bg-slate-800/30 dark:border-slate-700/50 border shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105`}
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={post.thumbnail || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    {/* <div className="absolute top-4 left-4">
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
                    </div> */}
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-3 text-sm">
                      <div className={`flex items-center gap-1 text-slate-600 dark:text-slate-400`}>
                        <Calendar className="w-4 h-4" />
                        {formatDate(post.publishedAt)}
                      </div>
                      <div className={`flex items-center gap-1 text-slate-600 dark:text-slate-400`}>
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </div>
                    </div>

                    <h2
                      className={`text-xl font-bold mb-3 text-slate-900 dark:text-white group-hover:text-slate-900 dark:group-hover:text-white line-clamp-2`}
                    >
                      {post.title}
                    </h2>

                    <p className={`text-slate-600 dark:text-slate-400 mb-4 line-clamp-3 leading-relaxed`}>
                      {post.excerpt}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`inline-flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-medium bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-300`}
                        >
                          <Tag className="w-3 h-3" />
                          {tag}
                        </span>
                      ))}
                    </div>

                    <Link
                      href={`/blog/${post.slug}`}
                      className={`inline-flex items-center gap-2 font-semibold text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors group-hover:gap-3`}
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
                  className={`group flex flex-col md:flex-row gap-6 p-6 rounded-3xl bg-white border-slate-200 dark:bg-slate-800/30 dark:border-slate-700/50 border shadow-lg hover:shadow-2xl transition-all duration-300`}
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
                      <div className={`flex items-center gap-1 text-slate-600 dark:text-slate-400`}>
                        <Calendar className="w-4 h-4" />
                        {formatDate(post.publishedAt)}
                      </div>
                      <div className={`flex items-center gap-1 text-slate-600 dark:text-slate-400`}>
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </div>
                    </div>

                    <h2
                      className={`text-2xl font-bold mb-4 text-slate-900 dark:text-white group-hover:text-slate-900 dark:group-hover:text-white`}
                    >
                      {post.title}
                    </h2>

                    <p className={`text-slate-600 dark:text-slate-400 mb-4 leading-relaxed`}>
                      {post.excerpt}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`inline-flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-medium bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-300`}
                        >
                          <Tag className="w-3 h-3" />
                          {tag}
                        </span>
                      ))}
                    </div>

                    <Link
                      href={`/blog/${post.slug}`}
                      className={`inline-flex items-center gap-2 font-semibold text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors group-hover:gap-3`}
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
              <div className={`text-6xl mb-4 text-slate-300 dark:text-slate-700`}>
                <Search className="w-16 h-16 mx-auto" />
              </div>
              <h3 className={`text-2xl font-bold mb-2 text-slate-600 dark:text-slate-400`}>
                No articles found
              </h3>
              <p className={`text-slate-500`}>
                Try adjusting your search or filter criteria
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
