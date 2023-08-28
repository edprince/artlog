import Link from "next/link";
import NavLink from "./NavLink";
import NameIcon from "../../public/name.svg";
import Image from "next/image";

export default function Nav() {
    return (
        <div className="px-8 md:px-24 flex flex-row">
            <Link href="/">
                <Image src={NameIcon} alt="Name" />
            </Link>
            <div className="flex-grow"></div>
            <nav className="space-x-8 flex align-center items-center">
                <NavLink url="/" label="Portfolio" />
                <NavLink url="/thumbnails" label="Thumbnails" />
                <NavLink url="/about" label="About" />
            </nav>
        </div>
    )
}