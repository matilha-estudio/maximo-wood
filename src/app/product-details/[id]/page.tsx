'use client'
import { InspirationSection } from "@/components/carousel/inspirationsSection";
import { Footer } from "@/components/footer/footer";
import Navbar from "@/components/navbar/navbar";
import { ProductCard } from "@/components/productCard/productCard";
import { H2, H5, ParagraphLarge } from "@/components/text/Heading";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function ProductDetail() {
    return (
        <div className="relative">
            {/* TODO: DETAILS */}

            <section className="flex bg-white w-full justify-center">
                <div className="flex flex-col justify-center max-w-screen-2xl w-full md:py-[120px] md:px-[72px] border-y border-neutral-1000 gap-10">
                    <div className="flex justify-between w-full">
                        <H2 className="text-brand-graphite max-w-[814px] uppercase hover:text-brand-ipe-yellow cursor-pointer transition-colors">
                            Inspiration for architects and designers
                        </H2>

                        <Button variant='link' className="flex-col">
                            <div className="flex gap-1">
                                All projects
                                <ArrowRight />
                            </div>
                            <Image src={'/icons/Path-110.png'} alt="Path-110" width={66} height={45} className="place-self-start -mt-4" />
                        </Button>
                    </div>

                    <div>
                        <InspirationSection />

                    </div>
                </div>
            </section>

            <section className="flex bg-white w-full justify-center">
                <div className="flex flex-col justify-center max-w-screen-2xl w-full md:py-[120px] md:px-[174px] gap-12">
                    <div className="flex justify-between w-full">
                        <H2 className="text-brand-graphite uppercase">Releated products</H2>
                        <Button variant='link' className="flex-col">
                            <div className="flex gap-1">
                                All products
                                <ArrowRight />
                            </div>
                            <Image src={'/icons/Path-110.png'} alt="Path-110" width={66} height={45} className="place-self-start -mt-4" />
                        </Button>
                    </div>

                    <div className="flex gap-8 w-full">
                        {
                            Array.from({ length: 3 }).map((_, index) => (
                                <ProductCard />
                            ))
                        }
                    </div>
                </div>
            </section>

            <section className="flex bg-white w-full justify-center">
                <div className="flex flex-col justify-center items-center max-w-screen-2xl w-full md:py-[120px] md:px-[72px] gap-20">
                    <div className="flex gap-[78px]">
                        <Image src={"/images/Rectangle12.png"} alt={"Rectangle12"} width={365} height={416} className="h-full" />
                        <div className="relative flex flex-col gap-8 text-brand-graphite">
                            <H2 className="max-w-[80%]">
                                Rooted in Responsibility: Our Commitment to Sustainable Wood
                            </H2>
                            <ParagraphLarge>
                                Sustainability is at the heart of everything we do at Maximo Wood. From sourcing responsibly managed woodlands to supporting communities in Brazil that depend on forests for their livelihoods, we’re committed to making a positive impact. Our products are backed by certifications like FSC and PEFC, ensuring our wood is sourced with care for both people and the planet.
                            </ParagraphLarge>
                        </div>
                    </div>

                    <div className="relative flex gap-8 items-center max-h-[189px]">
                        <div className="max-h-[189px] max-w-[189px]">
                            <Image src={"/logos/FSC_C116010_Promotional_with_text_Portrait_BlackOnWhite_r_2Y5lcA 1.png"} alt={"FSC_C116010"} width={189} height={189} className="object-contain h-full" />
                        </div>
                        <div className="max-h-[189px] max-w-[189px]">
                            <Image src={"/logos/UNICONSULT_LOGO-_1_ 1.png"} alt={"UNICONSULT_LOGO"} width={189} height={189} className="object-contain h-full" />
                        </div>
                        <div className="max-h-[189px] max-w-[189px]">
                            <Image src={"/logos/PEFC_LOGO.png"} alt={"PEFC_LOGO"} width={189} height={189} className="object-contain h-full" />
                        </div>
                        <div className="max-h-[189px] max-w-[189px]">
                            <Image src={"/logos/EPD_LOGO1.png"} alt={"EPD_LOGO1"} width={189} height={189} className="object-contain h-full" />
                        </div>
                        <div className="max-h-[189px] max-w-[189px]">
                            <Image src={"/logos/USGBC_LOGO1.png"} alt={"USGBC_LOGO1"} width={189} height={189} className="object-contain h-full" />
                        </div>
                        <div className="max-h-[189px] max-w-[189px]">
                            <Image src={"/logos/TIMBER-TRUST_LOGO.png"} alt={"TIMBER-TRUST_LOGO"} width={189} height={189} className="object-contain h-full" />
                        </div>
                    </div>
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
        </div>
    )
}