/* eslint-disable @typescript-eslint/no-explicit-any */
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
import Image from "next/image";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getAllProducts, getThermo } from "@/services";
import { MaximoHardwoodThermoData } from "@/services/models";

export default function Thermowood() {
    const route = useRouter();
    const [pageDetails, setPageDetails] = useState<MaximoHardwoodThermoData>();
    const [thermo, setThermo] = useState([]);


    useEffect(()=>{
      const init = async ()=>{
        const resp = await getThermo();
        const products = await getAllProducts();
        console.log(products);
        setPageDetails(resp);
        setThermo(products.filter((i: any)=> i.tag.material.toUpperCase() === 'THERMO'))
      }
      init()
    },[])

    return (pageDetails &&
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
                      {pageDetails?.title_page}
                    </H1>
                </div>
            </section>

            <section className="flex bg-white w-full justify-center max-md:h-56">
                <Image
                    src={pageDetails.hero_image}
                    alt="logo"
                    width={1440}
                    height={432}
                    className="max-h-[432px] max-w-screen-2xl w-full h-full object-contain max-md:object-fill"
                />
            </section>

            <section className="flex bg-white w-full justify-center">
                <div className="flex flex-col max-w-screen-2xl w-full gap-10 lg:px-[72px] lg:py-[120px] lg:items-center max-lg:px-6 max-lg:py-14">
                    <H5 className="max-w-[924px]">
                      {pageDetails.title_text}
                    </H5>

                    <SubtitleMediumNormal className="lg:text-center max-md:text-[16px] max-md:leading-7">
                      {pageDetails.text}
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
                      {pageDetails.second_section.title}
                    </H2>

                    <div className="max-lg:flex max-lg:flex-col-reverse">
                      <div className="max-w-[744px]">
                        <ParagraphLarge className="max-w-[744px] max-lg:px-6 max-lg:py-14">
                          {pageDetails.second_section.text}
                        </ParagraphLarge>
                      </div>

                      <video
                          src={pageDetails.second_section.video}
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
                            {pageDetails.why_choose.title}
                        </H2>
                        <H3 className="uppercase lg:hidden">
                            {pageDetails.why_choose.title}
                        </H3>
                    </div>

                    <div className="flex w-full gap-16 lg:flex-wrap max-lg:flex-col ">
                        <div className="flex flex-col gap-4 max-w-[338px]">
                            <SubtitleSmall>
                                {pageDetails.why_choose.item_1.title}
                            </SubtitleSmall>
                            <ParagraphLarge>
                                {pageDetails.why_choose.item_1.text}
                            </ParagraphLarge>
                        </div>
                        <div className="flex flex-col gap-4 max-w-[338px]">
                            <SubtitleSmall>
                                {pageDetails.why_choose.item_2.title}
                            </SubtitleSmall>
                            <ParagraphLarge>
                                {pageDetails.why_choose.item_2.text}
                            </ParagraphLarge>
                        </div>
                        <div className="flex flex-col gap-4 max-w-[338px]">
                            <SubtitleSmall>
                                {pageDetails.why_choose.item_3.title}
                            </SubtitleSmall>
                            <ParagraphLarge>
                                {pageDetails.why_choose.item_3.text}
                            </ParagraphLarge>
                        </div>
                        <div className="flex flex-col gap-4 max-w-[338px]">
                            <SubtitleSmall>
                                {pageDetails.why_choose.item_4.title}
                            </SubtitleSmall>
                            <ParagraphLarge>
                                {pageDetails.why_choose.item_4.text}
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
                            thermo.slice(0, 3).map((product, index) => (
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
                          {pageDetails.inspiring_maximo.title}
                        </H2>
                    </div>

                    <div className="max-md:pl-6 max-md:pb-14">
                        <FilteredInspirationCarousel filter="thermowood" size="basis" lista={pageDetails.inspiring_maximo.list_images.map(i=> i.image)} />
                    </div>
                </div>
            </section>

            <section className="flex bg-white w-full justify-center">
                <div className="flex max-md:flex-col flex-col justify-center max-w-screen-2xl w-full md:py-[120px] md:px-[72px] max-md:px-6 max-md:py-14 max-md:gap-10">
                    <div className="flex flex-col gap-8 lg:w-1/2 max-lg:w-full">
                        <SubtitleXL className="uppercase">
                          {pageDetails.certified_excellence_sustainability.title}
                        </SubtitleXL>
                        <ParagraphLarge>
                          {pageDetails.certified_excellence_sustainability.text}
                        </ParagraphLarge>
                    </div>

                    {/* Desktop */}
                    <div className="relative flex gap-8 items-center max-h-[189px] max-lg:hidden lg:mt-20">
                        {pageDetails.certified_excellence_sustainability.list_logos.map((item, index) => (
                            <div key={index} className="flex items-center justify-center max-h-[189px] max-w-[189px] overflow-hidden">
                                <Image
                                    src={item.image}
                                    alt={`logo_${index}`}
                                    width={189}
                                    height={189}
                                    className={cn("object-contain h-full max-h-[189px] max-w-[189px]")}
                                />
                            </div>
                        ))}
                    </div>

                    {/* Mobile */}
                    <div className="relative flex gap-1 items-center w-full lg:hidden">
                        <LogosCarousel images={pageDetails.certified_excellence_sustainability.list_logos} />
                    </div>
                </div>
            </section>

            <ProductSamples />

            <Footer />
        </div >
    );
}
