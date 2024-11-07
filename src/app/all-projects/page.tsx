'use client'
import { ProjectsCarousel } from "@/components/carousel/projects";
import { Footer } from "@/components/footer/footer";
import { ProductCard } from "@/components/productCard/productCard";
import { H1, H2 } from "@/components/text/Heading";
import { ButtonYellowLine } from "@/components/ui/buttonYellowLine";
import { Routes } from "@/enums/routes";
import { shuffleArray } from "@/lib/utils";
import { HardWoodList } from "@/products/HardWoodList";
import { ThermoWoodProducts } from "@/products/ThermowoodList";
import { ProjectsList } from "@/projects/list";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function AllProjects() {
    const LIST_PRODUCTS = shuffleArray(HardWoodList.concat(ThermoWoodProducts))
    const { back } = useRouter();

    return (
        <div className="relative">

            <section className="flex bg-white w-full justify-center">
                <div className="flex flex-col max-w-screen-2xl px-[72px] pt-[56px] max-lg:pt-10 max-lg:pb-14 max-lg:px-6 w-full text-brand-graphite">
                    <div className="max-lg:mb-10 lg:hidden">
                      <ChevronLeft
                        onClick={() => back()}
                        className="cursor-pointer"
                      />
                    </div>
                    <H1 className="max-w-[822px] pb-[88px] max-lg:pb-0">
                        Inspiration for Architects and Designers
                    </H1>
                </div>
            </section>

            <section className="flex bg-white w-full justify-center">
                <div className="flex flex-col max-w-screen-2xl pt-[56px] max-lg:pt-0 w-full text-brand-graphite">
                    {
                        ProjectsList.map((item, index) => (
                            <ProjectsCarousel
                                key={index}
                                title={item.title}
                                product={item.product}
                                profile={item.profile}
                                location={item.location}
                                description={item.description}
                                images={item.images}
                            />

                        ))
                    }
                </div>
            </section>

            <section className="flex bg-white w-full justify-center">
                <div className="flex flex-col justify-center max-w-screen-2xl w-full md:py-[120px] md:px-[174px] gap-12 max-lg:px-6 max-lg:py-14">
                    <div className="flex justify-between w-full max-lg:justify-center max-md:justify-between">
                        <H2 className="text-brand-graphite uppercase max-sm:text-[24px] max-sm:leading-[33.6px] max-sm:font-extrabold ">
                            Our Products
                        </H2>

                        <ButtonYellowLine title="All products" href={Routes.allProducts} />

                    </div>

                    <div className="flex gap-8 w-full max-lg:flex-col max-lg:items-center">
                        {
                            LIST_PRODUCTS.slice(0, 3).map((product, index) => (
                                <ProductCard key={index} product={product} />
                            ))
                        }
                    </div>
                    <div className="flex justify-center lg:hidden">
                        <ButtonYellowLine title="All products" href={Routes.allProducts} />
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}