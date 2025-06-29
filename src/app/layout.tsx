import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "makeMVP - Turn Ideas into Reality",
  description: "We help businesses build their digital presence with modern solutions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      
      <body className={`${inter.className} bg-gray-900 text-white min-h-screen`}>
        {children}
      </body>
    </html>
  );
}
