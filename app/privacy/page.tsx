"use client"

import React from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function PrivacyPolicyPage() {
    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
            <div className="container mx-auto max-w-4xl px-6 py-20">
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white mb-12 transition-colors group"
                >
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    Back to Home
                </Link>

                <article className="prose prose-slate dark:prose-invert max-w-none">
                    <h1 className="text-4xl md:text-5xl font-black mb-8 text-slate-900 dark:text-white tracking-tight">
                        Privacy Policy
                    </h1>

                    <div className="space-y-8 text-slate-700 dark:text-slate-300 leading-relaxed text-lg">
                        <p>
                            This privacy policy applies to the GeSIM app (hereby referred to as "Application") for mobile devices that was created by GeSIMxyz (hereby referred to as "Service Provider") as a Free service. This service is intended for use "AS IS".
                        </p>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">Information Collection and Use</h2>
                            <p>The Application collects information when you download and use it. This information may include information such as:</p>
                            <ul className="list-disc pl-6 space-y-2 mt-4">
                                <li>Your device's Internet Protocol address (e.g. IP address)</li>
                                <li>The pages of the Application that you visit, the time and date of your visit, the time spent on those pages</li>
                                <li>The time spent on the Application</li>
                                <li>The operating system you use on your mobile device</li>
                            </ul>
                            <p className="mt-4">The Application does not gather precise information about the location of your mobile device.</p>
                            <p className="mt-4">The Service Provider may use the information you provided to contact you from time to time to provide you with important information, required notices and marketing promotions.</p>
                            <p className="mt-4">For a better experience, while using the Application, the Service Provider may require you to provide us with certain personally identifiable information, including but not limited to email. The information that the Service Provider request will be retained by them and used as described in this privacy policy.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">Third Party Access</h2>
                            <p>Only aggregated, anonymized data is periodically transmitted to external services to aid the Service Provider in improving the Application and their service. The Service Provider may share your information with third parties in the ways that are described in this privacy statement.</p>
                            <p className="mt-4">The Service Provider may disclose User Provided and Automatically Collected Information:</p>
                            <ul className="list-disc pl-6 space-y-2 mt-4">
                                <li>as required by law, such as to comply with a subpoena, or similar legal process;</li>
                                <li>when they believe in good faith that disclosure is necessary to protect their rights, protect your safety or the safety of others, investigate fraud, or respond to a government request;</li>
                                <li>with their trusted services providers who work on their behalf, do not have an independent use of the information we disclose to them, and have agreed to adhere to the rules set forth in this privacy statement.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">Opt-out Rights</h2>
                            <p>You can stop all collection of information by the Application easily by uninstalling it. You may use the standard uninstall processes as may be available as part of your mobile device or via the mobile application marketplace or network.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">Data Retention Policy</h2>
                            <p>The Service Provider will retain User Provided data for as long as you use the Application and for a reasonable time thereafter. If you'd like them to delete User Provided Data that you have provided via the Application, please contact them at <a href="mailto:contact@gesim.xyz" className="text-blue-500 hover:text-blue-600 underline">contact@gesim.xyz</a> and they will respond in a reasonable time.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">Children</h2>
                            <p>The Service Provider does not use the Application to knowingly solicit data from or market to children under the age of 13. The Application does not address anyone under the age of 13. The Service Provider does not knowingly collect personally identifiable information from children under 13. In the case the Service Provider discovers that a child under 13 has provided personal information, they will immediately delete this from their servers. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact the Service Provider (contact@gesim.xyz) so that they will be able to take the necessary actions.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">Security</h2>
                            <p>The Service Provider is concerned about safeguarding the confidentiality of your information. The Service Provider provides physical, electronic, and procedural safeguards to protect information the Service Provider processes and maintains.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">Changes</h2>
                            <p>This Privacy Policy may be updated from time to time for any reason. The Service Provider will notify you of any changes to the Privacy Policy by updating this page with the new Privacy Policy. You are advised to consult this Privacy Policy regularly for any changes, as continued use is deemed approval of all changes.</p>
                            <p className="mt-4">This privacy policy is effective as of <strong>2025-12-06</strong></p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">Your Consent</h2>
                            <p>By using the Application, you are consenting to the processing of your information as set forth in this Privacy Policy now and as amended by us.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">Contact Us</h2>
                            <p>If you have any questions regarding privacy while using the Application, or have questions about the practices, please contact the Service Provider via email at <a href="mailto:contact@gesim.xyz" className="text-blue-500 hover:text-blue-600 underline">contact@gesim.xyz</a></p>
                        </section>
                    </div>
                </article>
            </div>
        </div>
    )
}
