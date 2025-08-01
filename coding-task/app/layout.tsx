import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HackerNews Clone",
  description: "Simplified HackerNews clone with Next.js App Router",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main className="px-4">{children}</main>
      </body>
    </html>
  );
}
