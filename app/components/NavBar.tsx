'use client'

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import logo from "@/public/logo.svg";
import logoMobile from "@/public/logo_mobile.svg";
import NavLink from "@/app/components/NavLink";

export default function NavBar() {
    const pathname = usePathname();

    return (
        <header className="bg-white w-full">
            <nav className={`flex justify-between text-base uppercase font-semibold p-5 text-gray-600`}>
                <Link href={'/'} prefetch={false}>
                    <Image className="hidden md:block w-[200px] h-auto" src={logo} alt="logo" />
                    <Image className="block md:hidden w-[40px] h-auto" src={logoMobile} alt="logo" />
                </Link>
                <ul className="flex items-center gap-5">
                    <NavLink href={'/3d-models'} isActive={pathname.startsWith('/3d-models')}>3d models</NavLink>
                    <NavLink href={'/about'} isActive={pathname.startsWith('/about')}>About</NavLink>
                </ul>
            </nav>
        </header >
    )
}