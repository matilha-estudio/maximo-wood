'use client'
import { InspirationSection } from "@/components/carousel/inspirationsSection";
import { Footer } from "@/components/footer/footer";
import { ProductCard } from "@/components/productCard/productCard";
import { H1, H2, H5, ParagraphLarge, SubtitleMediumNormal, SubtitleXL } from "@/components/text/Heading";
import { Button } from "@/components/ui/button";
import { Routes } from "@/enums/routes";
import { MoveRight } from "lucide-react";
import Image from "next/image";


// PAGINA SERÁ REPLICADA PARA THERMOWOOD APENAS ALTERANDO O CONTEÚDO
export default function Hardwood() {
    return (
        <div className="relative text-brand-graphite">

            <section className="flex bg-white w-full justify-center">
                <div className="flex flex-col max-w-screen-2xl px-[72px] pt-[88px] pb-[80px] w-full gap-10">
                    <H1 className="max-w-[924px]">
                        Hardwood
                    </H1>
                </div>
            </section>

            <section className="flex bg-white w-full justify-center">
                <Image
                    src={"/images/hardwood/Banner.png"}
                    alt="logo"
                    width={1440}
                    height={432}
                    className="max-h-[432px] max-w-screen-2xl w-full h-full object-contain"
                />
            </section>

            <section className="flex bg-white w-full justify-center">
                <div className="flex flex-col max-w-screen-2xl px-[72px] items-center py-[120px] w-full gap-10">
                    <H5 className="max-w-[924px]">
                        The Wood Above All Wood
                    </H5>

                    <SubtitleMediumNormal className="text-center">
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
                <div className="flex flex-col max-w-screen-2xl px-[72px] py-[120px] w-full gap-10 border-t border-neutral-1000">
                    <H2 className="max-w-[573px]">
                        How Maximo Hardwoods are Harvested
                    </H2>

                    <ParagraphLarge className="max-w-[638px]">
                        Like you, we want our forests to stand for generations to come. That's why we use the most modern forest management techniques, harvesting only 3-5 aging trees from an area as large as a football field. Watch the video to see how Maximo is tirelessly working to preserve our forests and support the communities that depend on them every day.
                    </ParagraphLarge>
                </div>
            </section>

            <section className="flex bg-white w-full justify-center">
                {/* TODO: AJUSTAR CARROSSEL E MODAL */}
                <div className="flex flex-col justify-center max-w-screen-2xl w-full md:py-[120px] md:px-[72px] gap-12">
                    <div className="flex justify-between w-full">
                        <H2 className="text-brand-graphite uppercase max-w-[531px]">Our Hardwood Products</H2>
                        <Button variant='link' className="flex-col">
                            <a href={Routes.allProducts} className="flex gap-1">
                                All products
                                <MoveRight />
                            </a>
                            <Image src={'/icons/Path-110.png'} alt="Path-110" width={66} height={45} className="place-self-start -mt-4" />
                        </Button>
                    </div>

                    <div className="flex gap-8 w-full justify-center">
                        {
                            Array.from({ length: 3 }).map((_, index) => (
                              <ProductCard key={index} />
                            ))
                        }
                    </div>
                </div>
            </section>

            <section className="flex bg-white w-full justify-center">
                <div className="flex flex-col justify-center max-w-screen-2xl w-full md:py-[120px] md:px-[72px] border-y border-neutral-1000 gap-10">
                    <div className="flex justify-between w-full">
                        <H2 className="text-brand-graphite max-w-[814px] uppercase hover:text-brand-ipe-yellow cursor-pointer transition-colors">
                            Inspiring Maximo Hardwood Designs from Around the World
                        </H2>
                    </div>

                    <div>
                        <InspirationSection />
                    </div>
                </div>
            </section>

            <section className="flex bg-white w-full justify-center">
                <div className="flex justify-center max-w-screen-2xl w-full md:py-[120px] md:px-[72px]">
                    <div className="flex flex-col gap-8 w-1/2">
                        <SubtitleXL>
                            Certified Excellence & Sustainability
                        </SubtitleXL>
                        <ParagraphLarge>
                            Every Maximo Hardwood board is crafted under the strictest quality and sustainability standards, and we take pride in holding some of the industry's most respected certifications.
                        </ParagraphLarge>
                    </div>
                    <div className="flex gap-8">
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
                    <div></div>
                </div>
            </section>

            <section className="flex bg-brand-ipe-yellow/15 w-full justify-center">
                <div className="flex justify-center items-center max-w-screen-2xl w-full md:py-[120px] md:px-[72px] gap-8">
                    <Image src={"/images/wood_draw.png"} alt={"wood_draw"} width={709} height={561} />
                    <div className="flex flex-col items-center gap-8 max-w-[453px] text-center">
                        <H5>
                            Product samples
                        </H5>
                        <ParagraphLarge>
                            Feel the quality of Maximo Wood. Get your sample and discover the difference at your fingertips.
                        </ParagraphLarge>
                        <Button className="w-fit">
                            Order samples
                        </Button>
                    </div>
                </div>
            </section>

            <Footer />
        </div >
    );
}
