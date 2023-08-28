import Link from "next/link";
import NavLink from "./NavLink";

export default function Nav() {
    return (
        <nav className="p-8 md:px-24 text-right space-x-8">
            <NavLink url="/" label="Portfolio" />
            <NavLink url="/thumbnails" label="Thumbnails" />
            <NavLink url="/about" label="About" />
        </nav>
    )
}