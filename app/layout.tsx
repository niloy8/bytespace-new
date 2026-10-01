import type { Metadata } from "next";
import localFont from "next/font/local";
import { Poppins, Geist_Mono } from "next/font/google";
import "./globals.css";

const satoshi = localFont({
  src: [
    {
      path: "../public/fonts/Satoshi-Variable.woff2",
      style: "normal",
    },
    {
      path: "../public/fonts/Satoshi-VariableItalic.woff2",
      style: "italic",
    },
  ],
  variable: "--font-satoshi",
  display: "swap",
});

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ByteSpace — Get Access to Hundreds Courses Available",
  description: "Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.",
  icons: {
    icon: [
      { url: "/logos/Vector.svg", type: "image/svg+xml" },
      { url: "/vector.svg", type: "image/svg+xml" },
    ],
    shortcut: "/logos/Vector.svg",
    apple: "/logos/Vector.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${satoshi.variable} ${poppins.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body
        className="min-h-full flex flex-col font-sans"
        style={{ backgroundColor: "#F5F5F6" }}
      >
        {children}
      </body>
    </html>
  );
}
