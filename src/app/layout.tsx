import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Кадровое агенство КАПИТАЛ",
  description:
    "КАПИТАЛ: ваш надежный партнер в подборе профессиональных кадров и массовом найме. Доверьте нам заботу о вашем бизнесе.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
