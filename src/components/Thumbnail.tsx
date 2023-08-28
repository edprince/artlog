import Image from "next/image";

export default function Thumbnail() {
    const src = `https://github.com/edprince/artlog/blob/main/public/images/uploads/yosemite.jpg?raw=true`;

    return (
        <div className="hover:shadow-xl cursor-pointer bg-black">
            <Image className="hover:opacity-80 transition-all duration-100" alt='thumbnail' src={src} width={500} height={500} />
        </div>
    )
}