'use client'

import { getAllCategories } from "../lib/categories";
import { RootLayoutProps } from "../types";
import NavLink from "../components/NavLink";
import { usePathname } from "next/navigation";

export default function ModelsLayout({ children }: RootLayoutProps) {
    const categories = getAllCategories();
    const pathname = usePathname();

    return (
        <div className="relative flex flex-col min-h-screen gap-5 md:flex-row">
            <aside className="sticky top-0 z-10 w-full border-b border-gray-200 md:fixed md:w-64 md:top-1/2 md:-translate-y-1/2 md:border-none">
                <div className="relative">
                    <nav className="w-full overflow-x-auto md:overflow-visible scrollbar-hide">
                        <ul className="flex flex-row md:flex-col whitespace-nowrap px-4 py-3 space-x-4 md:p-0 md:space-x-0 md:space-y-3">
                            <NavLink href="/3d-models" isActive={pathname === '/3d-models'}>All</NavLink>
                            {categories.map((c, idx) => {
                                return <NavLink key={idx} href={`/3d-models/category/${c.slug}`} isActive={pathname === `/3d-models/category/${c.slug}`}>
                                    {c.displayName}
                                </NavLink>
                            })}
                        </ul>
                    </nav >
                    <div className="absolute top-0 right-0 w-8 h-full pointer-events-none bg-gradient-to-l from-white to-transparent md:hidden" />
                </div>
            </aside >

            <main className="flex-1 p-4 md:ml-64">{children}</main>
        </div >
    )
}