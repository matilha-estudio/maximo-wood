import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"
import Image from "next/image"

interface IImagesProps {
  image: string
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
                    src={image.image} 
                    alt={`logo_${index}`} 
                    width={189} 
                    height={189} 
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