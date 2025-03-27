import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";

// Import Raleway with multiple font weights
const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["100", "400", "500", "700"], // Thin, Regular, Medium, Bold
});

export const metadata: Metadata = {
  title: "House of Cakes LC",
  description: "A cakeshop based in Leicester",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${raleway.variable} ${raleway.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
