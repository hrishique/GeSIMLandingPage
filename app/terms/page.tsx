"use client"

import { Gavel } from "lucide-react"
import { LegalLayout } from "@/components/legal-layout"

export default function TermsPage() {
    return (
        <LegalLayout
            title="Terms & Conditions"
            lastUpdated="December 2025"
            icon={Gavel}
        >
            <section className="space-y-6">
                <p>
                    These terms and conditions apply to the GeSIM app (hereby referred to as "Application") for mobile devices that was created by GeSIMxyz (hereby referred to as "Service Provider") as a Free service.
                </p>
                <p>
                    By downloading or using the Application, these terms will automatically apply to you - you should make sure therefore that you read them carefully before using the Application. You are not allowed to copy or modify the Application, any part of the Application, or our trademarks in any way. You are not allowed to attempt to extract the source code of the Application, and you also shouldn't try to translate the Application into other languages or make derivative versions. The Application itself, and all the trademarks, copyright, database rights, and other intellectual property rights related to it, still belong to GeSIMxyz.
                </p>
                <p>
                    GeSIMxyz is committed to ensuring that the Application is as useful and efficient as possible. For that reason, we reserve the right to make changes to the Application or to charge for its services, at any time and for any reason. We will never charge you for the Application or its services without making it very clear to you exactly what you're paying for.
                </p>
                <p>
                    The Application stores and processes personal data that you have provided to us, to provide the Service. It's your responsibility to keep your phone and access to the Application secure. We therefore recommend that you do not jailbreak or root your phone, which is the process of removing software restrictions and limitations imposed by the official operating system of your device. It could make your phone vulnerable to malware/viruses/malicious programs, compromise your phone's security features and it could mean that the Application won't work properly or at all.
                </p>

                <h2 className="text-2xl font-bold mt-12 mb-6">Third-Party Services</h2>
                <p>
                    The Application does use third-party services that declare their Terms and Conditions.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                    <li><a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Google Play Services</a></li>
                    <li><a href="https://firebase.google.com/terms/analytics" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Google Analytics for Firebase</a></li>
                    <li><a href="https://firebase.google.com/terms/crashlytics" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Firebase Crashlytics</a></li>
                </ul>
                <p>
                    Please be aware that there are certain things that GeSIMxyz will not take responsibility for. Certain functions of the Application will require the Application to have an active internet connection. The connection can be Wi-Fi or provided by your mobile network provider, but GeSIMxyz cannot take responsibility for the Application not working at full functionality if you don't have access to Wi-Fi, and you don't have any of your data allowance left.
                </p>
                <p>
                    If you are using the application outside of a Wi-Fi area, please be aware that your mobile network provider's agreement terms still apply. Consequently, you may incur charges from your mobile provider for data usage during the connection to the application, or other third-party charges. By using the application, you accept responsibility for any such charges, including roaming data charges if you use the application outside of your home territory (i.e., region or country) without disabling data roaming.
                </p>

                <h2 className="text-2xl font-bold mt-12 mb-6">Changes to These Terms and Conditions</h2>
                <p>
                    The Service Provider may periodically update their Terms and Conditions. Therefore, you are advised to review this page regularly for any changes. The Service Provider will notify you of any changes by posting the new Terms and Conditions on this page.
                </p>
                <p>
                    These terms and conditions are effective as of 2025-12-06.
                </p>

                <h2 className="text-2xl font-bold mt-12 mb-6">Contact Us</h2>
                <p>
                    If you have any questions or suggestions about the Terms and Conditions, please do not hesitate to contact the Service Provider at <a href="mailto:contact@gesim.xyz" className="text-blue-500 hover:underline">contact@gesim.xyz</a>.
                </p>
            </section>
        </LegalLayout>
    )
}
