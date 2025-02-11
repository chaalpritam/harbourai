import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from 'next/font/local';
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const neueMachina = localFont({
  src: [
    {
      path: './fonts/NeueMachina-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/NeueMachina-Light.otf',
      weight: '300',
      style: 'light',
    },
    {
      path: './fonts/NeueMachina-Ultrabold.otf',
      weight: '800',
      style: 'bold',
    },
  ],
})

export const metadata: Metadata = {
  title: "Harbour Agent",
  description: "Create your Social Community DAO",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${neueMachina.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
