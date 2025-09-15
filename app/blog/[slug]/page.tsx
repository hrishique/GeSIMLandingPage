"use client"
import { Button } from "@/components/ui/button"
import {
  Globe,
  Calendar,
  Clock,
  ArrowLeft,
  Tag,
  Twitter,
  Linkedin,
  LinkIcon,
  ArrowRight,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

// Mock blog post data (in a real app, this would come from a CMS or API)
const getBlogPost = (slug: string) => {
  const posts = {
    "gesim-x-airalo-partnership": {
      id: 1,
      title: "GeSIM × Airalo — $100k sandbox to validate our infra",
      excerpt:
        "We’ve partnered with Airalo and received a $100K sandbox grant to stress-test GeSIM’s infrastructure.",
      content: `
        <p class="lead">We’ve partnered with Airalo and received a $100K sandbox grant to stress-test GeSIM’s infrastructure. Airalo has already onboarded us to their Partner Platform, giving GeSIM a safe, funded environment to run large-scale, real-device experiments.</p><br>
        
        <h3><B>What we’ll validate</B></h3><br>
        <ul>
    <li>
      <strong>Provisioning fidelity:</strong>
      ensure GeSIM ID (our wallet-backed SBT) mint → plan assignment → activation works reliably across devices and carriers.
    </li>
    <li>
      <strong>Billing &amp; metering:</strong>
      reconcile our pay-as-you-go smart-billing with carrier usage signals to eliminate surprises.
    </li>
    <li>
      <strong>Geo &amp; network edge cases:</strong>
      exercise regional installs, roaming handovers and activation-before-arrival flows.
    </li>
    <li>
      <strong>Telemetry &amp; fraud signals:</strong>
      capture provisioning logs, error traces and consumption patterns so we can harden retries and observability.
    </li>
  </ul>
</section> <br>

<section aria-labelledby="why-heading">
  <h3 id="why-heading">Why it matters</h3><br>
  <p>
    The sandbox support lets us run instrumented, staged rollouts so issues are found and fixed before broad release. That means faster iterations on the GeSIM ID flow, more predictable user experiences and infrastructure ready to scale without surprise support load.
  </p><br>
  <p>
    If you’re a power user or OEM and want to help validate edge cases, <strong>ping the GeSIM team</strong> — we’ll be shipping targeted test drops soon.
  </p>
</section>
      `,
      thumbnail: "/AiraloxGeSIMblog.png?height=400&width=800",
      category: "Partnerships",
      tags: ["Airalo", "Sandbox", "Infra",  "eSIM"],
      publishedAt: "2025-01-10",
      readTime: "5 min read",
      author: {
        name: "Charchit ",
        role: "Co-Founder and CEO",
        avatar: "/file1.jpg?height=100&width=100",
        bio: "Charchit leads product innovation and business at GeSIM. He handles integrations, grows the community, and building an engaged nomad community.",
      },
    },
    "gesim-x-esimaccess-partnership": {
      id: 2,
      title: "GeSIM × eSIMAccess — strengthening infra, distribution & revenue with wallet-first connectivity",
      excerpt:
      "We’re teaming up with eSIMAccess to lean on their distribution support and jointly explore global postpaid offerings",
      content: `
        <p>We’re teaming up with eSIMAccess to lean on their distribution support and jointly explore global postpaid offerings — and to use that real-world scale to harden GeSIM’s infrastructure. eSIMAccess gives us channels and operational partnerships; GeSIM brings the wallet-native identity and billing layer. Together we’re building a safer, more profitable connectivity stack.</p><br>
        
        <h3>What we’re validating on the infra side</h3>
        <ul>
          <li><strong>Provisioning reliability:</strong> ensure GeSIM ID mint → plan assignment → activation completes across device types and carrier flows with robust retries and idempotency.</li>
          <li><strong>Billing reconciliation:</strong> reconcile GeSIM’s wallet-first billing with carrier consumption and postpaid settlement flows so charges align and disputes shrink.</li>
          <li><strong>Observability & telemetry:</strong> instrument provisioning, activation, and consumption paths so we can detect regressions, identify fraud signals, and measure cohort retention.</li>
          <li><strong>Postpaid trust experiments:</strong> develop the trust primitives that let partners offer postpaid plans without relying on international card acceptance — reducing failed payments and chargebacks.</li>
        </ul><br>

        <h3>Why postpaid matters (and where cards fail)</h3><br>
        <p>International cards frequently face merchant declines, fraud flags, or hold periods — behaviour that hurts conversion and pushes users to prepaid alternatives with lower spend. By attaching a wallet-backed GeSIM ID to a user’s account and activity, we create a verifiable, persistent identity and payment relationship that:</p>
        <ul>
          <li>reduces payment friction for cross-border buyers,</li>
          <li>enables safer partner-level credit (postpaid trials / event passes), and</li>
          <li>provides stronger signals for fraud teams and merchant processors.</li>
        </ul><br>

        <h3>How this raises LTV & ARPU</h3><br>
        <ul>
          <li><strong>Higher conversion:</strong> fewer payment declines and a smoother activation flow mean more users complete purchases.</li>
          <li><strong>Better retention:</strong> GeSIM ID enables longer-lived entitlements (subscriptions, event passes), increasing repeat usage and LTV.</li>
          <li><strong>Upsell & yield:</strong> with clearer per-user telemetry we can target usage-based upsells (auto-topups, premium plans) that raise ARPU without harming trust.</li>
          <li><strong>Lower support/chargeback costs:</strong> clearer identity + reconciled billing means fewer disputes and lower operational overhead.</li>
        </ul><br>

        <h3>Practical next steps</h3><br>
        <p>We’ll run staged, instrumented rollouts through eSIMAccess channels to test postpaid flows, measure conversion and dispute rates, and iterate on safeguards (auto-stop, soft-limits, retry logic). Devs and partners will get SDK hooks and telemetry dashboards to validate flows and share findings.</p><br>
      `,
      thumbnail: "/eSIMACCESSxGeSIMblog.png?height=400&width=800",
      category: "Product Updates",
      tags: ["eSIMAccess", "Postpaid", "Crypto", "USDC"],
      publishedAt: "2025-01-08",
      readTime: "7 min read",
      author: {
        name: "Charchit ",
        role: "Co-Founder and CEO",
        avatar: "/file1.jpg?height=100&width=100",
        bio: "Charchit leads product innovation and business at GeSIM. He handles integrations, grows the community, and building an engaged nomad community.",
      },
    },
    "digital-nomad-guide-esim-technology": {
      id: 3,
      title: "The Ultimate Digital Nomad's Guide to eSIM Technology",
    excerpt:
      "If you travel for work, creativity, or the freedom to live anywhere, reliable mobile data isn’t a luxury - it’s the infrastructure of your life.",
      content: `
        <p><strong>If you travel for work, creativity, or the freedom to live anywhere, reliable mobile data isn’t a luxury - it’s the infrastructure of your life.</strong> eSIMs unlocked that promise: instant provisioning, multiple carriers on a single device, and less time in shops or juggling tiny physical SIMs. This guide gives digital nomads the practical knowledge to use eSIMs well - and explains how GeSIM makes that experience predictable, private and pay-as-you-go.</p><br>
        
        <h3><strong>What is an eSIM - short & useful</strong></h3>
        <p>An eSIM (embedded SIM) is a programmable SIM profile inside your phone. Instead of swapping tiny plastic chips, your device downloads operator profiles over the air. That means:</p><br>
        <ul>
          <li><strong>Instant activation</strong> without a store visit.</li>
          <li><strong>Multiple profiles</strong> stored on one device.</li>
          <li><strong>Easier regional plans</strong> and short-term data bundles.</li>
        </ul>
        <p>But real-world problems persist: flaky activations, roaming hiccups, payment friction and fragmented UX across carriers. That’s where a coordination layer like GeSIM helps.</p><br>
        
        <h3><strong>Why digital nomads should care</strong></h3>
        <p>For nomads, the value of eSIMs is simple:</p>
        <ul>
          <li><strong>Speed:</strong> Buy and go - useful for flights, co-working days, or last-minute conferences.</li>
          <li><strong>Choice:</strong> Pick regional plans tailored to where you are, instead of expensive roaming.</li>
          <li><strong>Portability:</strong> Keep one device and multiple profiles, no SIM tray juggling.</li>
        </ul>
        <p>But choice without coordination leads to churn, failed installs, and “bill shock.” To actually improve travel, you need predictable activations, clear billing, and the ability to recover when things break.</p><br>
        
        <h3><strong>Where GeSIM changes the game (private testing)</strong></h3>
        <p>GeSIM isn’t a UI wrapper - we’re the coordination layer that sits between wallets, carriers and your device. Practical benefits for nomads:</p><br>
        <ul>
          <li><strong>GeSIM ID (wallet-backed SBT):</strong> Bind your identity and entitlements once. Your GeSIM ID becomes the persistent anchor used to reconcile purchases, recover failed installs, and resume activations across devices.</li>
          <li><strong>AI Pick for Best Carrier:</strong> A light AI checks latency, cost, and signal in real time and recommends the best carrier for your needs - minimizing manual testing and guesswork.</li>
          <li><strong>Pay only for what you use:</strong> Choose days & data. Deposit a small safety buffer that updates instantly, with a safety buffer and on-chain refund mechanics for transparency.</li>
          <li><strong>One-tap switching & bind-once UX:</strong> Switch carriers or reassign profiles with a single tap and no lost purchases.</li>
          <li><strong>Instrumented, auditable flows:</strong> Telemetry and crisp logs mean issues get fixed faster and disputes are simpler to resolve.</li>
        </ul><br>
        
        <h3><strong>Practical checklist for nomads (before and during travel)</strong></h3><br>
        <ul>
          <li><strong>Check device compatibility</strong> — newer iOS and Android devices support eSIM profiles, but always verify your model.</li>
          <li><strong>Buy a short plan first</strong> — test coverage near your arrival point before committing to a long plan.</li>
          <li><strong>Mint your GeSIM ID early</strong> — bind once; you’ll avoid repeated onboarding and make recovery simpler if installs fail.</li>
          <li><strong>Run the AI Pick</strong> — let GeSIM test latency, signal, and cost to recommend the carrier that will feel fastest in practice.</li>
          <li><strong>Enable auto-stop and soft-limits</strong> — avoid surprise bills by using the deposit buffer and auto-stop thresholds.</li>
        </ul><br>
        
        <h3><strong>Real-world tips we actually use</strong></h3><br>
        <ul>
          <li>For events or short trips, pick day-based bundles with automatic expiry - less mental overhead.</li>
          <li>Use the AI Pick the first time you land; network conditions shift and the “best” carrier can change throughout a trip.</li>
          <li>If activation fails, don’t panic: GeSIM ID lets support reassign or resume the profile without losing your purchase.</li>
        </ul><br>
        
        <h3><strong>Final word - built for the moments that matter</strong></h3><br>
        <p>Want to test it with us? <strong>Private testing is live - invite-only.</strong> Join the waitlist at <a href="https://GeSIM.xyz" target="_blank" rel="noopener noreferrer">GeSIM.xyz</a> to try the AI Pick, custom plans and one-tap activations. Tell us what breaks - we’ll iterate fast, and you’ll help build the connectivity nomads actually need.</p>
      `,
      thumbnail: "/DigitalNomadblog.png?height=400&width=800",
      category: "Travel Tips",
      tags: ["Digital Nomad", "Travel", "eSIM", "Guide", "Remote Work"],
      publishedAt: "2025-01-10",
      readTime: "5 min read",
      author: {
        name: "Charchit ",
        role: "Co-Founder and CEO",
        avatar: "/file1.jpg?height=100&width=100",
        bio: "Charchit leads product innovation and business at GeSIM. He handles integrations, grows the community, and building an engaged nomad community.",
      },
    },
    "gesim-x-telnyx-partnership": {
      id: 4,
      title: "GeSIM × Telnyx — mapping SM-DP+ points to GeSIM ID to harden infra, UX & compliance",
    excerpt:
      "We’re integrating Telnyx’s SM-DP+ server to map critical eSIM provisioning points directly to the GeSIM ID",
      content: `
        <p>We’re integrating <strong>Telnyx’s SM-DP+ server</strong> to map critical eSIM provisioning points directly to the GeSIM ID. This is an infra-first effort: connect the secure device-profile lifecycle (SM-DP+) with our wallet-native identity primitive so activations are faster, auditable, and compliant - without adding user friction.</p><br>
        
        <h3>Infra priorities</h3><br>
        <ul>
          <li><strong>Deterministic mapping:</strong> Bind eSIM download/activation events to a single GeSIM ID so every profile has an immutable anchor for reconciliation, revocation, and lifetime entitlements.</li>
          <li><strong>Secure attestations:</strong> Surface SM-DP+ provisioning proofs to our backend and cryptographically link them to the GeSIM ID for tamper-evident logs.</li>
          <li><strong>Idempotent provisioning:</strong> Implement idempotency keys around SM-DP+ operations to avoid duplicate profiles on retry-heavy networks.</li>
          <li><strong>Privacy-first data flows:</strong> Minimize PII passed through Telnyx; use ephemeral tokens and on-chain references where possible so compliance teams get auditability without storing unnecessary user data.</li>
        </ul><br>

        <h3>UX and operational wins</h3><br>
        <ul>
          <li><strong>One-tap activations:</strong> Map device provisioning state to a user’s GeSIM ID so activations resume across devices and sessions, eliminating repeated setup steps.</li>
          <li><strong>Smarter recovery:</strong> When over-the-air installs fail, the GeSIM ID lets us resume or reassign profiles safely instead of orphaning user purchases.</li>
          <li><strong>Faster dispute resolution:</strong> Reconciled, ID-anchored logs reduce chargebacks and speed partner investigations.</li>
        </ul><br>

        <h3>Compliance & observability</h3><br>
        <ul>
          <li><strong>Audit trails:</strong> Every SM-DP+ action tied to GeSIM ID creates a clear, exportable trail for regulators and partners.</li>
          <li><strong>Consent receipts:</strong> Attach consent metadata to GeSIM ID records for lawful processing and easier KYC/AML handoffs when required.</li>
          <li><strong>Telemetry hooks:</strong> Granular SM-DP+ metrics (latency, error codes, retries) instrumented per GeSIM ID so we can rollback, alert, and iterate quickly.</li>
        </ul><br>

        <p>This integration turns Telnyx’s SM-DP+ into a provable, identity-anchored provisioning layer — improving activation UX, strengthening compliance posture, and making GeSIM infrastructure production-ready at scale.</p>
      `,
      thumbnail: "/TelnyxxGeSIMblog.png?height=400&width=800",
      category: "Partnerships",
      tags: ["Telnyx", "Enterprise", "Provisioning", "Compliance", "eSIM", "Identity"],
      publishedAt: "2025-01-12",
      readTime: "6 min read",
      author: {
        name: "Charchit ",
        role: "Co-Founder and CEO",
        avatar: "/file1.jpg?height=100&width=100",
        bio: "Charchit leads product innovation and business at GeSIM. He handles integrations, grows the community, and building an engaged nomad community.",
      },
    },
    "gesim-private-testing": {
      id: 5,
      title: "Private Testing — Join GeSIM’s Invite-Only Waitlist ",
      excerpt:
        "We’re opening private testing - invite-only - and we want you to poke the plumbing.",
      content: `
        <p><strong>GeSIM chooses the best network for you.</strong> A light AI checks latency, cost and signal - then picks the best carrier. We’re not here to wrap an AI agent around the UI. We’re building the coordination layer for global telecom - the real plumbing that makes eSIM adoption happen where crypto and AI meet.</p><br>
        <p><strong>Choose days & data - pay only for what you use.</strong> The deposit updates instantly, with a safety buffer and on-chain refund. Bind once with your GeSIM ID and enjoy one-tap switching: instant, simple, auditable.</p><br>
        
        <h3>A quick how it works for testers</h3><br>
        <ul>
          <li>Sign up to the private waitlist (invite only).</li>
          <li>Get an invite, mint your GeSIM ID, and deposit a small safety buffer.</li>
          <li>Try the AI pick: run latency checks, switch carriers, buy custom plans, and stress activation flows.</li>
          <li>Tell us what breaks — telemetry and your feedback will shape the next iterations.</li>
        </ul><br>
        
        <h3>Founder note</h3><br>
        <blockquote>
          “I’m Charchit. We bootstrapped GeSIM because travel kept breaking the moments that matter. With my CTO Hrishque and our team we built this coordination layer to fix that. Private testing is live. Join us, install our eSIM, try the custom plans and tell us what breaks. We were bootstrapped—now we’re building with you.” — Charchit
        </blockquote><br>
        
        <h3>Why join now</h3>
        <p>You’ll get early access to one-tap activations, the best-carrier AI pick, and direct influence on UX, refunds, and safety logic. We’ll run tight, instrumented test drops and you’ll see the product evolve fast.</p><br>
        <p><strong>👉 Join the private waitlist: <a href="https://GeSIM.xyz" target="_blank" rel="noopener noreferrer">GeSIM.xyz</a> - invite only.</strong></p>
      `,
      thumbnail: "/privatetesting.png?height=400&width=800",
      category: "Product Updates",
      tags: ["DID", "Travel", "Identity",  "Web3"],
      publishedAt: "2025-01-08",
      readTime: "7 min read",
      author: {
        name: "Charchit ",
        role: "Co-Founder and CEO",
        avatar: "/file1.jpg?height=100&width=100",
        bio: "Charchit leads product innovation and business at GeSIM. He handles integrations, grows the community, and building an engaged nomad community.",
      },
    },
  }

  return posts[slug as keyof typeof posts] || null
}

// Mock suggested articles
const getSuggestedArticles = (currentId: number) => {
  const allArticles = [
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

  return allArticles.filter((article) => article.id !== currentId).slice(0, 3)
}

export default  function BlogPostPage({ params }: { params: { slug: string } }) {
  let param =  params
  // const [currentSlide, setCurrentSlide] = useState(0)
  const post = getBlogPost(param.slug)
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

  const shareUrl = `https://gesim.com/blog/${param.slug}`
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

  // const nextSlide = () => {
  //   setCurrentSlide((prev) => (prev + 1) % suggestedArticles.length)
  // }

  // const prevSlide = () => {
  //   setCurrentSlide((prev) => (prev - 1 + suggestedArticles.length) % suggestedArticles.length)
  // }

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
            <Image src={post.thumbnail || "/placeholder.svg"} alt={post.title} fill className="object-contain" />
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
            {/* <div className="flex items-center gap-2">
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
            </div> */}
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
                  {/* <div className="absolute top-4 left-4">
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
                  </div> */}
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
