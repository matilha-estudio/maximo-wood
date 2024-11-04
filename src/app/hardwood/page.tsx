'use client'
import { FilteredInspirationCarousel } from "@/components/carousel/filteredInspirationCarousel";
import { Footer } from "@/components/footer/footer";
import { ProductCard } from "@/components/productCard/productCard";
import { H1, H2, H3, H5, ParagraphLarge, SubtitleMediumNormal, SubtitleSmall, SubtitleXL } from "@/components/text/Heading";
import { Button } from "@/components/ui/button";
import { ButtonYellowLine } from "@/components/ui/buttonYellowLine";
import { Routes } from "@/enums/routes";
import { HardWoodList } from "@/products/HardWoodList";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ChevronLeft } from "lucide-react";
import ProductSamples from "@/components/productSamples";
import { LogosCarousel } from "@/components/carousel/logos";


// PAGINA SERÁ REPLICADA PARA THERMOWOOD APENAS ALTERANDO O CONTEÚDO
export default function Hardwood() {
    const route = useRouter()

    return (
        <div className="relative text-brand-graphite">

            <section className="flex bg-white w-full justify-center">
                <div className="flex flex-col max-w-screen-2xl lg:px-[72px] lg:pt-[88px] lg:pb-[80px] w-full gap-10 max-lg:px-6 max-lg:py-10">
                    <div className="lg:hidden">
                      <ChevronLeft
                        onClick={() => route.back()}
                        className="cursor-pointer"
                      />
                    </div>
                    <H1 className="max-w-[924px]">
                        Hardwood
                    </H1>
                </div>
            </section>

            <section className="flex bg-white w-full justify-center max-md:h-56">
                <Image
                    src={"/images/hardwood/Banner.png"}
                    alt="logo"
                    width={1440}
                    height={432}
                    className="max-h-[432px] max-w-screen-2xl w-full h-full object-contain max-md:object-fill"
                />
            </section>

            <section className="flex bg-white w-full justify-center">
                <div className="flex flex-col max-w-screen-2xl w-full gap-10 lg:px-[72px] lg:py-[120px] lg:items-center max-lg:px-6 max-lg:py-14">
                    <H5 className="max-w-[924px]">
                        The Wood Above All Wood
                    </H5>

                    <SubtitleMediumNormal className="lg:text-center max-md:text-[16px] max-md:leading-7">
                        Maximo Hardwoods aren't just any lumber; they are handpicked, architectural-grade boards that stand above the rest. Each piece is kiln-dried in chambers that precisely regulate moisture levels, ensuring it's perfectly suited for both indoor and outdoor use. Sustainable. Stable. Maximo.
                    </SubtitleMediumNormal>

                    <Button>
                        <a href={Routes.allProducts}>
                            Explore products
                        </a>
                    </Button>
                </div>
            </section>

            <section className="flex bg-white w-full justify-center">
                <div className="flex flex-col max-w-screen-2xl lg:px-[72px] lg:py-[120px] w-full gap-10 border-t max-lg:border-b border-neutral-1000">
                    <H2 className="max-w-[573px] max-lg:px-6 max-lg:pb-6 max-lg:pt-14">
                        How Maximo Hardwoods are Harvested
                    </H2>

                    <div className="max-lg:flex max-lg:flex-col-reverse">
                      <ParagraphLarge className="max-w-[744px] max-lg:px-6 max-lg:py-14">
                          Like you, we want our forests to stand for generations to come. That's why we use the most modern forest management techniques, harvesting only 3-5 aging trees from an area as large as a football field. Watch the video to see how Maximo is tirelessly working to preserve our forests and support the communities that depend on them every day.
                      </ParagraphLarge>

                      <video
                          src="/medias/Sustainability-Video-Presentation-2024-MAXIMO-V5.webm"
                          className="aspect-video w-full lg:mt-10"
                          controls
                      >
                          Sustainability-Video-Presentation-2024-MAXIMO-V5
                      </video>
                    </div>
                </div>
            </section>

            <section className="flex w-full justify-center">
                <div className="flex max-w-screen-2xl px-[72px] py-[60px] w-full lg:gap-16 max-lg:px-6 max-lg:py-14 max-lg:flex-col">
                    <div className="lg:max-w-[521px] max-lg:mb-10 flex w-full justify-center max-lg:justify-start ">
                        <H2 className="uppercase max-lg:hidden">
                            Why Choose Maximo Hardwood?
                        </H2>
                        <H3 className="uppercase lg:hidden">
                            Why Choose Maximo Hardwood?
                        </H3>
                    </div>

                    <div className="flex w-full gap-16 lg:flex-wrap max-lg:flex-col ">
                        <div className="flex flex-col gap-4 lg:max-w-[338px]">
                            <SubtitleSmall>
                                100% Organic, 50% Trapped Carbon
                            </SubtitleSmall>
                            <ParagraphLarge>
                                Our Maximo Hardwoods are as organic as it gets. Half of the weight of every board consists of carbon trapped from the atmosphere, contributing positively to the environment.
                            </ParagraphLarge>
                        </div>
                        <div className="flex flex-col gap-4 lg:max-w-[338px]">
                            <SubtitleSmall>
                                Generational Durability
                            </SubtitleSmall>
                            <ParagraphLarge>
                                Maximo Hardwoods, like our Maximo Ipe, are naturally dense and resistant, built to last for generations.
                            </ParagraphLarge>
                        </div>
                        <div className="flex flex-col gap-4 lg:max-w-[338px]">
                            <SubtitleSmall>
                                Unmatched Authenticity
                            </SubtitleSmall>
                            <ParagraphLarge>
                                Our one-of-a-kind boards showcase the natural beauty and density that no other material can replicate.
                            </ParagraphLarge>
                        </div>
                        <div className="flex flex-col gap-4 lg:max-w-[338px]">
                            <SubtitleSmall>
                                Kiln-Dried Precision
                            </SubtitleSmall>
                            <ParagraphLarge>
                                Every board is kiln-dried to stabilize the wood, making it durable and reliable for any application.
                            </ParagraphLarge>
                        </div>
                    </div>
                </div>
            </section>

            <section className="flex bg-white w-full justify-center">
                <div className="flex flex-col justify-center max-w-screen-2xl w-full md:py-[120px] md:px-[72px] gap-12 max-lg:px-6 max-lg:py-14">
                    <div className="flex justify-between w-full max-lg:justify-center max-md:justify-between">
                        <H2 className="text-brand-graphite uppercase max-sm:text-[24px] max-sm:leading-[33.6px] max-sm:font-extrabold max-w-screen-sm">
                            Our Hardwood Products
                        </H2>

                        <div className="max-lg:hidden">
                          <ButtonYellowLine title="All products" href={Routes.allProducts} />
                        </div>

                    </div>

                    <div className="flex gap-8 w-full max-lg:flex-col max-lg:items-center">
                        {
                            HardWoodList.slice(0, 3).map((product, index) => (
                                <ProductCard key={index} product={product} />
                            ))
                        }
                    </div>
                    <div className="flex justify-center lg:hidden">
                        <ButtonYellowLine title="All products" href={Routes.allProducts} />
                    </div>
                </div>
            </section>

            <section className="flex bg-white w-full justify-center">
                <div className="flex flex-col justify-center max-w-screen-2xl w-full md:py-[120px] md:px-[72px] border-y border-neutral-1000 gap-10">
                    <div className="flex justify-between w-full max-md:px-6 max-md:pt-14" onClick={() => route.push(Routes.allProjects)}>
                        <H2 className="text-brand-graphite max-w-[814px] uppercase hover:text-brand-ipe-yellow cursor-pointer transition-colors">
                            Inspiring Maximo Hardwood Designs from Around the World
                        </H2>
                    </div>

                    <div className="max-md:pl-6 max-md:pb-14">
                        <FilteredInspirationCarousel filter="hardwood" size="basis" />
                    </div>
                </div>
            </section>

            <section className="flex bg-white w-full justify-center">
                <div className="flex max-md:flex-col justify-center max-w-screen-2xl w-full md:py-[120px] md:px-[72px] max-md:px-6 max-md:py-14 max-md:gap-10">
                    <div className="flex flex-col gap-8 lg:w-1/2 max-lg:w-full">
                        <SubtitleXL className="uppercase">
                            Certified Excellence & Sustainability
                        </SubtitleXL>
                        <ParagraphLarge>
                            Every Maximo Hardwood board is crafted under the strictest quality and sustainability standards, and we take pride in holding some of the industry's most respected certifications.
                        </ParagraphLarge>
                    </div>
                    <div className="flex gap-8 max-lg:hidden">
                        <div className="max-h-[189px] max-w-[189px]">
                            <Image src={"/logos/FSC_C116010_Promotional_with_text_Portrait_BlackOnWhite_r_2Y5lcA 1.png"} alt={"FSC_C116010"} width={189} height={189} className="object-contain h-full" />
                        </div>
                        <div className="max-h-[189px] max-w-[189px]">
                            <Image src={"/logos/UNICONSULT_LOGO-_1_ 1.png"} alt={"UNICONSULT_LOGO"} width={189} height={189} className="object-contain h-full" />
                        </div>
                        <div className="max-h-[189px] max-w-[189px]">
                            <Image src={"/logos/TIMBER-TRUST_LOGO.png"} alt={"TIMBER-TRUST_LOGO"} width={189} height={189} className="object-contain h-full" />
                        </div>
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