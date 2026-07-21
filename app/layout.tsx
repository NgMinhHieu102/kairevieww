import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Independent Academies Association | Insight And Advice Viet Nam",
  description:
    "IAA là trang giới thiệu, đánh giá và khuyên dùng các sản phẩm, dịch vụ.",
  icons: {
    icon: "/images/iaa/iaa-fav-01-280x280.png",
    apple: "/images/iaa/iaa-fav-01-280x280.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
