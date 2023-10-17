import Layout from "@/component/Layout";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "@/reduxtoolkit/provider";

const inter = Inter({ weight: ["100", "400", "500", "600", "700", "900"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Infracredit",
  description: "We provide you with the best platform to Create and Edit Reports of your choice.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <Providers>
      <html lang="en">
        <body className={inter.className}>
          <Layout>{children}</Layout>
        </body>
      </html>
    </Providers>
  );
}
