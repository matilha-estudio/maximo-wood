'use client'
import { FilteredInspirationCarousel } from "@/components/carousel/filteredInspirationCarousel";
import { LogosCarousel } from "@/components/carousel/logos";
import { Footer } from "@/components/footer/footer";
import { ProductCard } from "@/components/productCard/productCard";
import ProductSamples from "@/components/productSamples";
import { H1, H2, H3, H5, ParagraphLarge, SubtitleMediumNormal, SubtitleSmall, SubtitleXL } from "@/components/text/Heading";
import { Button } from "@/components/ui/button";
import { ButtonYellowLine } from "@/components/ui/buttonYellowLine";
import { Routes } from "@/enums/routes";
import { cn } from "@/lib/utils";
import { ThermoWoodProducts } from "@/products/ThermowoodList";
import Image from "next/image";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Thermowood() {
    const route = useRouter()

    return (
        <div className="relative text-brand-graphite">

            <section className="flex bg-white w-full justify-center">
                <div className="flex flex-col max-w-screen-2xl px-[72px] pt-[88px] pb-[80px] w-full gap-10 max-lg:px-6 max-lg:py-10">
                    <div className="lg:hidden">
                      <ChevronLeft
                        onClick={() => route.back()}
                        className="cursor-pointer"
                      />
                    </div>
                    <H1 className="max-w-[924px]">
                        Thermo
                    </H1>
                </div>
            </section>

            <section className="flex bg-white w-full justify-center max-md:h-56">
                <Image
                    src={"/images/thermowood/Banner.png"}
                    alt="logo"
                    width={1440}
                    height={432}
                    className="max-h-[432px] max-w-screen-2xl w-full h-full object-contain max-md:object-fill"
                />
            </section>

            <section className="flex bg-white w-full justify-center">
                <div className="flex flex-col max-w-screen-2xl w-full gap-10 lg:px-[72px] lg:py-[120px] lg:items-center max-lg:px-6 max-lg:py-14">
                    <H5 className="max-w-[924px]">
                        We’ve Forever Changed Wood Using only Heat and Steam
                    </H5>

                    <SubtitleMediumNormal className="lg:text-center max-md:text-[16px] max-md:leading-7">
                        Sometimes, less is more. After years of research, it’s clear that you don’t need to add anything to wood to make it better—you need to remove it. By extracting the moisture and sugars through our patented process, we’ve created wood that’s lighter and no longer attractive to bugs. It’s sustainable, organic, stable, and perfect for any application, indoors or out.
                    </SubtitleMediumNormal>

                    <Button>
                        <a href={Routes.allProducts}>
                            Explore products
                        </a>
                    </Button>
                </div>
            </section>

            <section className="flex bg-white w-full justify-center border-t border-neutral-1000">
                <div className="flex flex-col max-w-screen-2xl lg:px-[72px] lg:py-[120px] w-full gap-10  max-lg:border-b ">
                    <H2 className="max-w-[560px] max-lg:px-6 max-lg:pb-6 max-lg:pt-14">
                        How Maximo Thermo is made
                    </H2>

                    <div className="max-lg:flex max-lg:flex-col-reverse">
                      <div className="max-w-[744px]">
                        <ParagraphLarge className="max-w-[744px] max-lg:px-6 max-lg:py-14">
                            We believe in giving wood a second chance. When species like Ayous and Radiata aren’t lucky enough to be born as resilient as our hardwoods, we do that for them. Using heat and steam alone, we forever alter their structure at the cellular level, making them more reliable and durable than ever before.
                        </ParagraphLarge>
                      </div>

                      <video
                          src="https://maximo-wood-s3-videos.s3.us-east-1.amazonaws.com/medias/How-Thermowood-is-Made-Temporary.webm"
                          className="aspect-video w-full mt-10"
                          controls
                      >
                          How-Thermowood-is-Made-Temporary
                      </video>
                    </div>
                </div>
            </section>

            <section className="flex w-full justify-center">
                <div className="flex max-w-screen-2xl px-[72px] py-[60px] w-full lg:gap-16 max-lg:px-6 max-lg:py-14 max-lg:flex-col">
                    <div className="lg:max-w-[400px] max-lg:mb-10 flex w-full justify-center ">
                        <H2 className="uppercase max-lg:hidden">
                            Why Choose Maximo Thermo?
                        </H2>
                        <H3 className="uppercase lg:hidden">
                            Why Choose Maximo Thermo?
                        </H3>
                    </div>

                    <div className="flex w-full gap-16 lg:flex-wrap max-lg:flex-col ">
                        <div className="flex flex-col gap-4 max-w-[338px]">
                            <SubtitleSmall>
                                Built to Last
                            </SubtitleSmall>
                            <ParagraphLarge>
                                Maximo’s patented thermal modification process changes the wood at the cellular level, dramatically enhancing its natural resilience—backed by a 20-year warranty.
                            </ParagraphLarge>
                        </div>
                        <div className="flex flex-col gap-4 max-w-[338px]">
                            <SubtitleSmall>
                                Lightweight & Easy to Install
                            </SubtitleSmall>
                            <ParagraphLarge>
                                Maximo Thermo’s lightweight nature makes it easier to handle and install, reducing labor time and effort.
                            </ParagraphLarge>
                        </div>
                        <div className="flex flex-col gap-4 max-w-[338px]">
                            <SubtitleSmall>
                                Deep Color & Rich Finish
                            </SubtitleSmall>
                            <ParagraphLarge>
                                Our patented process not only enhances the wood’s durability but also brings out deep, natural color tones that elevate the look of any space.
                            </ParagraphLarge>
                        </div>
                        <div className="flex flex-col gap-4 max-w-[338px]">
                            <SubtitleSmall>
                                100% Organic
                            </SubtitleSmall>
                            <ParagraphLarge>
                                Made from fast-growing, sustainably sourced trees without chemicals, Maximo Thermo is organic, durable for outdoor use, and safe indoors, while also storing carbon for decades.
                            </ParagraphLarge>
                        </div>
                    </div>
                </div>
            </section>

            <section className="flex bg-white w-full justify-center border-t border-neutral-1000">
                <div className="flex flex-col justify-center max-w-screen-2xl  w-full md:py-[120px] md:px-[72px] gap-12 max-lg:px-6 max-lg:py-14">
                    <div className="flex justify-between w-full max-lg:justify-center max-md:justify-between">
                        <H2 className="text-brand-graphite uppercase max-sm:text-[24px] max-sm:leading-[33.6px] max-sm:font-extrabold max-w-screen-sm">
                            Our Thermo Products
                        </H2>
                        <div className="max-lg:hidden">
                          <ButtonYellowLine title="All products" href={Routes.allProducts} />
                        </div>

                    </div>

                    <div className="flex gap-8 w-full max-lg:flex-col max-lg:items-start">
                        {
                            ThermoWoodProducts.slice(0, 3).map((product, index) => (
                                <ProductCard key={index} product={product} />
                            ))
                        }
                    </div>

                    <div className="flex justify-center lg:hidden">
                        <ButtonYellowLine title="All products" href={Routes.allProducts} />
                    </div>
                </div>
            </section>

            <section className="flex bg-white w-full justify-center border-y border-neutral-1000">
                <div className="flex flex-col justify-center max-w-screen-2xl w-full md:py-[120px] md:px-[72px]  gap-10">
                    <div className="flex justify-between w-full max-md:px-6 max-md:pt-14" onClick={() => route.push(Routes.allProjects)}>
                        <H2 className="text-brand-graphite max-w-[814px] uppercase hover:text-brand-ipe-yellow cursor-pointer transition-colors">
                            Inspiring Maximo Thermo Designs from Around the World
                        </H2>
                    </div>

                    <div className="max-md:pl-6 max-md:pb-14">
                        <FilteredInspirationCarousel filter="thermowood" size="basis" />
                    </div>
                </div>
            </section>

            <section className="flex bg-white w-full justify-center">
                <div className="flex max-md:flex-col flex-col justify-center max-w-screen-2xl w-full md:py-[120px] md:px-[72px] max-md:px-6 max-md:py-14 max-md:gap-10">
                    <div className="flex flex-col gap-8 lg:w-1/2 max-lg:w-full">
                        <SubtitleXL className="uppercase">
                            Certified Excellence & Sustainability
                        </SubtitleXL>
                        <ParagraphLarge>
                            With products crafted under the authentic Thermowood process, Maximo Thermo ensures the highest standards of quality and sustainability.
                        </ParagraphLarge>
                    </div>

                    {/* Desktop */}
                    <div className="relative flex gap-8 items-center max-h-[189px] max-lg:hidden lg:mt-20">
                        {listLogos.map((item, index) => (
                            <div key={index} className="flex items-center justify-center max-h-[189px] max-w-[189px] overflow-hidden">
                                <Image
                                    src={item.src}
                                    alt={item.alt}
                                    width={item.width}
                                    height={item.height}
                                    className={cn("object-contain h-full max-h-[189px] max-w-[189px]")}
                                />
                            </div>
                        ))}
                    </div>

                    {/* Mobile */}
                    <div className="relative flex gap-1 items-center w-full lg:hidden">
                        <LogosCarousel images={listLogos} />
                    </div>
                </div>
            </section>

            <ProductSamples />

            <Footer />
        </div >
    );
}

const listLogos = [
    {
        src: "/logos/FSC_C116010_Promotional_with_text_Portrait_BlackOnWhite_r_2Y5lcA 1.png",
        alt: "FSC_C116010",
        width: 189,
        height: 189
    },
    {
        src: "/logos/UNICONSULT_LOGO-_1_ 1.png",
        alt: "UNICONSULT_LOGO",
        width: 189,
        height: 189
    },
    {
        src: "/logos/PEFC_LOGO.png",
        alt: "PEFC_LOGO",
        width: 189,
        height: 189
    },
    {
        src: "/logos/EPD_LOGO1.png",
        alt: "EPD_LOGO1",
        width: 189,
        height: 189
    },
    {
        src: "/logos/USGBC_LOGO1.png",
        alt: "USGBC_LOGO1",
        width: 189,
        height: 189
    },
    {
        src: "/logos/TIMBER-TRUST_LOGO.png",
        alt: "TIMBER-TRUST_LOGO",
        width: 189,
        height: 189
    },
]