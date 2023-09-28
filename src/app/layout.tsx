import "./globals.css"
import type { Metadata } from "next"
import {Outfit, Montserrat } from "next/font/google"
import TopMenu from "./components/topMenu/topMenu"
import Footer from "./components/Footer/footer"


export const outfit = Outfit({ subsets: ["latin"], variable: "--title-font", weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] })
export const montserrat = Montserrat({ subsets: ["latin"], variable: "--body-font", weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] })

export const metadata: Metadata = {
  title: "Squadeo solution de portage",
  description: "Calculez vos revenus en portage salarial",
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {


  return (
    <html className={`${outfit.variable}`}  lang="fr">
      <body >
        <TopMenu />
        {children}
        <Footer />
        </body>
    </html>
  )
}
