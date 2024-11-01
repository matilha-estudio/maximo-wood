import Image from "next/image";
import { Caption, InputText, ParagraphMedium, TextLink } from "../text/Heading";
import { Inbox, Instagram, Phone } from "lucide-react";
import { Button } from "../ui/button";
import { Routes } from "@/enums/routes";
import { useRouter } from "next/navigation";

export function Footer() {
    const { push } = useRouter();
    return (
        <div className="flex flex-col items-center w-full bg-black max-lg:px-6 max-lg:pt-20">
            <div className="flex justify-between items-center max-w-screen-2xl w-full md:py-[120px] md:px-[72px] gap-8 max-lg:w-full max-lg:flex-col max-lg:items-start">
                <div className="flex gap-8 items-center text-white w-1/2 max-lg:w-full max-w-[539px] max-lg:flex-col max-lg:items-start">
                    <Image src='/logos/MAXIMO_MW_LOGO_WHITE.svg' alt='badge-matilha' width={191} height={224} className="cursor-pointer" />
                    <ParagraphMedium>
                        Maximo was built to elevate wood to its maximum potential. Through our Hardwood and Thermally Modified Wood divisions, we are taking sustainable, superior lumber to new heights and democratizing it for everyone.
                    </ParagraphMedium>
                </div>

                <div className="flex gap-16 md:justify-end text-white flex-wrap max-lg:w-full max-lg:flex-col max-lg:items-start">
                    <div className="flex flex-col lg:max-w-[190px] max-lg:w-full gap-4">
                        <TextLink>
                            MaximoWood
                        </TextLink>

                        <InputText>
                            Products
                        </InputText>
                        <InputText>
                            Inspiration
                        </InputText>
                        <InputText>
                            Resources
                        </InputText>
                        <InputText>
                            Where to buy
                        </InputText>
                        <InputText>
                            Fencing
                        </InputText>
                    </div>

                    <div className="flex flex-col lg:max-w-[190px] max-lg:w-full gap-6 flex-wrap">
                        <TextLink>
                            Contact us
                        </TextLink>

                        <InputText className="flex gap-4 items-center">
                            <Phone className="fill-current" />
                            <a href="">
                                (888) 987-2224
                            </a>
                        </InputText>
                        <InputText className="flex gap-4 items-center">
                            <Inbox />
                            <a href="">
                                info@maximowood.com
                            </a>
                        </InputText>
                        <InputText className="flex gap-4 items-center">
                            <Instagram />
                            <a href="">
                                @Maximowood
                            </a>
                        </InputText>

                        <Button 
                          variant="default" 
                          size="default" 
                          className="bg-white text-neutral-1000 mt-2 max-lg:w-full"
                          onClick={() => push(Routes.becomeADealer)}
                        >
                          Become a dealer
                        </Button>
                    </div>
                </div>
            </div>

            <div className="flex justify-between items-center max-w-screen-2xl w-full py-10 md:px-[72px] text-white lg:border-t border-white max-lg:flex-col max-lg:items-start max-lg:gap-6">
              <Caption>
                2024 Maximo Company. All Rights Reserved.
              </Caption>
              <Image src='/logos/badge-matilha.svg' alt='badge-matilha' width={164} height={28} className="cursor-pointer" />
            </div>
        </div>
    )
}