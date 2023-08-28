import Thumbnail from "@/components/Thumbnail"
import { attributes, react, ThumbnailContent } from "../../../thumbnails/yosemite.md"

export default function Thumbnails() {
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
                <Thumbnail />
                <Thumbnail />
                <Thumbnail />
                <Thumbnail />
                <Thumbnail />
                <Thumbnail />
            </div>
        </>
    )
}
