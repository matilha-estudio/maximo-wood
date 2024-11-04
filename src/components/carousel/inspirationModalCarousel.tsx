import Image from "next/image";
import { X } from "lucide-react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import { ReactNode } from "react";
import { DialogClose } from "@radix-ui/react-dialog";

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
                    <Carousel className="flex flex-col max-lg:flex-col-reverse justify-between gap-10">
                        <CarouselContent>
                            {list.map((item, index) => (
                                <CarouselItem key={index} className="max-w-[93%] lg:max-w-[1298px]">
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
                            <div className="flex w-full justify-end items-start lg:pr-9">
                                <DialogClose className="lg:hidden">
                                  <X className="relative carousel-previous text-white" />
                                </DialogClose>
                                <CarouselPrevious className="max-lg:hidden relative carousel-previous text-white" />
                                <CarouselNext className="max-lg:hidden relative -ml-20 carousel-next text-white" />
                            </div>
                        </div>
                    </Carousel>
                </div>
            </DialogContent>
        </Dialog>
    );
}