'use client'
import { InspirationSection } from "@/components/carousel/inspirationsSection";
import { LogosCarousel } from "@/components/carousel/logos";
import { Footer } from "@/components/footer/footer";
import { ProductCard } from "@/components/productCard/productCard";
import ProductSamples from "@/components/productSamples";
import { H1, H2, ParagraphLarge, ParagraphMedium, SubtitleMediumBold } from "@/components/text/Heading";
import { Button } from "@/components/ui/button";
import { ButtonYellowLine } from "@/components/ui/buttonYellowLine";
import { Routes } from "@/enums/routes";
import { cn } from "@/lib/utils";
import { getAllProducts, getHomePage, getInspirations } from "@/services";
import { HomePage, InspirationCarrouselData } from "@/services/models";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const [pageDetail, setPageDetail] = useState<HomePage>();
  const [listProducts, setListProducts] = useState([]);
  const [insp, setInsp] = useState<InspirationCarrouselData>();

  const router = useRouter();

  useEffect(()=> {
    const init = async () => {
      const response = await getHomePage();
      const products = await getAllProducts('3');
      const inspirations = await getInspirations();
      setInsp(inspirations)
      setPageDetail(response);
      setListProducts(products);
    }

    init();
  },[])

  return (pageDetail &&
    <div className="relative">
      <section className="flex bg-neutral-1000 w-full justify-center">
        <div className="flex w-full max-w-screen-2xl md:px-[50px] xl:px-[72px] pt-[56px] max-lg:flex-col max-lg:px-6 max-lg:py-14">
          <div className="text-white w-full flex flex-col gap-9 justify-center">
            <H1 className="text-white max-w-[434px] w-full max-sm:text-[38px]">
              <div
                dangerouslySetInnerHTML={{
                  __html: pageDetail.hero.title.replace('Wood ', 'Wood <br/>').replace('Sets ', 'Sets <br/>')
                }}
              />
            </H1>
            <ParagraphMedium className="max-w-[465px]">
              {pageDetail.hero.sub_title}
            </ParagraphMedium>
            <Button onClick={() => router.push(Routes.home + "#type-of-wood")} className="gap-1 w-fit bg-white text-neutral-1000 max-lg:w-full lg:mb-8 max-lg:mb-14">
              Our Materials
              <MoveRight />
            </Button>
          </div>
          <div className="lg:max-w-[688px] w-full h-full max-lg:flex max-lg:justify-center">
            <Image
              src={pageDetail.hero.image}
              alt="logo"
              width={688}
              height={688}
              className="max-w-[688px] w-full h-full"
            />
          </div>
        </div>
      </section>

      <section className="flex bg-white w-full justify-center">
        <div className="flex max-w-screen-2xl px-[72px] py-[120px] w-full justify-end max-lg:py-14 max-lg:px-6 max-lg:justify-center">
          <ParagraphLarge className="max-w-[744px]">
            {pageDetail?.text}
          </ParagraphLarge>
        </div>
      </section>

      <section id="type-of-wood" className="flex bg-brand-ipe-yellow/15 w-full justify-center">
        <div className="flex flex-col max-w-screen-2xl md:py-[120px] md:px-[174px] gap-24 max-lg:px-6 max-lg:py-14">
          <div className="flex justify-center w-full">
            <H2 className="text-center uppercase max-sm:text-[24px] max-sm:leading-[33.6px] max-sm:font-extrabold max-lg:max-w-[316px] lg:max-w-[1068px]">
              {pageDetail.material.title}
            </H2>
          </div>
          <div className="flex lg:justify-between max-lg:flex-col max-lg:items-center max-lg:gap-16">
            <div className="flex flex-col gap-10 max-w-[413px] items-center text-center ">
              <Image src={pageDetail.material.thermo.image} alt={"Ellipse1"} width={120} height={120} />
              <SubtitleMediumBold>
                {pageDetail.material.thermo.title}
              </SubtitleMediumBold>
              <ParagraphLarge>
                {pageDetail.material.thermo.text}
              </ParagraphLarge>

              <ButtonYellowLine title="Explore Maximo Thermo" href={Routes.thermowood} />

            </div>

            <div className="flex flex-col gap-10 max-w-[413px] items-center text-center">
              <Image src={pageDetail.material.hardwood.image} alt={"Ellipse1"} width={120} height={120} />
              <SubtitleMediumBold>
                {pageDetail.material.hardwood.title}
              </SubtitleMediumBold>
              <ParagraphLarge>
                {pageDetail.material.hardwood.text}
              </ParagraphLarge>

              <ButtonYellowLine title="Explore Maximo Hardwood" href={Routes.hardwood} />

            </div>
          </div>
        </div>
      </section >

      <section className="flex bg-white w-full justify-center">
        <div className="flex flex-col justify-center max-w-screen-2xl w-full md:py-[120px] md:px-[72px] gap-12 max-lg:px-6 max-lg:py-14">
          <div className="flex justify-between w-full max-lg:justify-center max-md:justify-between">
            <H2 className="text-brand-graphite uppercase max-sm:text-[24px] max-sm:leading-[33.6px] max-sm:font-extrabold ">
              Our Products
            </H2>
            <div className="max-lg:hidden">
              <ButtonYellowLine title="All products" href={Routes.allProducts} />
            </div>

          </div>

          <div className="flex gap-3 w-full max-lg:flex-col lg:flex-wrap xl:flex max-lg:items-start">
            {
              listProducts?.map((product, index) => (
                <ProductCard key={index} product={product} />
              ))
            }
          </div>
          <div className="flex justify-center lg:hidden">
            <ButtonYellowLine title="All products" href={Routes.allProducts} />
          </div>
        </div>
      </section>

      <section className="flex bg-white w-full justify-center border-y border-neutral-1000 ">
        <div className="flex flex-col justify-center max-w-screen-2xl w-full md:py-[120px] md:px-[72px] gap-10 max-lg:px-6 max-lg:py-14">
          <div className="flex justify-between w-full max-lg:max-w-[316px]">
            <Link href={Routes.allProjects}>
              <H2 className="text-brand-graphite max-w-[814px] uppercase hover:text-brand-ipe-yellow cursor-pointer transition-colors max-sm:text-[24px] max-sm:leading-[33.6px] max-sm:font-extrabold ">
                {insp?.title}
              </H2>
            </Link>
            <div className="max-lg:hidden">
              <ButtonYellowLine title="All projects" href={Routes.allProjects} />
            </div>
          </div>

          <div className="flex max-lg:flex-col max-lg:items-center">
            <InspirationSection showTitle list={insp?.list_images}/>
          </div>

          <div className="flex justify-center lg:hidden">
            <ButtonYellowLine title="All projects" href={Routes.allProjects} />
          </div>
        </div>
      </section>

      <section className="flex bg-white w-full justify-center">
        <div className="flex flex-col justify-center items-center max-w-screen-2xl w-full md:py-[120px] md:px-[72px] gap-20 max-lg:px-6 max-lg:py-14">
            <div className="flex gap-[78px] max-lg:flex-col-reverse ">
              <Image src={pageDetail.rooted_in_responsibility.image} alt={"Rectangle12"} width={365} height={416} className="h-full max-h-[416px] max-lg:hidden" />
              <div className="max-lg:flex justify-center lg:hidden">
                <Image src={pageDetail.rooted_in_responsibility.image_mobile} alt={"Rectangle12 mobile"} width={365} height={416} className="h-full w-full " />
              </div>
                <div className="relative flex flex-col gap-8 text-brand-graphite">
                    <H2 className="md:max-w-[80%] max-sm:text-[24px] max-sm:leading-[33.6px] max-sm:font-extrabold max-lg:max-w-[316px]">
                        {pageDetail.rooted_in_responsibility.title}
                    </H2>
                    <ParagraphLarge>
                        {pageDetail.rooted_in_responsibility.text}
                    </ParagraphLarge>
                </div>
            </div>

          {/* Desktop */}
          <div className="relative flex gap-8 max-xl:gap-2 items-center max-h-[189px] w-full max-lg:hidden">
            {pageDetail.rooted_in_responsibility.list_logos.map((item, index) => (
              <div key={index} className="flex items-center justify-center max-h-[189px] max-w-[189px] overflow-hidden">
                <Image
                  src={item.image}
                  alt={`logo_${index}`}
                  width={189}
                  height={189}
                  className={cn("object-contain h-full max-h-[189px] max-w-[170px]")}
                />
              </div>
            ))}
          </div>

          {/* Mobile */}
          <div className="relative flex gap-1 items-center w-full lg:hidden">
            <LogosCarousel images={pageDetail.rooted_in_responsibility.list_logos} />
          </div>
        </div>
      </section>

      <ProductSamples />

      <Footer />
    </div >
  );
}
