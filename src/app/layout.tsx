import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header";
import SessionAuthProvider from "@/context/SessionAuthProvider";


export const metadata: Metadata = {
  title: "Peuma Limay",
  description: "A.C.S.D. Peuma Limay",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col items-center">
          <SessionAuthProvider>
          <Header />
          {children}
          </SessionAuthProvider>
      </body>
    </html>
  );
}