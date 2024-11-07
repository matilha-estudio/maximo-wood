'use client'
import { IndustryLeadersCarousel } from "@/components/carousel/industryLeaders";
import FAQAccordion from "@/components/faq/faq";
import { Footer } from "@/components/footer/footer";
import BecomeDealerForm from "@/components/forms/becomeDealer";
import { H1, H2, H3, H5, ParagraphLarge, ParagraphMedium, SubtitleSmall } from "@/components/text/Heading";
import { FAQData } from "@/content/faqList";
import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function BecomeADealer() {
    const { back } = useRouter();
    return (
        <div className="relative text-brand-graphite">

            <section className="flex bg-white w-full justify-center">
                <div className="flex flex-col max-w-screen-2xl px-[72px] lg:py-[120px] max-lg:pb-14 w-full lg:gap-10 max-lg:px-6 max-lg:pt-10">
                    <div className="max-lg:mb-10 lg:hidden">
                        <ChevronLeft
                            onClick={() => back()}
                            className="cursor-pointer"
                        />
                    </div>
                    <H1 className="max-w-[924px] max-lg:mb-6">
                        Be at the Forefront of the Wood Revolution
                    </H1>

                    <ParagraphLarge className="max-w-[638px]">
                        Partner with Maximo Wood to lead the charge in innovative, sustainable wood solutions. Gain access to our premium products, exclusive market opportunities, and dedicated support designed to elevate your business to new heights.
                    </ParagraphLarge>
                </div>
            </section>

            <section className="flex bg-white w-full justify-center">
                <div className="flex max-w-screen-2xl  w-full">
                    <Image src={"/images/image98.png"} alt={"maximo"} width={1440} height={432} className="max-h-[432px] w-full object-cover" />
                </div>
            </section>

            <section className="flex bg-white w-full justify-center">
                <div className="flex max-w-screen-2xl lg:px-[72px] lg:py-[120px] w-full justify-end max-lg:px-6 max-lg:py-14">
                    <ParagraphLarge className="max-w-[744px]">
                        Every Maximo board is handpicked for quality, sustainability, and unmatched stability. Our range includes both timeless hardwoods and thermally modified woods, giving you the flexibility to choose between classic beauty and modern performance. With Maximo, you’re not just choosing wood—you’re choosing a legacy of craftsmanship, built for the future. Explore the possibilities and discover the wood that redefines excellence.
                    </ParagraphLarge>
                </div>
            </section>

            <section className="flex bg-brand-ipe-yellow/15 w-full justify-center">
                <div className="flex max-w-screen-2xl px-[72px] py-[120px] w-full lg:gap-16 max-lg:px-6 max-lg:py-14 max-lg:flex-col">
                    <div className="lg:max-w-[521px] max-lg:mb-10 flex w-full justify-center ">
                        <H2 className="uppercase max-lg:hidden">
                            Why Partner with Maximo?
                        </H2>
                        <H3 className="uppercase lg:hidden">
                            Why Partner with Maximo?
                        </H3>
                    </div>

                    <div className="flex w-full gap-16 lg:flex-wrap max-lg:flex-col items-center">
                        <div className="flex flex-col gap-4 max-w-[338px]">
                            <SubtitleSmall>
                                Access to Premium Products
                            </SubtitleSmall>
                            <ParagraphLarge>
                                At Maximo Wood, we’re driven by a vision: to make premium, high-quality wood accessible to everyone—whether you’re building a deck
                            </ParagraphLarge>
                        </div>
                        <div className="flex flex-col gap-4 max-w-[338px]">
                            <SubtitleSmall>
                                Democratizing Thermally Modified Wood
                            </SubtitleSmall>
                            <ParagraphLarge>
                                At Maximo Wood, we’re driven by a vision: to make premium, high-quality wood accessible to everyone—whether you’re building a deck
                            </ParagraphLarge>
                        </div>
                        <div className="flex flex-col gap-4 max-w-[338px]">
                            <SubtitleSmall>
                                Exclusive Dealer Pricing
                            </SubtitleSmall>
                            <ParagraphLarge>
                                Gain competitive, exclusive pricing designed to boost your margins and maximize profitability with growth-focused partner programs.
                            </ParagraphLarge>
                        </div>
                        <div className="flex flex-col gap-4 max-w-[338px]">
                            <SubtitleSmall>
                                Marketing & Sales Support
                            </SubtitleSmall>
                            <ParagraphLarge>
                                Access marketing resources, product training, and tools for co-branded materials, point-of-sale support, and engaging dealer events.
                            </ParagraphLarge>
                        </div>
                    </div>
                </div>
            </section>

            <section className="flex bg-white w-full justify-center">
                <div className="flex flex-col max-w-screen-2xl lg:px-[72px] lg:py-[120px] w-full gap-12 max-lg:px-6 max-lg:py-14">
                    <div className="w-full">
                        <H2 className="max-w-[530px] max-lg:hidden">
                            Trusted by Industry Leaders
                        </H2>
                        <H5 className="lg:hidden">
                            Trusted by Industry Leaders
                        </H5>
                    </div>
                    <div className="flex gap-8 justify-center max-lg:hidden">
                        <div className="flex flex-col gap-8 max-w-[410px]">
                            <Image src="/images/BuildersFirst.png" alt="BuildersFirst" width={410} height={400} className="object-contain" />
                            <div>
                                <H5>
                                    Builders First Source
                                </H5>
                                <ParagraphMedium>
                                    As one of the largest building materials retailers in the country, Builders First Source trusts Maximo Wood to deliver high-quality solutions that meet the needs of professionals across America.
                                </ParagraphMedium>
                            </div>
                        </div>
                        <div className="flex flex-col gap-8 max-w-[410px]">
                            <Image src="/images/BurtonLumber.png" alt="BurtonLumber" width={410} height={400} className="object-contain" />
                            <div>
                                <H5>
                                    Burton Lumber
                                </H5>
                                <ParagraphMedium>
                                    With over 100 years of history and multiple branches, Burton Lumber counts on Maximo to offer modern, innovative solutions for their clients—keeping their legacy strong and future-focused.
                                </ParagraphMedium>
                            </div>
                        </div>
                        <div className="flex flex-col gap-8 max-w-[410px]">
                            <Image src="/images/StringhamLumber.png" alt="StringhamLumber" width={410} height={400} className="object-contain" />
                            <div>
                                <H5>
                                    Stringham Lumber
                                </H5>
                                <ParagraphMedium>
                                    A proud part of the well-known Do it Best network, with branches all over the U.S., Stringham Lumber relies on Maximo Wood to provide the premium products their customers demand.
                                </ParagraphMedium>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center lg:hidden">
                        <IndustryLeadersCarousel
                            images={listLogos}
                        />
                    </div>
                </div>
            </section>

            <section className="flex bg-brand-ipe-yellow w-full justify-center">
                <div className="flex max-w-screen-2xl lg:px-[72px] lg:py-[120px] w-full lg:gap-16 max-lg:px-6 max-lg:py-14 max-lg:flex-col">
                    <div className="flex flex-col gap-6 lg:w-1/3 max-lg:mb-14">
                        <H2 className="text-black uppercase max-lg:hidden">
                            Ready to Be
                            a Pioneer in the Wood Industry?
                        </H2>
                        <H5 className="text-black uppercase lg:hidden">
                            Ready to Be
                            a Pioneer in the Wood Industry?
                        </H5>
                        <ParagraphLarge>
                            Join our network of early adopters today and gain access to exclusive products, pricing, and support designed to build strong, lasting partnerships. Let’s grow together.
                        </ParagraphLarge>
                    </div>

                    <div>
                        <BecomeDealerForm />
                    </div>
                </div>
            </section>


            <section className="flex bg-white w-full justify-center">
                <div className="flex flex-col max-w-screen-2xl lg:px-[72px] lg:py-[120px] w-full lg:gap-16 max-lg:px-6 max-lg:py-14">
                    <H2 className="max-lg:hidden">
                        FAQ
                    </H2>
                    <H3 className="lg:hidden max-lg:mb-10">
                        FAQ
                    </H3>
                    <div className="max-lg:w-full">
                        {
                            FAQData.map((item, index) => (
                                <FAQAccordion key={index} Item={item.Item} Trigger={item.Trigger} Content={item.Content} />
                            ))
                        }
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}

const listLogos = [
    {
        src: "/images/BuildersFirst.png",
        alt: "BuildersFirst",
        width: 410,
        height: 400,
        title: 'Builders First Source',
        subTitle: 'As one of the largest building materials retailers in the country, Builders First Source trusts Maximo Wood to deliver high-quality solutions that meet the needs of professionals across America.'
    },
    {
        src: "/images/BurtonLumber.png",
        alt: "BurtonLumber",
        width: 410,
        height: 400,
        title: 'Burton Lumber',
        subTitle: 'With over 100 years of history and multiple branches, Burton Lumber counts on Maximo to offer modern, innovative solutions for their clients—keeping their legacy strong and future-focused.'
    },
    {
        src: "/images/StringhamLumber.png",
        alt: "StringhamLumber",
        width: 410,
        height: 400,
        title: 'Stringham Lumber',
        subTitle: 'A proud part of the well-known Do it Best network, with branches all over the U.S., Stringham Lumber relies on Maximo Wood to provide the premium products their customers demand.'
    }
]