"use client"

import { ShieldCheck } from "lucide-react"
import { LegalLayout } from "@/components/legal-layout"

export default function PrivacyPage() {
  return (
    <LegalLayout
      title="Privacy Policy"
      lastUpdated="December 2025"
      icon={ShieldCheck}
    >
      <section className="space-y-6">
        <p>
          This privacy policy applies to the GeSIM app (hereby referred to as "Application") for mobile devices that was created by GeSIMxyz (hereby referred to as "Service Provider") as a Free service. This service is intended for use "AS IS".
        </p>

        <h2 className="text-2xl font-bold mt-12 mb-6">Information Collection and Use</h2>
        <p>
          The Application collects information when you download and use it. This information may include:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Your device's Internet Protocol address (IP address)</li>
          <li>The pages of the Application that you visit, the time and date of your visit, the time spent on those pages</li>
          <li>The operating system you use on your mobile device</li>
        </ul>
        <p>
          The Application does not gather precise information about the location of your mobile device. The Service Provider may use the information you provided to contact you from time to time to provide you with important information, required notices and marketing promotions.
        </p>

        <h2 className="text-2xl font-bold mt-12 mb-6">Third Party Access</h2>
        <p>
          Only aggregated, anonymized data is periodically transmitted to external services to aid the Service Provider in improving the Application and their service. The Service Provider may disclose User Provided and Automatically Collected Information as required by law, or when they believe in good faith that disclosure is necessary to protect their rights.
        </p>

        <h2 className="text-2xl font-bold mt-12 mb-6">Opt-out Rights</h2>
        <p>
          You can stop all collection of information by the Application easily by uninstalling it. You may use the standard uninstall processes as may be available as part of your mobile device.
        </p>

        <h2 className="text-2xl font-bold mt-12 mb-6">Data Retention Policy</h2>
        <p>
          The Service Provider will retain User Provided data for as long as you use the Application and for a reasonable time thereafter. If you'd like them to delete User Provided Data, please contact them at <a href="mailto:contact@gesim.xyz" className="text-blue-500 hover:underline">contact@gesim.xyz</a>.
        </p>

        <h2 className="text-2xl font-bold mt-12 mb-6">Children</h2>
        <p>
          The Service Provider does not knowingly collect personally identifiable information from children under 13. If you are aware that your child has provided personal information, please contact the Service Provider so they can take necessary actions.
        </p>

        <h2 className="text-2xl font-bold mt-12 mb-6">Security</h2>
        <p>
          The Service Provider is concerned about safeguarding the confidentiality of your information. They provide physical, electronic, and procedural safeguards to protect the information they process and maintain.
        </p>

        <h2 className="text-2xl font-bold mt-12 mb-6">Changes</h2>
        <p>
          This Privacy Policy may be updated from time to time for any reason. You are advised to consult this Privacy Policy regularly for any changes, as continued use is deemed approval of all changes.
        </p>
        <p>
          This privacy policy is effective as of 2025-12-06.
        </p>

        <h2 className="text-2xl font-bold mt-12 mb-6">Contact Us</h2>
        <p>
          If you have any questions regarding privacy while using the Application, please contact the Service Provider via email at <a href="mailto:contact@gesim.xyz" className="text-blue-500 hover:underline">contact@gesim.xyz</a>.
        </p>
      </section>
    </LegalLayout>
  )
}
