import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Navbar } from "@/components/common/navbar"
import { Footer } from "@/components/common/footer"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: "Apple Inc.",
    description: "Apple",
    icons: {
        icon: "/assets/favicon/favicon.ico",
        shortcut: "/assets/favicon/favicon.ico"
    },
    authors: {
        name: "Bruno Carvalho Feitosa",
        url: "https://br.linkedin.com/in/bruno-carvalho-feitosa"
    }
}

export default function RootLayout({ children }: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    )
}