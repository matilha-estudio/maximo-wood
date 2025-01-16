import Image from "next/image";
import { Caption, InputText, ParagraphMedium, TextLink } from "../text/Heading";
import { Inbox, Instagram, Phone } from "lucide-react";
import { Button } from "../ui/button";
import { Routes } from "@/enums/routes";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getFooter } from "@/services";
import { FooterData } from "@/services/models";

export function Footer() {
    const { push } = useRouter();
    const [pageDetails, setPageDetails] = useState<FooterData>();

    useEffect(()=>{
      const init = async ()=> {
        const resp = await getFooter();
        setPageDetails(resp);
      };
      init()
    },[])
    
    return (pageDetails &&
        <div className="flex flex-col items-center w-full bg-black max-lg:px-6 max-lg:pt-20">
            <div className="flex justify-between items-center max-w-screen-2xl w-full md:py-[120px] md:px-[72px] gap-8 max-lg:w-full max-lg:flex-col max-lg:items-start">
                <div className="flex gap-8 items-center text-white w-1/2 max-lg:w-full max-w-[539px] max-lg:flex-col max-lg:items-start">
                    <Image src={pageDetails.logo} alt='badge-maximo' width={191} height={224} className="cursor-pointer" />
                    <ParagraphMedium>
                      {pageDetails.text}
                    </ParagraphMedium>
                </div>

                <div className="flex gap-16 md:justify-end text-white flex-wrap max-lg:w-full max-lg:flex-col max-lg:items-start">
                    <div className="flex flex-col lg:max-w-[190px] max-lg:w-full gap-4">
                        <TextLink>
                            <div onClick={()=>push(Routes.home)}>
                              MaximoWood
                            </div>
                        </TextLink>
                        <InputText className="cursor-pointer">
                            <div onClick={()=>push(Routes.allProducts)}>
                              Products
                            </div>
                        </InputText>
                        <InputText className="cursor-pointer">
                            <div onClick={()=>push(Routes.allProjects)}>
                              Inspiration
                            </div>
                        </InputText>
                        <InputText className="cursor-pointer">
                            <div onClick={()=>push(Routes.resources)}>
                              Resources
                            </div>
                        </InputText>
                        <InputText className="cursor-pointer">
                            <div onClick={()=>push(Routes.contactus)}>
                              Where to buy
                            </div>
                        </InputText>
                    </div>

                    <div className="flex flex-col lg:max-w-[190px] max-lg:w-full gap-6 flex-wrap">
                        <TextLink>
                            Contact us
                        </TextLink>

                        <InputText className="flex gap-4 items-center">
                            <Phone className="fill-current" />
                            <a href="">
                              {pageDetails.phone}
                            </a>
                        </InputText>
                        <InputText className="flex gap-4 items-center">
                            <Inbox />
                            <a target="_blank" href={`mailto:${pageDetails.mail}`}>
                              {pageDetails.mail}
                            </a>
                        </InputText>
                        <InputText className="flex gap-4 items-center">
                            <Instagram />
                            <a target="_blank" href={`https://www.instagram.com/${pageDetails.instagram.replace('@', '').toLocaleLowerCase()}/`}>
                              {pageDetails.instagram}
                            </a>
                        </InputText>

                        <Button 
                          variant="default" 
                          size="default" 
                          className="bg-white text-neutral-1000 mt-2 max-lg:w-full"
                          onClick={() => push(Routes.becomeADealer)}
                        >
                          Become a Dealer
                        </Button>
                    </div>
                </div>
            </div>

            <div className="flex justify-center items-center w-full py-10 md:px-[72px] text-white lg:border-t border-white max-lg:flex-col max-lg:items-start max-lg:gap-6">
              <div className="flex justify-between items-center w-full max-w-screen-2xl">
                <Caption>
                  {new Date().getFullYear()} Maximo Company. All Rights Reserved.
                </Caption>
                <a href="https://www.matilha.digital/" target="_blank">
                  <Image src='/logos/badge-matilha.svg' alt='badge-matilha' width={164} height={28} className="cursor-pointer" />
                </a>
              </div>
            </div>
        </div>
    )
}