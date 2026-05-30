import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Head from "next/head";

interface LayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
}

export default function Layout({
  children,
  title = "Batman — The Dark Knight",
  description = "Enter the world of Gotham City's greatest protector.",
}: LayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta name="theme-color" content="#0a0a0a" />
      </Head>
      <div className="noise-bg min-h-screen flex flex-col" style={{ background: "#0a0a0a" }}>
        <Navbar />
        <main className="flex-1 pt-20">{children}</main>
        <Footer />
      </div>
    </>
  );
}
