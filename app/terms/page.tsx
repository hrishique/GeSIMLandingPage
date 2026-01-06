"use client"

import React from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function TermsAndConditionsPage() {
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
                        Terms & Conditions
                    </h1>

                    <div className="space-y-8 text-slate-700 dark:text-slate-300 leading-relaxed text-lg">
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

                        <section>
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">Third-Party Services</h2>
                            <p>The Application does use third-party services that declare their Terms and Conditions.</p>
                            <ul className="list-disc pl-6 space-y-2 mt-4">
                                <li><a href="https://policies.google.com/terms" className="text-blue-500 hover:text-blue-600 underline" target="_blank" rel="noopener noreferrer">Google Play Services</a></li>
                                <li><a href="https://firebase.google.com/terms/analytics" className="text-blue-500 hover:text-blue-600 underline" target="_blank" rel="noopener noreferrer">Google Analytics for Firebase</a></li>
                                <li><a href="https://firebase.google.com/terms/crashlytics" className="text-blue-500 hover:text-blue-600 underline" target="_blank" rel="noopener noreferrer">Firebase Crashlytics</a></li>
                            </ul>
                        </section>

                        <p>
                            Please be aware that there are certain things that GeSIMxyz will not take responsibility for. Certain functions of the Application will require the Application to have an active internet connection. The connection can be Wi-Fi or provided by your mobile network provider, but GeSIMxyz cannot take responsibility for the Application not working at full functionality if you don't have access to Wi-Fi, and you don't have any of your data allowance left.
                        </p>

                        <p>
                            If you are using the application outside of a Wi-Fi area, please be aware that your mobile network provider's agreement terms still apply. Consequently, you may incur charges from your mobile provider for data usage during the connection to the application, or other third-party charges. By using the application, you accept responsibility for any such charges, including roaming data charges if you use the application outside of your home territory (i.e., region or country) without disabling data roaming. If you are not the bill payer for the device on which you are using the application, they assume that you have obtained permission from the bill payer.
                        </p>

                        <p>
                            Similarly, the Service Provider cannot always assume responsibility for your usage of the application. For instance, it is your responsibility to ensure that your device remains charged. If your device runs out of battery and you are unable to access the Service, the Service Provider cannot be held responsible.
                        </p>

                        <p>
                            In terms of the Service Provider's responsibility for your use of the application, it is important to note that while they strive to ensure that it is updated and accurate at all times, they do rely on third parties to provide information to them so that they can make it available to you. The Service Provider accepts no liability for any loss, direct or indirect, that you experience as a result of relying entirely on this functionality of the application.
                        </p>

                        <p>
                            The Service Provider may wish to update the application at some point. The application is currently available as per the requirements for the operating system (and for any additional systems they decide to extend the availability of the application to) may change, and you will need to download the updates if you want to continue using the application. The Service Provider does not guarantee that it will always update the application so that it is relevant to you and/or compatible with the particular operating system version installed on your device. However, you agree to always accept updates to the application when offered to you. The Service Provider may also wish to cease providing the application and may terminate its use at any time without providing termination notice to you. Unless they inform you otherwise, upon any termination, (a) the rights and licenses granted to you in these terms will end; (b) you must cease using the application, and (if necessary) delete it from your device.
                        </p>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">Changes to These Terms and Conditions</h2>
                            <p>The Service Provider may periodically update their Terms and Conditions. Therefore, you are advised to review this page regularly for any changes. The Service Provider will notify you of any changes by posting the new Terms and Conditions on this page.</p>
                            <p className="mt-4">These terms and conditions are effective as of <strong>2025-12-06</strong></p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">Contact Us</h2>
                            <p>If you have any questions or suggestions about the Terms and Conditions, please do not hesitate to contact the Service Provider at <a href="mailto:contact@gesim.xyz" className="text-blue-500 hover:text-blue-600 underline">contact@gesim.xyz</a></p>
                        </section>
                    </div>
                </article>
            </div>
        </div>
    )
}
