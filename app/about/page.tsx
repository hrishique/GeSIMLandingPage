"use client"

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300">


            <div className="container mx-auto px-6 py-24 md:py-32 max-w-4xl">
                <div
                    className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700"
                >
                    {/* Header Section */}
                    <div className="space-y-6 text-center md:text-left">
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
                            About GeSIM
                        </h1>
                        <p className="text-xl md:text-2xl font-light leading-relaxed text-slate-600 dark:text-slate-300">
                            GeSIM is a global, privacy-first eSIM for people who value digital freedom.
                        </p>
                    </div>

                    <div className="prose prose-slate dark:prose-invert max-w-none space-y-8">
                        <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-400">
                            Built for travelers, journalists, remote workers, and DeFi-native users, GeSIM keeps your network identity private while delivering fast, reliable global connectivity—directly from a single mobile app.
                        </p>

                        <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
                            <p className="text-lg leading-relaxed mb-0">
                                Unlike traditional eSIM providers, GeSIM is designed with <span className="font-semibold text-blue-600 dark:text-blue-400">privacy at the core</span>. Your connectivity works across borders without exposing unnecessary metadata, enabling a safer and more sovereign mobile internet experience.
                            </p>
                        </div>

                        <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-400">
                            In parallel, GeSIM is building the coordination layer for global telecom—re-architecting how mobile connectivity is provisioned, measured, and settled at internet scale.
                        </p>

                        <div className="py-8">
                            <h3 className="text-2xl font-semibold mb-8 text-slate-900 dark:text-white">We automate the telecom stack through:</h3>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {features.map((feature, index) => (
                                    <div key={index} className="flex flex-col space-y-3 p-6 rounded-xl bg-white/50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 hover:border-blue-500/30 dark:hover:border-blue-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/5 group">
                                        <h4 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-slate-800 dark:from-blue-400 dark:to-slate-200 transition-colors">
                                            {feature.title}
                                        </h4>
                                        <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed font-medium">{feature.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-400">
                            By removing the trust tax from roaming, reducing settlement delays, and enabling programmable telecom infrastructure, GeSIM unlocks faster, more transparent, and privacy-native mobile connectivity for the modern internet.
                        </p>
                    </div>
                </div>
            </div>


        </div>
    )
}

const features = [
    {
        title: "eSIM Provisioning",
        description: "Verifiable eSIM delivery via ZK-TLS–powered SM-DP+ infrastructure"
    },
    {
        title: "Usage Metering",
        description: "Privacy-preserving accounting using cryptographic commitments and Merkle proofs"
    },
    {
        title: "Settlement",
        description: "Programmable, near-real-time stablecoin settlement between participants"
    },
    {
        title: "Identity & Entitlement",
        description: "User-custodial GeSIM ID with zero-knowledge proofs for private verification"
    }
]
