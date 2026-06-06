import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pranav Vernekar — Cloud & DevOps Engineer",
  description:
    "Portfolio of Pranav Vernekar, a Cloud and DevOps Engineer specializing in AWS, Terraform, CI/CD pipelines, and Generative AI.",
  keywords: [
    "Pranav Vernekar",
    "Cloud Engineer",
    "DevOps",
    "AWS",
    "Terraform",
    "Kubernetes",
    "Docker",
    "CI/CD",
    "Generative AI",
  ],
  authors: [{ name: "Pranav Vernekar" }],
  openGraph: {
    title: "Pranav Vernekar — Cloud & DevOps Engineer",
    description:
      "Building scalable cloud infrastructure, CI/CD pipelines, and modern DevOps solutions.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
       
      </head>
      <body
        style={{ fontFamily: "var(--font-body)" }}
        className="bg-background text-foreground antialiased"
      >
        {children}
      </body>
    </html>
  );
}