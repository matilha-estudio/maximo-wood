'use client'
import { Footer } from "@/components/footer/footer";
import Navbar from "@/components/navbar/navbar";
import { ProductCard } from "@/components/productCard/productCard";
import { H1, H5, ParagraphLarge } from "@/components/text/Heading";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Products() {
    return (
        <div className="relative text-brand-graphite">
            
            <section className="flex bg-white w-full justify-center">
                <Image
                    src={"/images/all-products/header.png"}
                    alt="logo"
                    width={1440}
                    height={432}
                    className="max-h-[432px] max-w-screen-2xl w-full h-full object-contain"
                />

            </section>

            <section className="flex bg-white w-full justify-center">
                <div className="flex flex-col max-w-screen-2xl px-[72px] py-[120px] w-full gap-10">
                    <H1 className="max-w-[924px]">
                        Products
                    </H1>

                    <ParagraphLarge className="max-w-[638px]">
                        Whether you have questions about our products or are interested in partnering with us, we're here to connect. Simply fill out the form below, and we'll get back to you shortly.
                    </ParagraphLarge>
                </div>
            </section>

            {/* TODO: FILTERS */}

            <section className="flex bg-white w-full justify-center">
                <div className="flex flex-col justify-center max-w-screen-2xl w-full md:py-[120px] md:px-[70px]">

                    <div className="flex flex-wrap gap-8 w-full justify-center">
                        {
                            Array.from({ length: 9 }).map((_, index) => (
                                <ProductCard />
                            ))
                        }
                    </div>
                </div>
            </section>


            {/* TODO: PAGINATION */}


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
