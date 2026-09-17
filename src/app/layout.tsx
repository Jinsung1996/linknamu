import type { Metadata } from "next";
import { Gaegu } from "next/font/google";
import "./globals.css";

const gaegu = Gaegu({
  variable: "--font-gaegu",
  // Google은 Gaegu에 "korean" 서브셋을 실제로 제공하지만(한글 표시에 필수),
  // next/font의 타입 정의에는 이 폰트의 subsets가 "latin"만 등록되어 있어
  // 타입 단언으로 우회한다. (Vercel 빌드 시 타입 오류 방지용)
  subsets: ["latin", "korean"] as unknown as Array<"latin">,
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "링크나무",
  description: "내 모든 링크를 한 페이지에 모아 두고, 하나의 URL로 공유하는 서비스",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ko" className={`${gaegu.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
