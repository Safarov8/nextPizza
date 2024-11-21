import type { Metadata } from "next";
import Header from "@/components/shared/header";

export const metadata: Metadata = {
  title: "Next pizza",
  // icons: {
  //   icon: "../public/logo.png",
  // },
};

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <main className="min-h-screen">
          <Header />
          {children}
        </main>
    </html>
  );
}
