import type { Metadata } from "next";
import "./globals.css";


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
      url: "https://crumbvault.netlify.app/meta-image.png",
      width: 1200,
      height: 630,
      alt: "Crumbvault preview image",
    }
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Crumbvault",
    description: "The smarter way to handle cookie banners",
    images: ["https://crumbvault.netlify.app/meta-image.png"],
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
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
