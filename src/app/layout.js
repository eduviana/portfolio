import Navbar from "@/components/navbar/Navbar";
import { League_Spartan, Libre_Baskerville } from "next/font/google";
import Footer from "@/components/footer/Footer";
import { DarkModeProvider } from "@/context/DarkModeContext";
import "./globals.css";

const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "300", "400", "500", "600", "700", "900"],
  variable: "--font-leagueSpartan",
});

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
  variable: "--font-libreBaskerville",
});

export const metadata = {
  title: "Eduardo Viana",
  description:
    "Sitio personal en el que encontrarás mi información y podrás ver mis trabajos realizados.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body
        className={`${leagueSpartan.variable} ${libreBaskerville.variable}`}
      >
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
