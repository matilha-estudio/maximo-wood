'use client'
import { IndustryLeadersCarousel } from "@/components/carousel/industryLeaders";
import FAQAccordion from "@/components/faq/faq";
import { Footer } from "@/components/footer/footer";
import BecomeDealerForm from "@/components/forms/becomeDealer";
import { H1, H2, H3, H5, ParagraphLarge, ParagraphMedium, SubtitleSmall } from "@/components/text/Heading";
import { Accordion } from "@/components/ui/accordion";
import { getBecomeDealer } from "@/services";
import { BecaomeDealerData } from "@/services/models";
import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function BecomeADealer() {
    const { back } = useRouter();
    const [pageDetails, setPageDetails] = useState<BecaomeDealerData>();

    useEffect(()=>{
      const init = async () => {
        const resp = await getBecomeDealer();
        setPageDetails(resp);
      }
      init()
    },[])

    return (pageDetails &&
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
                        {pageDetails.title}
                    </H1>

                    <ParagraphLarge className="max-w-[638px]">
                      {pageDetails.text}
                    </ParagraphLarge>
                </div>
            </section>

            <section className="flex bg-white w-full justify-center">
                <div className="flex max-w-screen-2xl  w-full">
                    <Image src={pageDetails.image} alt={"maximo"} width={1440} height={432} className="max-h-[432px] w-full object-cover object-bottom" />
                </div>
            </section>

            <section className="flex bg-white w-full justify-center">
                <div className="flex max-w-screen-2xl lg:px-[72px] lg:py-[120px] w-full justify-end max-lg:px-6 max-lg:py-14">
                    <ParagraphLarge className="max-w-[744px]">
                      {pageDetails.second_text}
                    </ParagraphLarge>
                </div>
            </section>

            <section className="flex bg-brand-ipe-yellow/15 w-full justify-center">
                <div className="flex max-w-screen-2xl px-[72px] py-[120px] w-full lg:gap-16 max-lg:px-6 max-lg:py-14 max-lg:flex-col">
                    <div className="lg:max-w-[521px] max-lg:mb-10 flex w-full justify-center ">
                        <H2 className="uppercase max-lg:hidden">
                          {pageDetails.why_partner.title}
                        </H2>
                        <H3 className="uppercase lg:hidden">
                          {pageDetails.why_partner.title}
                        </H3>
                    </div>

                    <div className="flex w-full gap-16 lg:flex-wrap max-lg:flex-col max-lg:items-center">
                        <div className="flex flex-col gap-4 max-w-[338px]">
                            <SubtitleSmall>
                              {pageDetails.why_partner.item_1.title}
                            </SubtitleSmall>
                            <ParagraphLarge>
                              {pageDetails.why_partner.item_1.text}
                            </ParagraphLarge>
                        </div>
                        <div className="flex flex-col gap-4 max-w-[338px]">
                            <SubtitleSmall>
                              {pageDetails.why_partner.item_2.title}
                            </SubtitleSmall>
                            <ParagraphLarge>
                              {pageDetails.why_partner.item_2.text}
                            </ParagraphLarge>
                        </div>
                        <div className="flex flex-col gap-4 max-w-[338px]">
                            <SubtitleSmall>
                              {pageDetails.why_partner.item_3.title}
                            </SubtitleSmall>
                            <ParagraphLarge>
                              {pageDetails.why_partner.item_3.text}
                            </ParagraphLarge>
                        </div>
                        <div className="flex flex-col gap-4 max-w-[338px]">
                            <SubtitleSmall>
                              {pageDetails.why_partner.item_4.title}
                            </SubtitleSmall>
                            <ParagraphLarge>
                              {pageDetails.why_partner.item_4.text}
                            </ParagraphLarge>
                        </div>
                    </div>
                </div>
            </section>

            <section className="flex bg-white w-full justify-center">
                <div className="flex flex-col max-w-screen-2xl lg:px-[72px] lg:py-[120px] w-full gap-12 max-lg:px-6 max-lg:py-14">
                    <div className="w-full">
                        <H2 className="max-w-[530px] max-lg:hidden">
                          {pageDetails.trusted_industry_leaders.title}
                        </H2>
                        <H5 className="lg:hidden">
                          {pageDetails.trusted_industry_leaders.title}
                        </H5>
                    </div>
                    <div className="flex gap-8 max-lg:justify-center max-lg:hidden">
                        <div className="flex flex-col gap-8 max-w-[410px]">
                            <Image src={pageDetails.trusted_industry_leaders.item_1.image} alt="BuildersFirst" width={410} height={400} className="object-contain h-[400px]" />
                            <div>
                                <H5>
                                  {pageDetails.trusted_industry_leaders.item_1.title}
                                </H5>
                                <ParagraphMedium>
                                  {pageDetails.trusted_industry_leaders.item_1.text}
                                </ParagraphMedium>
                            </div>
                        </div>
                        <div className="flex flex-col gap-8 max-w-[410px]">
                            <Image src={pageDetails.trusted_industry_leaders.item_2.image} alt="BurtonLumber" width={410} height={400} className="object-contain h-[400px]" />
                            <div>
                                <H5>
                                  {pageDetails.trusted_industry_leaders.item_2.title}
                                </H5>
                                <ParagraphMedium>
                                  {pageDetails.trusted_industry_leaders.item_2.text}
                                </ParagraphMedium>
                            </div>
                        </div>
                        <div className="flex flex-col gap-8 max-w-[410px]">
                            <Image src={pageDetails.trusted_industry_leaders.item_3.image} alt="StringhamLumber" width={410} height={400} className="object-contain h-[400px]" />
                            <div>
                                <H5>
                                  {pageDetails.trusted_industry_leaders.item_3.title}
                                </H5>
                                <ParagraphMedium>
                                  {pageDetails.trusted_industry_leaders.item_3.text}
                                </ParagraphMedium>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center lg:hidden">
                        <IndustryLeadersCarousel
                            images={[
                              {
                                src: pageDetails.trusted_industry_leaders.item_1.image,
                                alt: "BuildersFirst",
                                width: 410,
                                height: 400,
                                title: pageDetails.trusted_industry_leaders.item_1.title,
                                subTitle: pageDetails.trusted_industry_leaders.item_1.text
                              },
                              {
                                src: pageDetails.trusted_industry_leaders.item_2.image,
                                alt: "BuildersFirst",
                                width: 410,
                                height: 400,
                                title: pageDetails.trusted_industry_leaders.item_2.title,
                                subTitle: pageDetails.trusted_industry_leaders.item_2.text
                              },
                              {
                                src: pageDetails.trusted_industry_leaders.item_3.image,
                                alt: "BuildersFirst",
                                width: 410,
                                height: 400,
                                title: pageDetails.trusted_industry_leaders.item_3.title,
                                subTitle: pageDetails.trusted_industry_leaders.item_3.text
                              },
                            ]}
                        />
                    </div>
                </div>
            </section>

            <section className="flex bg-brand-ipe-yellow w-full justify-center">
                <div className="flex max-w-screen-2xl lg:px-[72px] lg:py-[120px] w-full lg:gap-16 max-lg:px-6 max-lg:py-14 max-lg:flex-col">
                    <div className="flex flex-col gap-6 lg:w-1/3 max-lg:mb-14">
                        <H2 className="text-black uppercase max-lg:hidden">
                          {pageDetails.ready_pioneer.title}
                        </H2>
                        <H5 className="text-black uppercase lg:hidden">
                          {pageDetails.ready_pioneer.title}
                        </H5>
                        <ParagraphLarge>
                          {pageDetails.ready_pioneer.text}
                        </ParagraphLarge>
                    </div>

                    {pageDetails.ready_pioneer &&
                      <div>
                          <BecomeDealerForm formId={pageDetails.ready_pioneer.hubspot_form_id} portalId={pageDetails.ready_pioneer.hubspot_portal_id} />
                      </div>
                    }
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
                      <Accordion type="single" collapsible>
                        {
                          pageDetails.faq.map((item, index) => (
                            <FAQAccordion key={index} Item={`${index}`} Trigger={item.title} Content={item.text} />
                          ))
                        }
                      </Accordion>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}
