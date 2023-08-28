import Link from "next/link";

export default function NavLink({ label, url }: { label: string, url: string }) {
    return (
        <Link className="hover:text-gray-600 transition-all duration-100" href={url}>{label}</Link>
    )
}