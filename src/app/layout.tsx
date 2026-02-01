import type { ReactNode } from "react";

export const metadata = {
  title: "Codex Smoketest",
  description: "Minimal Next.js app for Codex smoketest",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body style={{ fontFamily: "sans-serif", margin: 0, padding: "2rem" }}>
        {children}
      </body>
    </html>
  );
}
