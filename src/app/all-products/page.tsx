'use client'
import { Dropdown } from "@/components/dropdown/dropdown";
import { Footer } from "@/components/footer/footer";
import { ProductCard } from "@/components/productCard/productCard";
import ProductSamples from "@/components/productSamples";
import { H1, ParagraphLarge } from "@/components/text/Heading";
import { HardWoodList } from "@/products/HardWoodList";
import { ThermoWoodProducts } from "@/products/ThermowoodList";
import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Products() {
    const LIST_PRODUCTS = HardWoodList.concat(ThermoWoodProducts);
    const { back } = useRouter();

    return (
        <div className="relative text-brand-graphite">
            <section className="flex bg-white w-full justify-center">
                <div className="flex flex-col max-w-screen-2xl w-full lg:gap-10 max-lg:pt-10">
                    <div className="max-lg:mb-10 max-lg:ml-6 lg:hidden">
                        <ChevronLeft
                            onClick={() => back()}
                            className="cursor-pointer"
                        />
                    </div>
                    <Image
                        src={"/images/allproducts/header.png"}
                        alt="logo"
                        width={1440}
                        height={432}
                        className="max-h-[432px] max-w-screen-2xl w-full h-full object-contain max-lg:hidden"
                    />
                    <Image
                        src={"/images/all-products/headerMobile.jpg"}
                        alt="logo"
                        width={1440}
                        height={432}
                        className="max-h-[432px] w-full object-cover lg:hidden" />
                </div>
            </section>

            <section className="flex bg-white w-full justify-center">
                <div className="flex flex-col max-w-screen-2xl lg:px-[72px] lg:py-[120px] w-full gap-10 max-lg:px-6 max-lg:py-14">
                    <H1 className="max-w-[924px]">
                        Products
                    </H1>

                    <ParagraphLarge className="max-w-[638px]">
                        Whether you have questions about our products or are interested in partnering with us, we're here to connect. Simply fill out the form below, and we'll get back to you shortly.
                    </ParagraphLarge>
                </div>
            </section>

            {/* Só comecei */}
            <div className="flex max-w-screen-2xl lg:px-[72px] w-full gap-10 max-lg:px-6">
                {/* TODO: FILTERS */}
                <Dropdown />
                <Dropdown />
                <Dropdown />
            </div>

            <section className="flex bg-white w-full justify-center">
                <div className="flex flex-col justify-center max-w-screen-2xl w-full md:py-[120px] md:px-[70px] max-lg:px-6 max-lg:py-14">

                    <div className="flex flex-wrap gap-8 w-full justify-center">
                        {
                            LIST_PRODUCTS.map((product, index) => (
                                <ProductCard key={index} product={product} />
                            ))
                        }
                    </div>
                </div>
            </section>


            {/* TODO: PAGINATION */}

            <ProductSamples />

            <Footer />
        </div >
    );
}
