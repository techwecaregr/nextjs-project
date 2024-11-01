import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Container from "@/components/global/Container";
import Footer from "@/components/footer/Footer";
import { Roboto } from 'next/font/google';
import Providers from './providers';
export const metadata: Metadata = {
  title: "TechWeCare",
  description: "Η φροντίδα που χρειάζονται οι συσκευές σας",
  keywords: "Επισκευές, Αλλαγή οθόνης, Αλλαγή μπαταρίας, Αναβαθμίσεις"
};

const roboto = Roboto({ subsets: ['latin'], weight: ['400']});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={roboto.className}>
        <Providers>
          <Navbar/>
          <Container className='py-20'>{children}</Container>
          <Footer/>
        </Providers>
      </body>
    </html>
  );
}
