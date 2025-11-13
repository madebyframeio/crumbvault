import type { Metadata } from "next";
import localFont from 'next/font/local'
import "./globals.css";


export const outfit = localFont({
  variable: "--font-outfit",
  src: '../../public/fonts/Outfit-VariableFont_wght.woff2',
  display: "swap",
});


export const metadata: Metadata = {
  title: "Crumbvault",
  description: "The smarter way to handle cookie banners",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Crumbvault",
    description: "The smarter way to handle cookie banners",
    url: "https://crumbvault.netlify.app/",
    siteName: "Crumbvault",
    images: [
      {
        url: "/meta-image.png", 
        width: 1200,
        height: 630,
        alt: "Crumbvault — The smarter way to handle cookie banners",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Crumbvault",
    description: "The smarter way to handle cookie banners",
    images: ["/meta-image.png"],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
