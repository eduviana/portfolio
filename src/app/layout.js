import Navbar from "@/components/navbar/Navbar";
import "./globals.css";
import { Inter, Roboto } from "next/font/google";
import Footer from "@/components/footer/Footer";
import { DarkModeProvider } from "@/context/DarkModeContext";

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Eduardo Viana",
  description: "Sitio personal en el que encontrarás mi información y podrás ver mis trabajos realizados de frontend.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <DarkModeProvider>
          <div className="mainContainer">
            <Navbar />
            {children}
            <Footer />
          </div>
        </DarkModeProvider>
      </body>
    </html>
  );
}
