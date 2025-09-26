import Link from "next/link";
import "./globals.css";
import { albert, montserrat } from "./fonts";
import Image from "next/image";
import logo from "@/public/Logo.svg";
import logoMobile from "@/public/logo_mobile.svg"
import { RootLayoutProps } from "./types";

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={`${albert.className} ${montserrat.variable}`}>
        <header className="bg-white w-full">
          <nav className={`flex justify-between text-base uppercase font-semibold p-5 text-gray-600`}>
            <Link href={'/'} prefetch={false}>
              <Image className="hidden md:block w-[200px] h-auto" src={logo} alt="logo" />
              <Image className="block md:hidden w-[40px] h-auto" src={logoMobile} alt="logo" />
            </Link>
            <ul className="flex items-center gap-5 *:hover:text-orange-400 *:hover:border-b *:hover:border-orange-400 *:active:text-orange-400 *:active:border-b *:active:border-orange-400">
              <li><Link href={'/3d-models'}>3d models</Link></li>
              <li><Link href={'/about'}>About</Link></li>
            </ul>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
