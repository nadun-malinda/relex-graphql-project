import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";
import "./globals.css";

const sourceSans3 = Source_Sans_3({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RELEX Project",
  description: "RELEX assignment to utilise GitHub GraphQL repository API",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={sourceSans3.className}>
      <body className="bg-zinc-50">
        <div className="w-full max-w-6xl mx-auto p-8 h-full bg-white">
          {children}
        </div>
      </body>
    </html>
  );
}
