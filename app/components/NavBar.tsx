'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/public/logo.svg";
import LogoMobile from "@/public/logo_mobile.svg";
import NavLink from "@/app/components/NavLink";

export default function NavBar() {
    const pathname = usePathname();

    return (
        <header className="bg-white w-full">
            <nav className={`flex justify-between text-base uppercase font-semibold p-5 text-gray-600`}>
                <Link href={'/'} prefetch={false}>
                    <Logo className="hidden md:block w-[200px] h-auto" />
                    <LogoMobile className="block md:hidden w-[40px] h-auto" />
                </Link>
                <ul className="flex items-center gap-5">
                    <NavLink href={'/3d-models'} isActive={pathname.startsWith('/3d-models')}>3d models</NavLink>
                    <NavLink href={'/about'} isActive={pathname.startsWith('/about')}>About</NavLink>
                </ul>
            </nav>
        </header >
    )
}