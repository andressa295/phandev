import { ReactNode } from 'react';
import { Poppins } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
});

export const metadata = {
  title: 'Phand Dev | Portfólio',
};

interface LayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="pt-br">
      <body className={poppins.className}>
        {children}
      </body>
    </html>
  );
}