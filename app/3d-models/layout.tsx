import { RootLayoutProps } from "../types";

export default function Layout({ children }: RootLayoutProps) {
    return (<>
        <nav>
            <ul className="flex flex-row scroll-smooth snap-x md:flex-col gap-3 *:cursor-pointer uppercase text-base text-gray-600 px-4 *:px-2 *:hover:text-orange-400 md:*:hover:border-l md:*:hover:border-orange-400">
                <li>All</li>
                <li>3d printer</li>
                <li>Art</li>
                <li>Education</li>
                <li>Fashion</li>
                <li>Hobby & Diy</li>
                <li>Household</li>
                <li>Miniatures</li>
                <li>Tools</li>
                <li>Toys & games</li>
            </ul>
        </nav>
        {children}
    </>
    )
}
