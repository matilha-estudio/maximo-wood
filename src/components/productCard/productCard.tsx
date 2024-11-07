import Image from "next/image";
import { Caption, ParagraphMedium, SubtitleSmall, SubtitleSmallBold, TextLink } from "../text/Heading";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { Product } from "@/products/types";
import { MoveRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { Routes } from "@/enums/routes";

interface ITag {
    type: "material" | "application"
    name: string
}

interface IProductCard {
    product: Product
}

export function ProductCard(props: IProductCard) {

    const router = useRouter()

    function Redirect() {
        router.push(`${Routes.productDetails}/${props.product.id}`)
    }

    const TAG = (tag: ITag) => {
        return (
            <div className={cn("flex border border-brand-graphite p-1", tag?.type === 'application' ? "text-brand-graphite" : "bg-neutral-1000 text-white")}>
                <Caption className="leading-none">
                    {tag?.name}
                </Caption>
            </div>
        )
    }

    return (
        props.product ?
            <div className="relative flex flex-col md:max-w-[320px] xl:max-w-[412px] max-md:max-w-[295px] w-full gap-4">
                <div className="relative group cursor-pointer w-full h-full md:max-w-[320px] xl:max-w-[412px] max-md:max-w-[295px] md:max-h-[400px] max-md:max-h-[350px]" onClick={Redirect}>
                    <div className="w-full h-full absolute group-hover:bg-neutral-1000/15 transition-colors" />
                    <div className="absolute flex flex-wrap gap-4 w-full p-4 top-0">
                        <TAG type="material" name={props.product?.tag?.material} />
                        {
                            props.product?.tag?.application && props.product?.tag?.application?.map((application, index) => (
                                <TAG key={index + application} type="application" name={application} />
                            ))
                        }
                    </div>
                    <Image src={props.product.images[0]} alt="card" width={412} height={400} className="object-cover group-hover:hidden flex md:max-w-[320px] xl:max-w-[412px] max-md:max-w-[295px] md:max-h-[400px] max-md:max-h-[350px] max-lg:h-[250px] lg:h-[400px]" />
                    <Image src={props.product.images[1]} alt="card" width={412} height={400} className="object-cover hidden group-hover:flex md:max-w-[320px] xl:max-w-[412px] max-md:max-w-[295px] md:max-h-[400px] max-md:max-h-[350px] max-lg:h-[250px] lg:h-[400px]" />
                </div>
                <div className="flex flex-col gap-2">
                    <SubtitleSmall>
                        {props.product?.name}
                    </SubtitleSmall>
                    <SubtitleSmallBold>
                        {props.product?.dimensions}
                    </SubtitleSmallBold>
                    <ParagraphMedium className="line-clamp-3">
                        {props.product?.description}
                    </ParagraphMedium>
                </div>
                <Button variant='link' className="text-brand-gold hover:text-neutral-1000 w-fit p-0 gap-1 justify-center max-lg:hidden" onClick={Redirect}>
                    <TextLink>
                        Explore
                    </TextLink>
                    <MoveRight className="h-5 w-5" />
                </Button>
            </div> : null
    )
}