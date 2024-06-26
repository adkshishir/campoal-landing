import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';
import NavBar from '../common/nav-bar';
import Footer from '@/common/footer';
import Navbar from '../common/nav-bar';

const inter = Inter({ subsets: ['latin'] });
const poppins = Poppins({
  subsets: ['latin'],
  weight: '400',
});

export const metadata: Metadata = {
  title: 'Campoal Global',
  description: 'made with nextjs and tailwindcss',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html data-theme="light" lang='en'>
      <head>
        <link
          href='https://cdn.jsdelivr.net/npm/daisyui@4.11.1/dist/full.min.css'
          rel='stylesheet'
          type='text/css'
        />
        <script src='https://cdn.tailwindcss.com'></script>
      </head>
      <body className={poppins.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
