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
import { cn, shuffleArray } from "@/lib/utils";
import { HardWoodList } from "@/products/HardWoodList";
import { ThermoWoodProducts } from "@/products/ThermowoodList";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const LIST_PRODUCTS = shuffleArray(HardWoodList.concat(ThermoWoodProducts))

  const router = useRouter()

  return (
    <div className="relative">
      <section className="flex bg-neutral-1000 w-full justify-center">
        <div className="flex max-w-screen-2xl px-[72px] pt-[56px] max-lg:flex-col max-lg:px-6 max-lg:py-14">
          <div className="text-white w-full flex flex-col gap-9 justify-center">
            <H1 className="text-white max-w-[573px]">
              The Wood
              That Sets
              the Standard
            </H1>
            <ParagraphMedium className="max-w-[465px]">
              Maximo combines decades of natural resilience with advanced thermal innovation, offering wood that stands the test of time—in any climate, for any project.
            </ParagraphMedium>
            <Button onClick={() => router.push(Routes.home + "#type-of-wood")} className="gap-1 w-fit bg-white text-neutral-1000 max-lg:w-full lg:mb-8 max-lg:mb-14">
              Our Materials
              <MoveRight />
            </Button>
          </div>
          <div className="lg:max-w-[688px] w-full h-full max-lg:flex max-lg:justify-center">
            <Image
              src={"/images/grant-ritchie-FBkrQhnLQoY-unsplash.png"}
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
            Every Maximo board is handpicked for quality, sustainability, and unmatched stability. Our range includes both timeless hardwoods and thermally modified woods, giving you the flexibility to choose between classic beauty and modern performance. With Maximo, you’re not just choosing wood—you’re choosing a legacy of craftsmanship, built for the future. Explore the possibilities and discover the wood that redefines excellence.
          </ParagraphLarge>
        </div>
      </section>

      <section id="type-of-wood" className="flex bg-brand-ipe-yellow/15 w-full justify-center">
        <div className="flex flex-col max-w-screen-2xl md:py-[120px] md:px-[174px] gap-24 max-lg:px-6 max-lg:py-14">
          <div className="flex justify-center w-full">
            <H2 className="text-center uppercase max-sm:text-[24px] max-sm:leading-[33.6px] max-sm:font-extrabold max-lg:max-w-[316px] lg:max-w-[1068px]">
              The best of both worlds for your construction
            </H2>
          </div>
          <div className="flex lg:justify-between max-lg:flex-col max-lg:items-center max-lg:gap-16">
            <div className="flex flex-col gap-10 max-w-[413px] items-center text-center ">
              <Image src={"/images/Ellipse1.png"} alt={"Ellipse1"} width={120} height={120} />
              <SubtitleMediumBold>
                Thermo
              </SubtitleMediumBold>
              <ParagraphLarge>
                Using only heat and steam, Maximo’s patented process dramatically reduces the wood’s sugar and moisture content, making it unattractive to bugs and exceptionally lightweight. Perfect for enhancing walls, ceilings, and more, both indoors and outdoors.
              </ParagraphLarge>

              <ButtonYellowLine title="Explore Maximo Thermo" href={Routes.thermowood} />

            </div>

            <div className="flex flex-col gap-10 max-w-[413px] items-center text-center">
              <Image src={"/images/Ellipse2.png"} alt={"Ellipse1"} width={120} height={120} />
              <SubtitleMediumBold>
                Hardwood
              </SubtitleMediumBold>
              <ParagraphLarge>
                Our premium hardwoods are handpicked for quality and durability. Sourced from sustainably managed forests, each piece is graded premium on all four sides, making them ideal for demanding applications like decking, boardwalks, and more.
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

          <div className="flex gap-8 w-full max-lg:flex-col max-lg:items-start">
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

      <section className="flex bg-white w-full justify-center border-y border-neutral-1000 ">
        <div className="flex flex-col justify-center max-w-screen-2xl w-full md:py-[120px] md:px-[72px] gap-10 max-lg:px-6 max-lg:py-14">
          <div className="flex justify-between w-full max-lg:max-w-[316px]">
            <Link href={Routes.allProjects}>
              <H2 className="text-brand-graphite max-w-[814px] uppercase hover:text-brand-ipe-yellow cursor-pointer transition-colors max-sm:text-[24px] max-sm:leading-[33.6px] max-sm:font-extrabold ">
                Inspiration for architects and designers
              </H2>
            </Link>
            <div className="max-lg:hidden">
              <ButtonYellowLine title="All projects" href={Routes.allProjects} />
            </div>
          </div>

          <div className="flex max-lg:flex-col max-lg:items-center">
            <InspirationSection showTitle />
          </div>

          <div className="flex justify-center lg:hidden">
            <ButtonYellowLine title="All projects" href={Routes.allProjects} />
          </div>
        </div>
      </section>

      <section className="flex bg-white w-full justify-center">
        <div className="flex flex-col justify-center items-center max-w-screen-2xl w-full md:py-[120px] md:px-[72px] gap-20 max-lg:px-6 max-lg:py-14">
            <div className="flex gap-[78px] max-lg:flex-col-reverse ">
              <Image src={"/images/Rectangle12.png"} alt={"Rectangle12"} width={365} height={416} className="h-full max-lg:hidden" />
              <div className="max-lg:flex justify-center lg:hidden">
                <Image src={"/images/Rectangle12.jpeg"} alt={"Rectangle12"} width={365} height={416} className="h-full w-full " />
              </div>
                <div className="relative flex flex-col gap-8 text-brand-graphite">
                    <H2 className="md:max-w-[80%] max-sm:text-[24px] max-sm:leading-[33.6px] max-sm:font-extrabold max-lg:max-w-[316px]">
                        Rooted in Responsibility: Our Commitment to Sustainable Wood
                    </H2>
                    <ParagraphLarge>
                        Sustainability is at the heart of everything we do at Maximo Wood. From sourcing responsibly managed woodlands to supporting communities in Brazil that depend on forests for their livelihoods, we’re committed to making a positive impact. Our products are backed by certifications like FSC and PEFC, ensuring our wood is sourced with care for both people and the planet.
                    </ParagraphLarge>
                </div>
            </div>

          {/* Desktop */}
          <div className="relative flex gap-8 items-center max-h-[189px] max-w-[100%] max-lg:hidden">
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
    </div >
  );
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
