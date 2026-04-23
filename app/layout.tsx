import type { Metadata } from 'next';
import { Inter, Outfit } from 'next/font/google';
import { cn } from "@/lib/utils";
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
});

export const metadata: Metadata = {
  title: 'Rapid Fire Speaking | Fast-paced English Practice',
  description: 'Improve your English fluency and vocabulary recall with rapid-fire speaking challenges.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn("font-sans", inter.variable, outfit.variable)}>
      <body className="antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
