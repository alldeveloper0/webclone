import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const nexoFont = localFont({
  variable: "--font-nexo",
  src: [
    {
      path: "../../public/sites/nexo.com-aa72f0e4/shared/fonts/NexoRegular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/sites/nexo.com-aa72f0e4/shared/fonts/NexoRegularItalic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/sites/nexo.com-aa72f0e4/shared/fonts/NexoMedium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/sites/nexo.com-aa72f0e4/shared/fonts/NexoMediumItalic.ttf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../../public/sites/nexo.com-aa72f0e4/shared/fonts/NexoBold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/sites/nexo.com-aa72f0e4/shared/fonts/NexoBoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
  ],
});

export const metadata: Metadata = {
  title: "Nexo: Your Wealth Platform for Digital Assets",
  description:
    "Earn, borrow, and spend crypto. All in one place. Access the premier wealth platform built to grow your crypto.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${nexoFont.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
