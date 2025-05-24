// app/layout.js
import './globals.css';
import { Josefin_Sans, Vazirmatn } from 'next/font/google';
import ClientLayoutWrapper from './ClientLayoutWrapper';

export const metadata = {
  title: 'My Digital Business',
  description: 'Multi-store Network',
};

// Fonts
const josef = Josefin_Sans({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  display: 'swap',
});

const vazir = Vazirmatn({
  subsets: ['arabic'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </head>
      <body className={`${josef.className} ${vazir.className}`}>
        <ClientLayoutWrapper>
          {children}
        </ClientLayoutWrapper>
      </body>
    </html>
  );
}
