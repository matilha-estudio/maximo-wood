'use client'
import { Footer } from "@/components/footer/footer";
import { CarouselContent, CarouselItem, CarouselNextArrow, CarouselPreviousArrow, type CarouselApi } from "@/components/ui/carousel"
import ProductFeatureAccordion from "@/components/productAccordions/productFeatureAccordion";
import { H2, H4, H6, ParagraphLarge } from "@/components/text/Heading";
import { Button } from "@/components/ui/button";
import { HardWoodList } from "@/products/HardWoodList";
import { ThermoWoodProducts } from "@/products/ThermowoodList";
import { Product } from "@/products/types";
import { ChevronLeft, MoveRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import ProductDetailsAccordion from "@/components/productAccordions/productDetailsAccordion";
import ProductSamples from "@/components/productSamples";
import { cn } from "@/lib/utils";
import { Carousel } from "@/components/ui/carousel";
import { ProductCard } from "@/components/productCard/productCard";
import { useRouter } from "next/navigation";
import { LogosCarousel } from "@/components/carousel/logos";
import { RelatedProducts } from "@/components/carousel/relatedProducts";
import { Routes } from "@/enums/routes";
import Link from "next/link";
import { ButtonYellowLine } from "@/components/ui/buttonYellowLine";
import { InspirationSection } from "@/components/carousel/inspirationsSection";
import { Accordion } from "@/components/ui/accordion";

export default function ProductDetail({ params }: { params: { id: string } }) {
    const { back, push } = useRouter();
    const ProductID = params.id
    const LIST_PRODUCTS = HardWoodList.concat(ThermoWoodProducts)

    const [releatedProducts, setReleatedProducts] = useState<Product[]>()
    const [product, setProduct] = useState<Product>()

    const [api, setApi] = useState<CarouselApi>()
    const [current, setCurrent] = useState(0)

    useEffect(() => {
        if (ProductID) {
            const filter = LIST_PRODUCTS.find((v) => v.id === Number(ProductID))
            setProduct(filter)
        }
    }, [ProductID])

    useEffect(() => {
        if (product) {
            const releated = LIST_PRODUCTS.filter((v) => v.details.species === product?.details.species)
            setReleatedProducts(releated)
        }
    }, [product])

    useEffect(() => {
        if (!api) {
            return
        }

        setCurrent(api.selectedScrollSnap())

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap())
        })
    }, [api])

    return (
        <div className="relative">
            <section className="flex bg-white w-full justify-center text-brand-graphite border-b border-neutral-1000">
                <div className="flex max-md:flex-col justify-center max-w-screen-2xl w-full md:py-[120px] md:px-[72px] max-md:px-6 max-md:pt-10 max-md:pb-14  gap-10">
                    <div className="md:hidden">
                      <ChevronLeft
                        onClick={() => back()}
                        className="cursor-pointer"
                      />
                    </div>
                    <div className="flex flex-col gap-4">
                        <Carousel setApi={setApi} className="max-w-[592px] max-h-[664px]">
                            <CarouselContent>
                                {
                                    product?.images.map((image, index) => (
                                        <CarouselItem key={index}>
                                            <Image
                                                key={index}
                                                src={image}
                                                alt={"product"}
                                                width={592}
                                                height={664}
                                                className="max-h-[664px] max-w-[592px] h-full w-full object-cover"
                                            />
                                        </CarouselItem>
                                    ))
                                }
                            </CarouselContent>
                            {current + 1 != product?.images.length &&  
                              <CarouselNextArrow className="mr-14 hover:bg-[#3F3E3E] hover:text-white" />
                            }
                            {current > 0 &&
                              <CarouselPreviousArrow className="ml-14 hover:bg-[#3F3E3E] hover:text-white" />
                            }
                        </Carousel>

                        <div className="flex items-center gap-5">
                            {
                                product?.images.map((image, index) => (
                                    <div
                                        key={index}
                                        className={cn(
                                            "relative h-[84px] w-[84px] cursor-pointer",
                                            current === index && "border border-black"
                                        )}
                                        onClick={() => api?.scrollTo(index)}
                                    >
                                        <Image
                                            key={index}
                                            src={image}
                                            alt={"product"}
                                            width={592}
                                            height={664}
                                            className={cn("max-h-[84px] max-w-[84px] h-full w-full object-cover opacity-60 hover:opacity-100")}
                                        />
                                    </div>
                                ))
                            }
                        </div>
                    </div>

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

                        <div className="lg:w-1/2 max-md:w-full">
                            <Button className="gap-1 w-fit max-md:w-full bg-white hover:border-none border border-neutral-1000 text-neutral-1000 hover:bg-black hover:text-white" onClick={()=>push(Routes.resourcesSamples)}>
                                Request samples
                                <MoveRight />
                            </Button>
                        </div>

                        <div className="flex flex-col gap-6">
                          <Accordion type="single" collapsible>
                            <ProductFeatureAccordion Trigger="Features" Item={`${product?.id}_features`} Content={product ? product?.features : []} />
                            <ProductDetailsAccordion Trigger="Details" Item={`${product?.id}_details`} Content={product?.details} />
                          </Accordion>
                        </div>
                    </div>
                </div>
            </section>

            <section className="flex bg-white w-full justify-center border-b border-neutral-1000 ">
              <div className="flex flex-col justify-center max-w-screen-2xl w-full md:py-[120px] md:px-[72px] gap-10 max-lg:px-6 max-lg:py-14">
                <div className="flex justify-between w-full max-lg:max-w-[316px]">
                  <Link href={Routes.allProjects}>
                    <H2 className="text-brand-graphite max-w-[730px] uppercase hover:text-brand-ipe-yellow cursor-pointer transition-colors max-sm:text-[24px] max-sm:leading-[33.6px] max-sm:font-extrabold ">
                      Inspiration for architects and designers
                    </H2>
                  </Link>
                  <div className="max-lg:hidden">
                    <ButtonYellowLine title="All projects" href={Routes.allProjects} />
                  </div>
                </div>

                <div className="flex max-lg:flex-col max-lg:items-center">
                  <InspirationSection showTitle showControls={false} />
                </div>

                <div className="flex justify-center lg:hidden">
                  <ButtonYellowLine title="All projects" href={Routes.allProjects} />
                </div>
              </div>
            </section>

            <section className="flex bg-white w-full justify-center border-b border-neutral-1000">
                <div className="flex flex-col justify-center max-w-screen-2xl w-full md:py-[120px] md:px-[72px] max-md:px-6 max-md:py-14 gap-12">
                    <div className="flex justify-between w-full">
                        <H2 className="text-brand-graphite uppercase lg:max-w-[510px]">Releated products</H2>
                        <Button variant='link' className="flex-col max-md:hidden">
                            <div className="flex gap-1">
                                All products
                                <MoveRight />
                            </div>
                            <Image src={'/icons/Path-110.png'} alt="Path-110" width={66} height={45} className="place-self-start -mt-4" />
                        </Button>
                    </div>

                    <div className="flex gap-8 w-full max-md:hidden">
                        {
                          releatedProducts && releatedProducts.slice(0, 3).map((item, index) => (
                            <ProductCard key={index} product={item} />
                          ))
                        }
                    </div>
                    <div className="flex w-full md:hidden">
                        {releatedProducts && 
                          <RelatedProducts products={releatedProducts} limit={3} />
                        }
                    </div>
                </div>
            </section>

            <section className="flex bg-white w-full justify-center">
                <div className="flex flex-col justify-center items-center max-w-screen-2xl w-full md:py-[120px] md:px-[72px] max-md:px-6 max-md:py-14 gap-20">
                    <div className="flex max-md:flex-col-reverse gap-[78px]">
                      <Image src={"/images/Rectangle12.png"} alt={"Rectangle12"} width={365} height={416} className="h-full max-md:hidden" />
                      <div className="max-md:flex justify-center md:hidden">
                        <Image src={"/images/Rectangle12.jpeg"} alt={"Rectangle12"} width={365} height={416} className="h-full w-full " />
                      </div>
                        <div className="relative flex flex-col gap-8 text-brand-graphite">
                            <H2 className="md:max-w-[80%] max-sm:text-[24px] max-sm:leading-[33.6px] max-sm:font-extrabold">
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

                    {/* Mobile */}
                    <div className="relative flex gap-1 items-center w-full lg:hidden">
                        <LogosCarousel images={listLogos} />
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