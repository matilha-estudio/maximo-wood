import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"
import Image from "next/image"

interface IImagesProps {
  src: string,
  alt: string,
  width: number,
  height: number
}

interface ILogosCarousel {
  images: IImagesProps[]
}

export function LogosCarousel(props: ILogosCarousel) {
    return (
      <div className="max-h-[120px] w-full">
        <Carousel>
          <CarouselContent>
            {
              props.images && props.images.map((image, index) => (
                <CarouselItem key={index} className="basis-1/3">
                  <Image 
                    src={image.src} 
                    alt={image.alt} 
                    width={image.width} 
                    height={image.height} 
                    className="object-contain h-[120px]" 
                  />
                </CarouselItem>
              ))
            }
          </CarouselContent>
        </Carousel>
      </div>
    )
}