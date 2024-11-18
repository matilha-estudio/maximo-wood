import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";
import { ProjectsList } from "@/projects/list";
import { ModalInspirationCarousel } from "./inspirationModalCarousel";
import { cn } from "@/lib/utils";

interface InspirationSection {
    filter: 'hardwood' | 'thermowood'
    size?: "full" | "basis"
}

export function FilteredInspirationCarousel({ filter, size }: InspirationSection) {


    const filteredImages = ProjectsList
        .filter(project => project.type === filter && project.imagesCarrousel)
        .flatMap(project => project.imagesCarrousel);

    return (
        <div className="w-full">
            <div className="flex flex-col gap-10">
                <Carousel className="flex flex-col justify-between gap-10">
                    <CarouselContent className="w-full h-full md:max-h-[644px] max-md:max-h-[286px] max-w-[1298px]">
                        {filteredImages.map((item, index) => (
                            <CarouselItem key={index} className={cn(size === 'basis' ? "md:basis-4/5" : "w-full", "carousel-drag")}>
                                <ModalInspirationCarousel
                                    trigger={
                                        <Image
                                            src={item || ''}
                                            alt={item + ' ' + index}
                                            width={1298}
                                            height={644}
                                            className=" h-full object-cover max-h-[644px]"
                                        />
                                    }
                                    list={filteredImages}
                                />
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <div className="flex">
                        <div className="flex w-full justify-end items-start pr-9 max-md:hidden">
                            <CarouselPrevious className="relative carousel-previous" />
                            <CarouselNext className="relative -ml-20 carousel-next" />
                        </div>
                    </div>
                </Carousel>
            </div>
        </div>
    );
}