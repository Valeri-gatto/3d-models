import Link from "next/link";
import { getAllCategories } from "../lib/categories";
import { RootLayoutProps } from "../types";

export default function Layout({ children }: RootLayoutProps) {
    const category = "fashion";

    return (<>
        <nav>
            <ul className="flex flex-row scroll-smooth snap-x md:flex-col gap-3 *:cursor-pointer uppercase text-base text-gray-600 px-4 *:px-2 *:hover:text-orange-400 md:*:hover:border-l md:*:hover:border-orange-400">
                <Link href={'/3d-models'}><li>All</li></Link>
                {getAllCategories().map((c, idx) => {
                    return <Link key={idx} href={`/3d-models/category/${category}`}>
                        <li>{c.displayName}</li>
                    </Link>
                })}
            </ul>
        </nav >
        {children}
    </>
    )
}
