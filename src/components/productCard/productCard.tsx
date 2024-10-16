import Image from "next/image";
import { ParagraphMedium, SubtitleSmall } from "../text/Heading";
import { Button } from "../ui/button";

export function ProductCard() {
    return (
        <div className="flex flex-col max-w-[412px] gap-4">
            <div>
                <Image src={'/images/Dime-19B.png'} alt="card" width={412} height={400} />
            </div>
            <div className="flex flex-col">
                <SubtitleSmall>
                    Product name
                </SubtitleSmall>
                <ParagraphMedium>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.
                </ParagraphMedium>
            </div>
            <Button variant='link' className="text-brand-ipe-yellow hover:text-neutral-1000 w-fit p-0">
                Explore
            </Button>
        </div>
    )
}