import Providers from "@/common/components/Providers";
import clsx from "clsx";
import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";

const sora = Sora({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Attener",
  description: "Progressive Pomodoro for your daily tasks",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/images/favicon.png" sizes="<generated>" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body
        className={clsx(
          "bg-neutral-50 dark:neutral-800 md:bg-neutral-50 md:dark:bg-neutral-50",
          sora.className
        )}
      >
        <Providers>
          <main className="max-w-[480px] max-auto bg-neutral-50 dark:bg-neutral-800 md:shadow-md md:min-h-screen">
            {children}
          </main>
        </Providers>
        {children}
      </body>
    </html>
  );
}
