import { Button } from "./button";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface IButtonYellowLine {
    title: string
    href: string
}

export function ButtonYellowLine({ href, title }: IButtonYellowLine) {
    const route = useRouter();

    return (
        <Button onClick={() => route.push(href)} variant='link' className="flex-col group">
            <div className="flex gap-1">
                {title}
                <MoveRight />
            </div>
            <Image
                src={'/icons/Path-110.png'}
                alt="Path-110"
                width={66}
                height={45}
                className="place-self-start -mt-4 transition-transform duration-300 ease-in-out origin-left group-hover:scale-x-50"
            />
        </Button>
    )
}