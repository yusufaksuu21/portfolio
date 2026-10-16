import type { Metadata } from "next";
import "./globals.css";
import PortfolioShell from "@/components/PortfolioShell";

export const metadata: Metadata = {
  title: "Yusuf Aksu | Yazılım Mühendisi",
  description:
    "Yusuf Aksu — Python backend, yapay zeka ve web odaklı yazılım mühendisi portfolyosu.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        />
      </head>
      <body>
        <PortfolioShell>{children}</PortfolioShell>
      </body>
    </html>
  );
}
