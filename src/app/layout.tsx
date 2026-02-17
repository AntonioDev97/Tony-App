import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Head from "./head";
import { cookies } from "next/headers";
import "./globals.scss";
import Navbar from "@/components/Navbar";
import FloatingButtons from "@/components/FloatingButtons";

export const metadata: Metadata = {
  title: "Tony - Software Engineer",
  description: "Tony's web site app, a software engineer.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const defaultTheme = (cookieStore.get("theme")?.value as "light" | "dark" | undefined) || "dark";

  return (
    <html lang="en" data-bs-theme={defaultTheme}>
      <Head />
      <body className='container-fluid'>
        <Header defaultTheme={defaultTheme} />
        <Navbar />
        <main id="main-app" className="container-fluid">
          {children}
        </main>
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}
