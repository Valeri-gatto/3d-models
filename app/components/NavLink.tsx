import Link from "next/link";
import { NavLinkProps } from "../types";

export default function NavLink({ href, children, isActive }: NavLinkProps) {
    return (
        <li className="uppercase text-gray-600 md:*:px-3">
            <Link href={href} className={isActive ? "transition-colors text-orange-accent md:border-l md:border-orange-accent hover:text-orange-accent" : "hover:text-orange-accent"}>
                {children}
            </Link>
        </li>
    )
}