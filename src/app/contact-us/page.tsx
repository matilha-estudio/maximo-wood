'use client'
import { Footer } from "@/components/footer/footer";
import { H1, H2, H4, H5, InputText, ParagraphLarge } from "@/components/text/Heading";
import { Button } from "@/components/ui/button";
import { Routes } from "@/enums/routes";
import { ChevronLeft, Inbox, Phone } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function ContactUs() {
    const { back, push } = useRouter();
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
                    <H1 className="max-w-[638px] max-lg:mb-6">
                      Let's Build Something Together
                    </H1>

                    <ParagraphLarge className="max-w-[638px]">
                      From finding your nearest dealer to exploring partnership opportunities and professional courses, discover how Maximo Wood supports your building journey.
                    </ParagraphLarge>
                </div>
            </section>

            <section className="flex bg-white w-full justify-center">
                <div className="flex max-w-screen-2xl  w-full">
                    <Image src={"/images/contact-us-hero.jpeg"} alt={"maximo"} width={1440} height={432} className="max-h-[432px] w-full object-cover" />
                </div>
            </section>

            <section className="flex bg-white w-full justify-center">
              <div className="flex max-w-screen-2xl lg:px-[72px] lg:py-[120px] w-full lg:gap-16 max-lg:px-6 max-lg:py-14 max-lg:flex-col">
                <div className="flex flex-col gap-6 lg:w-1/3 max-lg:mb-14">
                  <H2 className="uppercase max-lg:hidden">
                      Locate a Dealer
                  </H2>
                  <H5 className="uppercase lg:hidden">
                      Locate a Dealer
                  </H5>
                  <ParagraphLarge>
                    With our expanding network of dealers nationwide, finding a Maximo partner near you is easy. Fill out the form, and we’ll connect you to the most convenient location for your project needs.
                  </ParagraphLarge>
                  <div className="flex flex-col lg:max-w-[190px] max-lg:w-full gap-6 flex-wrap">
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
                    </div>
                </div>
                <div className="flex flex-col gap-6 lg:w-2/3 max-lg:mb-14">
                  {/* TODO add embed code form*/}
                </div>
              </div>
            </section>


            <section className="flex bg-brand-ipe-yellow w-full justify-center">
                <div className="flex justify-center max-w-screen-2xl lg:px-[72px] lg:py-[120px] w-full lg:gap-16 max-lg:px-6 max-lg:py-14 max-lg:flex-col">
                    <div className="flex flex-col items-center lg:max-w-[636px] gap-6 max-lg:mb-14">
                        <H2 className="text-black text-center max-w-[551px] uppercase max-lg:hidden">
                          Partner with Maximo Wood
                        </H2>
                        <H4 className="text-black text-center max-w-[300px] uppercase lg:hidden">
                          Partner with Maximo Wood
                        </H4>
                        <ParagraphLarge className="flex items-center max-w-[636px] w-full text-center" >
                          Be part of our mission to provide sustainable, premium-quality building materials across the United States. Join us in making high-quality wood products accessible to every project, big or small.
                        </ParagraphLarge>
                        <Button 
                          className="lg:max-w-[224px] max-lg:w-full "
                          variant="default" 
                          size="default" 
                          onClick={()=>push(Routes.becomeADealer)}
                        >
                          Become a dealer
                        </Button>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}