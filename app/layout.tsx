import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://surepallybhavani.github.io"),
  title: "Bhavani Surepally | Software and Security Portfolio",
  description:
    "Portfolio for Bhavani Surepally, a Computer Science graduate focused on AWS-backed full-stack applications, application security, and OWASP Top 10 testing.",
  keywords: [
    "Bhavani Surepally",
    "software engineer",
    "application security",
    "secure code review",
    "AWS",
    "Python",
    "Flask",
    "Burp Suite",
    "portfolio"
  ],
  authors: [{ name: "Bhavani Surepally" }],
  openGraph: {
    title: "Bhavani Surepally | Software and Security Portfolio",
    description:
      "AWS-backed full-stack, backend, and application security portfolio for Bhavani Surepally.",
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
