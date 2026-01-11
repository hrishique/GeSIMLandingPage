"use client"

import { FileKey } from "lucide-react"
import { LegalLayout } from "@/components/legal-layout"

export default function LicensePage() {
    return (
        <LegalLayout
            title="GeSIM App License Agreement"
            lastUpdated="January 2026"
            icon={FileKey}
        >
            <section className="space-y-6">
                <p>
                    This License Agreement ("Agreement") governs your use of the GeSIM mobile application ("App") developed and owned by GeSIM.
                    By downloading, installing, or using the App, you agree to be bound by this Agreement.
                </p>

                <h2 className="text-2xl font-bold mt-12 mb-6">1. License Grant</h2>
                <p>
                    GeSIM grants you a limited, non-exclusive, non-transferable, revocable license to download and use the App for personal, non-commercial purposes only, in accordance with this Agreement.
                </p>

                <h2 className="text-2xl font-bold mt-12 mb-6">2. Restrictions</h2>
                <p>
                    You may not:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                    <li>Copy, modify, distribute, sell, lease, or sublicense the App</li>
                    <li>Reverse engineer, decompile, or attempt to extract the source code</li>
                    <li>Use the App for unlawful purposes or in violation of applicable laws</li>
                    <li>Exploit the App or its services for commercial use without permission</li>
                </ul>

                <h2 className="text-2xl font-bold mt-12 mb-6">3. Ownership</h2>
                <p>
                    The App, including all content, features, software, and intellectual property, is owned exclusively by GeSIM. No ownership rights are transferred to you under this Agreement.
                </p>

                <h2 className="text-2xl font-bold mt-12 mb-6">4. Updates and Changes</h2>
                <p>
                    GeSIM reserves the right to modify, suspend, or discontinue the App or this License at any time without notice.
                </p>

                <h2 className="text-2xl font-bold mt-12 mb-6">5. Termination</h2>
                <p>
                    This license is effective until terminated. It will terminate automatically if you fail to comply with any terms of this Agreement.
                </p>

                <h2 className="text-2xl font-bold mt-12 mb-6">6. Disclaimer</h2>
                <p>
                    The App is provided "as is" without warranties of any kind, either express or implied.
                </p>

                <h2 className="text-2xl font-bold mt-12 mb-6">7. Contact</h2>
                <p>
                    For questions regarding this License, contact: <a href="mailto:contact@gesim.io" className="text-blue-500 hover:underline">contact@gesim.io</a>
                </p>
            </section>
        </LegalLayout>
    )
}
