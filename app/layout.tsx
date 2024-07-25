import type { Metadata } from "next";
import { DM_Sans } from 'next/font/google'
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-providers"


const font = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
})


export const metadata: Metadata = {
  title: "ZenAutomation",
  description: "Unlock the Power of Tranquil Automation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
