import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/contexts/AuthContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "WallsPie - Free 4K Wallpapers & HD Backgrounds",
    template: "%s | WallsPie"
  },
  description: "Download free 4K, HD, and mobile wallpapers. Browse thousands of high-quality images across 20+ categories. No login required.",
  keywords: ["wallpapers", "4k wallpapers", "hd wallpapers", "free wallpapers", "backgrounds", "desktop wallpapers", "mobile wallpapers"],
  authors: [{ name: "WallsPie Team" }],
  creator: "WallsPie",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://wallspie.com",
    title: "WallsPie - Free 4K Wallpapers & HD Backgrounds",
    description: "Download free 4K, HD, and mobile wallpapers. Browse thousands of high-quality images.",
    siteName: "WallsPie",
  },
  twitter: {
    card: "summary_large_image",
    title: "WallsPie - Free 4K Wallpapers",
    description: "Download free 4K, HD, and mobile wallpapers",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
