import type { Metadata } from "next";
import "./style.css";

export const metadata: Metadata = {
  title: "My Immer",
  description: "Immerのサンプル",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <div className="wrapper">
          <h1 className="title">my use-immer</h1>
          {children}
        </div>
      </body>
    </html>
  );
}
