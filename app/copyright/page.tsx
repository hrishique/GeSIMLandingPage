"use client"

import { Copyright } from "lucide-react"
import { LegalLayout } from "@/components/legal-layout"

export default function CopyrightPage() {
    return (
        <LegalLayout
            title="Copyright Notice"
            lastUpdated="January 2026"
            icon={Copyright}
        >
            <section className="space-y-6">
                <p>
                    &copy; 2026 GeSIM. All rights reserved.
                </p>

                <h2 className="text-2xl font-bold mt-12 mb-6">Intellectual Property</h2>
                <p>
                    All content, software, source code, designs, logos, graphics, trademarks, and other intellectual property associated with the GeSIM mobile application and website are the exclusive property of GeSIM.
                </p>

                <h2 className="text-2xl font-bold mt-12 mb-6">Prohibited Use</h2>
                <p>
                    Unauthorized copying, reproduction, modification, distribution, or republication of any part of the App or its content is strictly prohibited without prior written permission from GeSIM.
                </p>

                <h2 className="text-2xl font-bold mt-12 mb-6">Trademarks</h2>
                <p>
                    GeSIM™ and all related names, logos, and marks are trademarks or trade dress of GeSIM.
                    Any third-party trademarks, service marks, or logos appearing in the App are the property of their respective owners.
                </p>

                <h2 className="text-2xl font-bold mt-12 mb-6">Contact</h2>
                <p>
                    For copyright-related inquiries, contact: <a href="mailto:contact@gesim.xyz" className="text-blue-500 hover:underline">contact@gesim.xyz</a>
                </p>
            </section>
        </LegalLayout>
    )
}
