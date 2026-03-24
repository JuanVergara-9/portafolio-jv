import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Juan Ignacio Vergara | Portafolio",
  description: "Portafolio profesional de Juan Ignacio Vergara, desarrollador Full Stack y emprendedor.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="h-full overflow-hidden" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-full overflow-hidden`}
      >
        {/*
          attribute="class"  → next-themes agrega la clase "dark" al <html>
          defaultTheme="system" → respeta la preferencia del SO por defecto
          enableSystem → permite "system" como opción además de light/dark
          disableTransitionOnChange → evita flashes de transición CSS al cambiar tema
        */}
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
