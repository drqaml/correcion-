import type { Metadata } from "next";
import "./ui/globals.css";
import { roboto } from "@/app/ui/fonts"

export const metadata: Metadata = {
  title: "DMF",
  description: "DMF joyas y accesorios - dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
