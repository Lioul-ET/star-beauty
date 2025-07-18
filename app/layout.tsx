import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import { Toaster } from "@/components/ui/sonner";
// import ModernTranslator from "@/app/components/modernTranslator";

const Manrope = localFont({
  src: "./fonts/Manrope-VariableFont_wght.ttf",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "StarBeautyAlbania",
  description: "Approach a Modern Beauty,Health & Treatment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body className={`${Manrope.className} antialiased`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
