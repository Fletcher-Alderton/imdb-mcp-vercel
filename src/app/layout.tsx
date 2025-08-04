import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "IMDb MCP - Model Context Protocol Server for Movie Data",
  description: "Deploy a production-ready Model Context Protocol server for IMDb data on Vercel. Access comprehensive movie and TV show information through a clean, efficient API with OMDB integration.",
  keywords: ["IMDb", "MCP", "Model Context Protocol", "Movie API", "OMDB", "Vercel", "Movie Data", "TV Shows", "API"],
  authors: [{ name: "IMDb MCP Team" }],
  creator: "IMDb MCP",
  publisher: "IMDb MCP",
  robots: "index, follow",
  openGraph: {
    title: "IMDb MCP - Model Context Protocol Server for Movie Data",
    description: "Deploy a production-ready Model Context Protocol server for IMDb data on Vercel. Access comprehensive movie and TV show information through a clean, efficient API.",
    type: "website",
    url: "https://imdb-mcp-vercel.vercel.app",
    siteName: "IMDb MCP",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "IMDb MCP - Model Context Protocol Server",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IMDb MCP - Model Context Protocol Server for Movie Data",
    description: "Deploy a production-ready Model Context Protocol server for IMDb data on Vercel.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
