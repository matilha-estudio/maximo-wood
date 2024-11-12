import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"
import { H4, ParagraphLarge, SubtitleSmallBold } from "../text/Heading"
import { ModalInspirationCarousel } from "./inspirationModalCarousel"

interface IProjectsCarousel {
    title: string
    product: string
    profile: string
    location: string
    description: string
    images: string[]
}

export function ProjectsCarousel(props: IProjectsCarousel) {
    return (
        <div id={props.title} className="flex max-lg:flex-col justify-center items-center py-[120px] px-[72px] max-lg:py-14 max-lg:px-6 w-full border-t border-neutral-1000 ">
            <div className="flex max-lg:flex-col w-full max-w-screen-2xl">
              <div className="flex flex-col text-left gap-6 w-1/2 max-lg:w-full lg:pr-14">
                  <H4>{props.title}</H4>

                  <div className="flex flex-col gap-3">
                      <SubtitleSmallBold className="flex items-center max-lg:items-start gap-3 max-lg:flex-col">
                          Product: <ParagraphLarge>{props.product}</ParagraphLarge>
                      </SubtitleSmallBold>
                      <SubtitleSmallBold className="flex items-center max-lg:items-start gap-3 max-lg:flex-col">
                          Profile: <ParagraphLarge>{props.profile}</ParagraphLarge>
                      </SubtitleSmallBold>
                      <SubtitleSmallBold className="flex items-center max-lg:items-start gap-3 max-lg:flex-col">
                          Location: <ParagraphLarge>{props.location}</ParagraphLarge>
                      </SubtitleSmallBold>
                  </div>

                  <ParagraphLarge >
                      {props.description}
                  </ParagraphLarge>
              </div>

              <div className="w-1/2 max-lg:w-full max-lg:mt-6">
                  <Carousel>
                      <div className="flex w-full justify-end pr-9 max-lg:hidden">
                          <CarouselPrevious className="relative" />
                          <CarouselNext className="relative -ml-20" />
                      </div>
                      <ModalInspirationCarousel
                          trigger={
                              <CarouselContent>
                                  {
                                      props.images && props.images.map((image, index) => (
                                          <CarouselItem key={index} className="max-w-[95%] lg:max-w-[632px] max-lg:max-h-[350px] max-md:max-h-[300px] max-sm:max-h-[200px] lg:max-h-[456px] overflow-hidden">
                                              <Image
                                                  src={image}
                                                  alt={props.title + index}
                                                  width={632}
                                                  height={456}
                                                  className="object-cover w-full h-full lg:max-w-[632px] max-h-[456px]"
                                              />
                                          </CarouselItem>
                                      ))
                                  }
                              </CarouselContent>
                          }
                          list={props.images}
                      />
                  </Carousel>
              </div>
            </div>

        </div>

    )
}