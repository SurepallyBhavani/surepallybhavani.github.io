import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bhavani Surepally | Software and Security Portfolio",
  description:
    "Portfolio for Bhavani Surepally, a Computer Science Engineering student and Oracle security intern focused on secure code review, backend development, AI projects, and application security.",
  keywords: [
    "Bhavani Surepally",
    "software engineer",
    "application security",
    "secure code review",
    "Python",
    "Flask",
    "machine learning",
    "portfolio"
  ],
  authors: [{ name: "Bhavani Surepally" }],
  openGraph: {
    title: "Bhavani Surepally | Software and Security Portfolio",
    description:
      "Software, backend, AI, and application security portfolio for Bhavani Surepally.",
    type: "website",
    images: [
      {
        url: "/profile.jpeg",
        width: 1176,
        height: 1294,
        alt: "Portrait of Bhavani Surepally"
      }
    ]
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
