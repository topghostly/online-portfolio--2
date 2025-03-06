import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import { ThemeProvider } from "@/components/theme/theme-provider";
import GrainAnimation from "@/components/grain/grain-animation";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Temitope Abolaji • software developer",
  description:
    "Expert in React, React Native, and AI-powered applications. Specializing in building fast, scalable, and user-friendly web and mobile experiences. Skilled in integrating machine learning, authentication, and real-time features to enhance digital products.",
};

/* Import out local fonts */
const gobold = localFont({
  src: [
    {
      path: "../../public/fonts/Gobold-cut.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/Gobold-Hollow-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/Gobold-Hollow.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-gobold",
});

const satoshi = localFont({
  src: [
    {
      path: "../../public/fonts/Satoshi-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Satoshi-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/Satoshi-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-satoshi",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${gobold.className} ${satoshi.className} antialiased `}>
        <ThemeProvider
          attribute={"class"}
          enableSystem={true}
          defaultTheme="system"
        >
          {children}
        </ThemeProvider>

        {/* Grained js animation script file */}
        <GrainAnimation />
        <Script src="/grained.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
