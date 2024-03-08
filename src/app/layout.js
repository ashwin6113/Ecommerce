import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
// import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    // <ClerkProvider>
      <html lang="en" data-theme="winter">
        <body className={inter.className}>
          <Navbar />
          <main>{children}</main>
        </body>
      </html>
    // </ClerkProvider>
  );
}
