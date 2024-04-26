"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/header/header";
import { PrimeReactProvider, PrimeReactContext } from "primereact/api";
import "bootstrap-icons/font/bootstrap-icons.css";
import Footer from "./components/footer/footer";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <PrimeReactProvider>
        <body className={inter.className}>
          <Header></Header>

          {children}

          <div className="mt-5">
            <Footer></Footer>
          </div>
        </body>
      </PrimeReactProvider>
    </html>
  );
}
