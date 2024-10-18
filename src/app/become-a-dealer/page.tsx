'use client'
import FAQAccordion from "@/components/faq/faq";
import { Footer } from "@/components/footer/footer";
import Navbar from "@/components/navbar/navbar";
import { H1, H2, H5, ParagraphLarge, ParagraphMedium, SubtitleSmall } from "@/components/text/Heading";
import { FAQData } from "@/content/faqList";
import Image from "next/image";

export default function BecomeADealer() {
    return (
        <div className="relative text-brand-graphite">
            <Navbar />

            <section className="flex bg-white w-full justify-center">
                <div className="flex flex-col max-w-screen-2xl px-[72px] py-[120px] w-full gap-10">
                    <H1 className="max-w-[924px]">
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
                <div className="flex max-w-screen-2xl px-[72px] py-[120px]">
                    <ParagraphLarge>
                        Every Maximo board is handpicked for quality, sustainability, and unmatched stability. Our range includes both timeless hardwoods and thermally modified woods, giving you the flexibility to choose between classic beauty and modern performance. With Maximo, you’re not just choosing wood—you’re choosing a legacy of craftsmanship, built for the future. Explore the possibilities and discover the wood that redefines excellence.
                    </ParagraphLarge>
                </div>
            </section>

            <section className="flex bg-brand-ipe-yellow/15 w-full justify-center">
                <div className="flex max-w-screen-2xl px-[72px] py-[120px] w-full gap-16">
                    <div className="max-w-[521px]">
                        <H2 className="uppercase">
                            Why Partner with Maximo?
                        </H2>
                    </div>

                    <div className="flex w-full gap-16 flex-wrap">
                        <div className="flex flex-col gap-4 max-w-[338px]">
                            <SubtitleSmall>
                                Why Partner with Maximo?
                            </SubtitleSmall>
                            <ParagraphLarge>
                                Provide customers with premium, architectural-grade hardwoods and innovative thermally modified wood solutions for any project, indoors or out.
                            </ParagraphLarge>
                        </div>
                        <div className="flex flex-col gap-4 max-w-[338px]">
                            <SubtitleSmall>
                                Why Partner with Maximo?
                            </SubtitleSmall>
                            <ParagraphLarge>
                                Provide customers with premium, architectural-grade hardwoods and innovative thermally modified wood solutions for any project, indoors or out.
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

            <section className="flex bg-brand-ipe-yellow/15 w-full justify-center">
                <div className="flex max-w-screen-2xl w-full">
                    <video autoPlay loop controls src="/medias/3319184472146877331.webm" className="aspect-video w-full max-h-[848px] object-cover">
                        3319184472146877331
                    </video>
                </div>
            </section>

            <section className="flex bg-white w-full justify-center">
                <div className="flex flex-col max-w-screen-2xl px-[72px] py-[120px] w-full gap-12">
                    <div className="w-full">
                        <H2 className="max-w-[530px]">
                            Trusted by Industry Leaders
                        </H2>
                    </div>
                    <div className="flex gap-8 justify-center">
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
                </div>
            </section>

            <section className="flex bg-brand-ipe-yellow w-full justify-center">
                <div className="flex max-w-screen-2xl px-[72px] py-[120px] w-full gap-16">
                    <div className="flex flex-col gap-6 w-1/3">
                        <H2 className="text-black uppercase">
                            Ready to Be
                            a Pioneer in the Wood Industry?
                        </H2>
                        <ParagraphLarge>
                            Join our network of early adopters today and gain access to exclusive products, pricing, and support designed to build strong, lasting partnerships. Let’s grow together.
                        </ParagraphLarge>
                    </div>

                    <div>
                        form here //TODO
                    </div>
                </div>
            </section>


            <section className="flex bg-white w-full justify-center">
                <div className="flex flex-col max-w-screen-2xl px-[72px] py-[120px] w-full gap-16">
                    <H2>
                        FAQ
                    </H2>
                    <div>
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