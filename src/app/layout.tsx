import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Anis's portfolio",
  description:
    "Welcome to Anis's full-stack development portfolio, a showcase of crafted web solutions from backend to frontend. Explore a selection of projects that highlight technical expertise, innovative problem-solving, and design prowess. Dive in to discover a blend of technical depth and creative flair in modern web development.",
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
