'use client'
import { ProjectsCarousel } from "@/components/carousel/projects";
import { Footer } from "@/components/footer/footer";
import Navbar from "@/components/navbar/navbar";
import { ProductCard } from "@/components/productCard/productCard";
import { H1, H2 } from "@/components/text/Heading";
import { Button } from "@/components/ui/button";
import { Routes } from "@/enums/routes";
import { ProjectsList } from "@/products/list";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function AllProjects() {
    return (
        <div className="relative">
            
            <section className="flex bg-white w-full justify-center">
                <div className="flex flex-col max-w-screen-2xl px-[72px] pt-[56px] w-full text-brand-graphite">
                    <H1 className="max-w-[822px] pb-[88px]">
                        Inspiration for Architects and Designers
                    </H1>
                </div>
            </section>

            <section className="flex bg-white w-full justify-center">
                <div className="flex flex-col max-w-screen-2xl pt-[56px] w-full text-brand-graphite">
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
                <div className="flex flex-col justify-center max-w-screen-2xl w-full md:py-[120px] md:px-[174px] gap-12">
                    <div className="flex justify-between w-full">
                        <H2 className="text-brand-graphite uppercase">Our Products</H2>
                        <Button variant='link' className="flex-col">
                            <a href={Routes.allProducts} className="flex gap-1">
                                All products

                                <ArrowRight />
                            </a>
                            <Image src={'/icons/Path-110.png'} alt="Path-110" width={66} height={45} className="place-self-start -mt-4" />
                        </Button>
                    </div>

                    <div className="flex gap-8 w-full">
                        {
                            Array.from({ length: 3 }).map((_, index) => (
                                <ProductCard key={index} />
                            ))
                        }
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}