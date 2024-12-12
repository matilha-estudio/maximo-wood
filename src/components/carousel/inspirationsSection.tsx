import Image from "next/image";
import { SubtitleSmall } from "../text/Heading";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";
import { ProjectsList } from "@/projects/list";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Routes } from "@/enums/routes";
import { ModalInspirationCarousel } from "./inspirationModalCarousel";
import { cn } from "@/lib/utils";
import { type CarouselApi } from "@/components/ui/carousel"
import { InspirationCarrouselListImagesData } from "@/services/models";

interface InspirationSection {
    filter?: 'hardwood' | 'thermowood'
    showTitle?: boolean
    showControls?: boolean,
    size?: "full" | "basis",
    list?: InspirationCarrouselListImagesData[]
}

export function InspirationSection({ filter, showTitle, size, showControls = true, list = [] }: InspirationSection) {
    const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

    const [api, setApi] = useState<CarouselApi>()

    const filteredList =  list || (filter ? ProjectsList.filter((v) => v.type === filter) : ProjectsList);

    useEffect(() => {
        if (!api) {
            return
        }

        if (api.selectedScrollSnap() > filteredList.length || api.selectedScrollSnap() < 0) {
            return
        }

        setCurrentImageIndex(api.selectedScrollSnap())

        api.on("select", () => {
            setCurrentImageIndex(api.selectedScrollSnap())
        })
    }, [api]);

    return (
        <div className="w-full">
            <div className="flex flex-col gap-10">
                <Carousel setApi={setApi} className="flex flex-col justify-between gap-10">
                    <CarouselContent className="w-full h-full max-h-[644px] max-w-[1298px] ">
                        {filteredList.map((item, index) => (
                            <CarouselItem key={index} className={cn(size === 'basis' ? "basis-4/5" : "w-full", "carousel-drag")}>
                                <ModalInspirationCarousel
                                    trigger={
                                        <Image
                                            src={item?.images[0].image}
                                            alt={item.title + ' ' + index}
                                            width={1298}
                                            height={644}
                                            className="h-full object-cover max-h-[644px] max-lg:max-h-[286px]"
                                        />
                                    }
                                    list={item?.images.map(item => item.image)}
                                />
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <div className="flex">
                        {
                            showTitle && (
                                <Link href={Routes.allProjects + `#${filteredList[currentImageIndex]?.title}`} className="w-full">
                                    <div className="border-t w-full border-neutral-1000 py-4 hover:text-brand-ipe-yellow cursor-pointer transition-colors">
                                        <SubtitleSmall>
                                            {filteredList[currentImageIndex]?.title}
                                        </SubtitleSmall>
                                    </div>
                                </Link>
                            )
                        }
                        { 
                          showControls && (
                            <div className="flex w-full justify-end items-start pr-9 max-lg:hidden">
                                <CarouselPrevious className="relative carousel-previous" />
                                <CarouselNext className="relative -ml-20 carousel-next" />
                            </div>
                          )
                        }
                    </div>
                </Carousel>
            </div>
        </div>
    );
}