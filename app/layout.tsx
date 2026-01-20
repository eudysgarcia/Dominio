import type { Metadata } from "next";
import { Urbanist } from "next/font/google";

import "./globals.css";
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

import Navbar from "@/components/navbar";
import MobileNavbar from "@/components/mobile-navbar";
import Header from "@/components/header";
import { LanguageProvider } from "@/contexts/LanguageContext";
import ClientLayout from "@/components/client-layout";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Eudys García Saviñón | Full Stack Developer",
  description: "Desarrollador Full Stack especializado en JavaScript, React, Node.js, PHP y .NET. Desarrollo de aplicaciones web modernas y soluciones de software personalizadas.",
  keywords: "desarrollador full stack, web developer, React, Node.js, PHP, .NET, JavaScript, TypeScript, Santo Domingo",
  authors: [{ name: "Eudys García Saviñón" }],
  openGraph: {
    title: "Eudys García Saviñón | Full Stack Developer",
    description: "Desarrollador Full Stack especializado en JavaScript, React, Node.js, PHP y .NET",
    url: "https://www.eudexcode.com",
    siteName: "Eudex Code",
    locale: "es_DO",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={urbanist.className}>
        <ClientLayout>
          <Navbar />
          <MobileNavbar />
          <Header />
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
