import "@/app/globals.css";
import { albert, montserrat } from "@/app/fonts";
import { RootLayoutProps } from "@/app/types";
import NavBar from "@/app/components/NavBar";

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
