import "./globals.css";
import { albert, montserrat } from "./fonts";
import { RootLayoutProps } from "./types";
import NavBar from "./components/NavBar";

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={`${albert.className} ${montserrat.variable}`}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
