import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import { ReactNode } from "react";

interface ModalInspirationCarouselProps {
    trigger: ReactNode;
    list: string[];
}

export function ModalInspirationCarousel({ trigger, list }: ModalInspirationCarouselProps): JSX.Element {
    return (
        <Dialog>
            <DialogTrigger className="w-full h-full">{trigger}</DialogTrigger>
            <DialogContent className="bg-transparent border-none w-full h-full max-h-[644px] max-w-[1298px]">
                <div className="flex flex-col gap-10">
                    <Carousel className="flex flex-col justify-between gap-10">
                        <CarouselContent>
                            {list.map((item, index) => (
                                <CarouselItem key={index}>
                                    <Image
                                        src={item}
                                        alt={`Inspiration image ${index}`}
                                        width={1298}
                                        height={644}
                                        className="w-full h-full object-cover max-h-[644px] max-w-[1298px]"
                                        priority
                                    />
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <div className="flex">
                            <div className="flex w-full justify-end items-start pr-9">
                                <CarouselPrevious className="relative carousel-previous text-white" />
                                <CarouselNext className="relative -ml-20 carousel-next text-white" />
                            </div>
                        </div>
                    </Carousel>
                </div>
            </DialogContent>
        </Dialog>
    );
}