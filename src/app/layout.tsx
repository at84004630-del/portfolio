import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Abhinav Tripathi | Python & Java Developer | Multi-Agent AI Systems",
  description:
    "Portfolio of Abhinav Tripathi, Python & Java Developer and MCA scholar specializing in robust backend architectures, multi-agent AI systems (LangGraph), and on-device edge machine learning.",
  keywords: [
    "Abhinav Tripathi",
    "Python Developer",
    "Java Developer",
    "Multi-Agent AI",
    "LangGraph",
    "FastAPI",
    "Backend Architect",
    "Qualcomm AI Hub",
    "Edge AI",
    "DPDPA 2023",
    "HIPAA Compliance",
  ],
  authors: [{ name: "Abhinav Tripathi" }],
  creator: "Abhinav Tripathi",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://abhinav-tripathi.vercel.app",
    title: "Abhinav Tripathi | Python & Java Developer | Multi-Agent AI Systems",
    description:
      "Specializing in application development, robust backend architectures, and multi-agent AI systems. Shortlisted at SBI Hackathon @ GFF '26.",
    siteName: "Abhinav Tripathi Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abhinav Tripathi | Python & Java Developer",
    description:
      "Python & Java Developer and MCA scholar specializing in backend architectures and multi-agent AI systems.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth antialiased`}
    >
      <head>
        {/* Anti-FOUC Theme Initialization */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('portfolio-theme');
                  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (saved === 'dark' || (!saved && prefersDark)) {
                    document.documentElement.classList.add('dark');
                    document.documentElement.style.colorScheme = 'dark';
                  } else {
                    document.documentElement.classList.remove('dark');
                    document.documentElement.style.colorScheme = 'light';
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 selection:bg-indigo-500/20 selection:text-indigo-600 dark:selection:text-indigo-400">
        {children}
      </body>
    </html>
  );
}
