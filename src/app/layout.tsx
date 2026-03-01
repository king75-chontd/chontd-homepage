import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "C.H. Oriented | Connecting Health Beyond Borders",
  description:
    "C.H. Oriented builds connection-driven healthcare systems integrating medical expertise, global patient networks, and digital infrastructure.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "C.H. Oriented | Connecting Health Beyond Borders",
    description:
      "C.H. Oriented builds connection-driven healthcare systems integrating medical expertise, global patient networks, and digital infrastructure.",
    url: "https://chontd.com",
    siteName: "C.H. Oriented",
    images: [
      {
        url: "https://chontd.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "C.H. Oriented Logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "C.H. Oriented | Connecting Health Beyond Borders",
    description:
      "C.H. Oriented builds connection-driven healthcare systems integrating medical expertise, global patient networks, and digital infrastructure.",
    images: ["https://chontd.com/og-image.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0a0a0a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Fonts: Inter, Pretendard, Noto Sans JP/SC/KR */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Noto+Sans+JP:wght@400;500;600;700&family=Noto+Sans+KR:wght@400;500;600;700&family=Noto+Sans+SC:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"
        />
        {/* GA4: replace G-XXXXXXXXXX with your measurement ID */}
        {/* <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX" />
        <script dangerouslySetInnerHTML={{ __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XXXXXXXXXX');
        ` }} /> */}
      </head>
      <body className="antialiased bg-[#0a0a0a]">{children}</body>
    </html>
  );
}
