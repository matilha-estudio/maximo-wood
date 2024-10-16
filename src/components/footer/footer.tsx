import Image from "next/image";
import { Caption } from "../text/Heading";

export function Footer() {
    return (
        <div className="flex flex-col items-center w-full bg-black">
            <div className="flex justify-center items-center max-w-screen-2xl w-full md:py-[120px] md:px-[72px] gap-8">

            </div>
            <div className="flex justify-between items-center max-w-screen-2xl w-full md:py-10 md:px-[72px] text-white border-t border-white">
                <Caption>
                    2024 Maximo Company. All Rights Reserved.
                </Caption>
                <Image src='/logos/badge-matilha.svg' alt='badge-matilha' width={164} height={28} className="cursor-pointer" />
            </div>
        </div>
    )
}