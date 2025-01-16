'use client'
import { Footer } from "@/components/footer/footer";
import LocateDealerForm from "@/components/forms/locateDealer";
import { H1, H2, H4, H5, InputText, ParagraphLarge } from "@/components/text/Heading";
import { Button } from "@/components/ui/button";
import { Routes } from "@/enums/routes";
import { getContactUs } from "@/services";
import { ContactUsData } from "@/services/models";
import { ChevronLeft, Inbox, Phone } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function ContactUs() {
    const { back, push } = useRouter();
    const [pageDetails, setPageDetails] = useState<ContactUsData>();

    useEffect(()=>{
      const init = async ()=>{
        const resp = await getContactUs();
        setPageDetails(resp);
      }
      init();
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
                    <H1 className="max-w-[638px] max-lg:mb-6">
                      {pageDetails.title}
                    </H1>

                    <ParagraphLarge className="max-w-[638px]">
                      {pageDetails.text}
                    </ParagraphLarge>
                </div>
            </section>

            <section className="flex bg-white w-full justify-center">
                <div className="flex max-w-screen-2xl  w-full">
                    <Image src={pageDetails.image} alt={"maximo"} width={1440} height={432} className="max-h-[432px] w-full object-cover" />
                </div>
            </section>

            <section className="flex bg-white w-full justify-center">
              <div className="flex max-w-screen-2xl lg:px-[72px] lg:py-[120px] w-full lg:gap-16 max-lg:px-6 max-lg:py-14 max-lg:flex-col">
                <div className="flex flex-col gap-6 lg:w-1/3 max-lg:mb-14">
                  <H2 className="uppercase max-lg:hidden">
                    {pageDetails.locate_dealer.title}
                  </H2>
                  <H5 className="uppercase lg:hidden">
                    {pageDetails.locate_dealer.title}
                  </H5>
                  <ParagraphLarge>
                    {pageDetails.locate_dealer.text}
                  </ParagraphLarge>
                  <div className="flex flex-col lg:max-w-[190px] max-lg:w-full gap-6 flex-wrap">
                        <InputText className="flex gap-4 items-center">
                            <Phone className="fill-current" />
                            <a href="">
                              {pageDetails.locate_dealer.phone}
                            </a>
                        </InputText>
                        <InputText className="flex gap-4 items-center">
                            <Inbox />
                            <a href={`mailto:${pageDetails.locate_dealer.mail}`}>
                              {pageDetails.locate_dealer.mail}
                            </a>
                        </InputText>
                    </div>
                </div>
                <div className="flex flex-col gap-6 lg:w-2/3 max-lg:mb-14">
                  <LocateDealerForm formId={pageDetails.locate_dealer.hubspot_form_id} portalId={pageDetails.locate_dealer.hubspot_portal_id} />
                </div>
              </div>
            </section>


            <section className="flex bg-brand-ipe-yellow w-full justify-center">
                <div className="flex justify-center max-w-screen-2xl lg:px-[72px] lg:py-[120px] w-full lg:gap-16 max-lg:px-6 max-lg:py-14 max-lg:flex-col">
                    <div className="flex flex-col items-center lg:max-w-[636px] gap-6 max-lg:mb-14">
                        <H2 className="text-black text-center max-w-[551px] uppercase max-lg:hidden">
                          {pageDetails.partner_maximo_wood.title}
                        </H2>
                        <H4 className="text-black text-center max-w-[300px] uppercase lg:hidden">
                          {pageDetails.partner_maximo_wood.title}
                        </H4>
                        <ParagraphLarge className="flex items-center max-w-[636px] w-full text-center" >
                          {pageDetails.partner_maximo_wood.text}
                        </ParagraphLarge>
                        <Button 
                          className="lg:max-w-[224px] max-lg:w-full "
                          variant="default" 
                          size="default" 
                          onClick={()=>push(Routes.becomeADealer)}
                        >
                          Become a Dealer
                        </Button>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}