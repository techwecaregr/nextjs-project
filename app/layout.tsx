import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Container from "@/components/global/Container";
import Footer from "@/components/footer/Footer";
import { Roboto } from 'next/font/google';
import Providers from './providers';
import Script from "next/script";
import {GoogleTagManager} from "@next/third-parties/google";

export const metadata: Metadata = {
  title: "TechWeCare | Επισκευές κινητών, Θήκες, Gadgets τεχνολογίας",
  description: "Επισκευές κινητών, tablet, laptop σε Πεύκη, Μαρούσι, Μεταμόρφωση, Ηράκλειο - Προστασία συσκευής - Αναβαθμίσεις λογισμικού και είδη τεχνολογίας.",
  keywords: "Επισκευές κινητών, Επισκευή μητρικής πλακέτας, Αλλαγή οθόνης, Αλλαγή μπαταρίας, Άμεση επισκευή, Αναβαθμίσεις υπολογιστών, Αναβαθμίσεις laptop, Θήκες κινητών, Φορτιστές, Τζαμάκια προστασίας, Προστασία οθόνης, Προστασία κάμερας, Μεταφορά δεδομένων"
};

const roboto = Roboto({ subsets: ['latin'], weight: ['400']});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="el" suppressHydrationWarning>
      <GoogleTagManager gtmId="G-8G3SM5ERQ8"/>
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
