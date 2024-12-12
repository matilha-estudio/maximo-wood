/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import { FilteredInspirationCarousel } from "@/components/carousel/filteredInspirationCarousel";
import { Footer } from "@/components/footer/footer";
import { ProductCard } from "@/components/productCard/productCard";
import { H1, H2, H3, H5, ParagraphLarge, SubtitleMediumNormal, SubtitleSmall, SubtitleXL } from "@/components/text/Heading";
import { Button } from "@/components/ui/button";
import { ButtonYellowLine } from "@/components/ui/buttonYellowLine";
import { Routes } from "@/enums/routes";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ChevronLeft } from "lucide-react";
import ProductSamples from "@/components/productSamples";
import { LogosCarousel } from "@/components/carousel/logos";
import { useEffect, useState } from "react";
import { getAllProducts, getHardwood } from "@/services";
import { MaximoHardwoodThermoData } from "@/services/models";


// PAGINA SERÁ REPLICADA PARA THERMOWOOD APENAS ALTERANDO O CONTEÚDO
export default function Hardwood() {
    const route = useRouter();
    const [pageDetails, setPageDetails] = useState<MaximoHardwoodThermoData>();
    const [hardwoods, setHardwoods] = useState([]);


    useEffect(()=>{
      const init = async ()=>{
        const resp = await getHardwood();
        const products = await getAllProducts();
        setPageDetails(resp);
        setHardwoods(products.filter((i: any)=> i.tag.material.toUpperCase() === 'HARDWOOD'));
      }
      init()
    },[])

    return (pageDetails &&
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

            <section className="flex bg-white w-full justify-center border-t max-lg:border-b border-neutral-1000">
                <div className="flex flex-col max-w-screen-2xl lg:px-[72px] lg:py-[120px] w-full gap-10 ">
                    <H2 className="max-w-[573px] max-lg:px-6 max-lg:pb-6 max-lg:pt-14">
                      {pageDetails.second_section.title}
                    </H2>

                    <div className="max-lg:flex max-lg:flex-col-reverse">
                      <div className="max-w-[744px]">
                        <ParagraphLarge className="max-lg:px-6 max-lg:py-14">
                          {pageDetails.second_section.text}
                        </ParagraphLarge>
                      </div>

                      <video
                          src={pageDetails.second_section.video}
                          className="aspect-video w-full lg:mt-10"
                          controls
                      >
                          Sustainability-Video-Presentation-2024-MAXIMO-V5
                      </video>
                    </div>
                </div>
            </section>

            <section className="flex w-full justify-center">
                <div className="flex max-w-screen-2xl px-[72px] py-[60px] w-full lg:gap-4 max-lg:px-6 max-lg:py-14 max-lg:flex-col">
                    <div className="lg:max-w-[400px] 2xl:max-w-[521px] max-lg:mb-10 flex w-full justify-center max-lg:justify-start ">
                        <H2 className="uppercase max-lg:hidden">
                            {pageDetails.why_choose.title}
                        </H2>
                        <H3 className="uppercase lg:hidden">
                            {pageDetails.why_choose.title}
                        </H3>
                    </div>

                    <div className="flex w-full gap-8 lg:flex-wrap max-lg:flex-col ">
                        <div className="flex flex-col gap-4 lg:max-w-[300px] 2xl:max-w-[338px]">
                            <SubtitleSmall>
                                {pageDetails.why_choose.item_1.title}
                            </SubtitleSmall>
                            <ParagraphLarge>
                                {pageDetails.why_choose.item_1.text}
                            </ParagraphLarge>
                        </div>
                        <div className="flex flex-col gap-4 lg:max-w-[300px] 2xl:max-w-[338px]">
                            <SubtitleSmall>
                                {pageDetails.why_choose.item_2.title}
                            </SubtitleSmall>
                            <ParagraphLarge>
                                {pageDetails.why_choose.item_2.text}
                            </ParagraphLarge>
                        </div>
                        <div className="flex flex-col gap-4 lg:max-w-[300px] 2xl:max-w-[338px]">
                            <SubtitleSmall>
                                {pageDetails.why_choose.item_3.title}
                            </SubtitleSmall>
                            <ParagraphLarge>
                                {pageDetails.why_choose.item_3.text}
                            </ParagraphLarge>
                        </div>
                        <div className="flex flex-col gap-4 lg:max-w-[300px] 2xl:max-w-[338px]">
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

            <section className="flex bg-white w-full justify-center border-t max-lg:border-b border-neutral-1000">
                <div className="flex flex-col justify-center max-w-screen-2xl w-full md:py-[120px] md:px-[72px] gap-12 max-lg:px-6 max-lg:py-14">
                    <div className="flex justify-between w-full max-lg:justify-center max-md:justify-between">
                        <H2 className="text-brand-graphite uppercase max-sm:text-[24px] max-sm:leading-[33.6px] max-sm:font-extrabold max-w-screen-sm">
                            Our Hardwood Products
                        </H2>

                        <div className="max-lg:hidden">
                          <ButtonYellowLine title="All products" href={Routes.allProducts} />
                        </div>

                    </div>

                    <div className="flex gap-8 w-full max-lg:flex-col max-lg:items-start">
                        {
                            hardwoods.slice(0, 3).map((product, index) => (
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
                        <FilteredInspirationCarousel filter="hardwood" size="basis" lista={pageDetails.inspiring_maximo.list_images.map(i=> i.image)} />
                    </div>
                </div>
            </section>

            <section className="flex bg-white w-full justify-center">
                <div className="flex max-md:flex-col justify-center max-w-screen-2xl w-full md:py-[120px] md:px-[72px] max-md:px-6 max-md:py-14 max-md:gap-10">
                    <div className="flex flex-col gap-8 lg:w-1/2 max-lg:w-full">
                        <SubtitleXL className="uppercase">
                            {pageDetails.certified_excellence_sustainability.title}
                        </SubtitleXL>
                        <ParagraphLarge>
                            {pageDetails.certified_excellence_sustainability.text}
                        </ParagraphLarge>
                    </div>
                    <div className="flex gap-8 max-lg:hidden">
                        {pageDetails.certified_excellence_sustainability.list_logos.slice(0, 3).map((item, index) => (
                          <div key={index} className="max-h-[189px] max-w-[189px]">
                            <Image src={item.image} alt={`logo_${index}`} width={189} height={189} className="object-contain h-full" />
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
