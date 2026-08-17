import type { Metadata, Viewport } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans', display: 'swap' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-serif', display: 'swap' });

export const metadata: Metadata = {
  title: '81 Tahun Kemerdekaan Republik Indonesia — 17 Agustus 2026',
  description: 'Memperingati 81 Tahun Kemerdekaan Republik Indonesia dengan tema Indonesia Berdaulat, Adil, dan Makmur.',
  openGraph: {
    title: '81 Tahun Kemerdekaan Republik Indonesia',
    description: 'Memperingati 81 Tahun Kemerdekaan Republik Indonesia dengan tema Indonesia Berdaulat, Adil, dan Makmur.',
    url: 'https://hut81.republikindonesia.go.id',
    siteName: 'HUT ke-81 RI',
    locale: 'id_ID',
    type: 'website',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}