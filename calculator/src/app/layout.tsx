import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Simple Calculator",
  description: "A simple calculator app for desktop and mobile devices.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="mainPageLayout">
        <header>
          <h1>Simple Calculator</h1>
        </header>
          {children}
      </body>
    </html>
  );
}
