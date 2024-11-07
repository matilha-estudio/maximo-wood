import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"
import Image from "next/image"
import { H5, ParagraphMedium } from "../text/Heading"

interface IImagesProps {
  src: string,
  alt: string,
  width: number,
  height: number,
  title: string,
  subTitle: string
}

interface IIndustryLeadersCarousel {
  images: IImagesProps[]
}

export function IndustryLeadersCarousel(props: IIndustryLeadersCarousel) {
    return (
      <div className="w-full">
        <Carousel>
          <CarouselContent>
            {
              props.images && props.images.map((image, index) => (
                <CarouselItem key={index} className="basis-1/1">
                  <div className="flex flex-col gap-8 max-w-[290px]">
                    <Image 
                      src={image.src} 
                      alt={image.alt}
                      width={image.width} 
                      height={image.height} 
                      className="object-contain" 
                    />
                    <div>
                      <H5>
                        {image.title}
                      </H5>
                      <ParagraphMedium>
                        {image.subTitle}
                      </ParagraphMedium>
                    </div>
                  </div>
                </CarouselItem>
              ))
            }
          </CarouselContent>
        </Carousel>
      </div>
    )
}