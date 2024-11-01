'use client'
import { Footer } from "@/components/footer/footer";
import { CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel"
import ProductFeatureAccordion from "@/components/productAccordions/productFeatureAccordion";
import { H2, H4, H5, H6, ParagraphLarge } from "@/components/text/Heading";
import { Button } from "@/components/ui/button";
import { HardWoodList } from "@/products/HardWoodList";
import { ThermoWoodProducts } from "@/products/ThermowoodList";
import { Product } from "@/products/types";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import ProductDetailsAccordion from "@/components/productAccordions/productDetailsAccordion";
import ProductSamples from "@/components/productSamples";
import { cn } from "@/lib/utils";
import { Carousel } from "@/components/ui/carousel";

export default function ProductDetail({ params }: { params: { id: string } }) {
    const ProductID = params.id
    const LIST_PRODUCTS = HardWoodList.concat(ThermoWoodProducts)

    const [product, setProduct] = useState<Product>()

    const [api, setApi] = useState<CarouselApi>()
    const [current, setCurrent] = useState(0)

    useEffect(() => {
        const filter = LIST_PRODUCTS.find((v) => v.id === Number(ProductID))
        setProduct(filter)
    }, [ProductID])

    useEffect(() => {
        if (!api) {
            return
        }

        setCurrent(api.selectedScrollSnap() + 1)

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1)
        })
    }, [api])

    return (
        <div className="relative">
            {/* TODO: DETAILS */}

            <section className="flex bg-white w-full justify-center text-brand-graphite">
                <div className="flex justify-center max-w-screen-2xl w-full md:py-[120px] md:px-[72px] border-y border-neutral-1000 gap-10">

                    <Carousel setApi={setApi}>
                        <CarouselContent>
                            {/* {
                                product?.images.map((image, index) => ( */}
                            <CarouselItem>
                                <Image
                                    src={"/images/grant-ritchie-FBkrQhnLQoY-unsplash.png"}
                                    alt="logo"
                                    width={592}
                                    height={664}
                                    className="max-h-[664px] max-w-[592px] h-full object-cover"
                                />
                            </CarouselItem>
                            {/* ))
                            } */}
                        </CarouselContent>
                    </Carousel>

                    <div className="lg:w-1/2 flex flex-col gap-10">
                        <div className="flex flex-col gap-6">
                            <H4>
                                {product?.name}
                            </H4>

                            <H6>
                                {product?.dimensions}
                            </H6>
                            <div className="flex flex-col gap-6">
                                <ParagraphLarge>
                                    {product?.description}
                                </ParagraphLarge>
                            </div>
                        </div>

                        <div className="lg:w-1/2">
                            <Button className="gap-1 w-fit bg-white hover:border-none border border-neutral-1000 text-neutral-1000 hover:bg-black hover:text-white">
                                Request samples
                                <MoveRight />
                            </Button>
                        </div>

                        <ProductFeatureAccordion Trigger="Fetaures" Item={String(product?.id)} Content={product ? product?.features : []} />
                        <ProductDetailsAccordion Trigger="Details" Item={String(product?.id)} Content={product?.details} />
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
                                <MoveRight />
                            </div>
                            <Image src={'/icons/Path-110.png'} alt="Path-110" width={66} height={45} className="place-self-start -mt-4" />
                        </Button>
                    </div>

                    {/* <div className="flex gap-8 w-full">
                        {
                            Array.from({ length: 3 }).map((_, index) => (
                                <ProductCard />
                            ))
                        }
                    </div> */}
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

                    <div className="relative flex gap-8 items-center max-h-[189px] max-lg:hidden">
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
                </div>
            </section>

            <ProductSamples />

            <Footer />
        </div>
    )
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