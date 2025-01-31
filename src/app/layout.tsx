import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/redux/provider";

export const metadata: Metadata = {
  title: "YatriCabs",
  description: "YatriCabs Official",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
