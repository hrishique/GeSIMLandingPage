"use client"

import { usePathname } from "next/navigation"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { FloatingLogo } from "@/components/floating-logo"

export default function ClientLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const pathname = usePathname()
    const isMaintenancePage = pathname === "/"

    if (isMaintenancePage) {
        return <main className="min-h-screen">{children}</main>
    }

    return (
        <>
            <Header />
            <main className="min-h-screen">{children}</main>
            <Footer />
            <FloatingLogo />
        </>
    )
}
