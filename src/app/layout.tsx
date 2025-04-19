import type { Metadata } from "next";
import "./globals.css";
import { satoshiRegular } from "@/fonts/font";


export const metadata: Metadata = {
  title: "Eathiopic Restaurant",
  description: "A restaurant website built with Next.js, Tailwind CSS and framer-motion.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <link
        rel="icon"
        type="image/png"
        href="/favicon-96x96.png"
        sizes="96x96"
      />
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link rel="manifest" href="/site.webmanifest" />

      <body
        className={`${satoshiRegular.className} overflow-x-hidden scrollbar scrollLight dark:scrollDark duration-300 bg-lightBg text-lightText dark:bg-darkBg dark:text-darkText
              `}
        suppressHydrationWarning
      >
        <div>{children}</div>
      </body>
    </html>
  );
}
