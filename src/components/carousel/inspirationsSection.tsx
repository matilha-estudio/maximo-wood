import Image from "next/image";
import { SubtitleSmall } from "../text/Heading";
import { Button } from "../ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function InspirationSection() {
    return (
        <div>
            <div className="flex flex-col gap-10">
                <Image src={"/images/image 95.png"} alt={"inspiration"} width={1298} height={644} className="w-full max-h-[644px]" />
                <div className="flex justify-between">
                    <div className="border-t border-neutral-1000 py-4">
                        <SubtitleSmall>
                            Maximo Hardwood Garapa | Ourania 231
                        </SubtitleSmall>
                    </div>
                    <div className="flex gap-4">
                        <Button variant='ghost' size='icon'>
                            <ChevronLeft className="size-10" />
                        </Button>
                        <Button variant='ghost' size='icon'>
                            <ChevronRight className="size-10" />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}