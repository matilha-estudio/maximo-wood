/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import AccordionResources from "@/components/accordionResources/accordionResources";
import { Footer } from "@/components/footer/footer";
import RequestSamplesForm from "@/components/forms/requestSamples";
import ScheduleCeuForm from "@/components/forms/scheduleceu";
import { H2, H4, H5, H6, ParagraphLarge } from "@/components/text/Heading";
import { Button } from "@/components/ui/button";
import { getResources } from "@/services";
import { ResourceData } from "@/services/models";
import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import { useRouter } from 'next/navigation';
import { useEffect, useState } from "react";

export default function Resources() {
    const { back } = useRouter();
    const [showProductSamples, setShowProductSamples] = useState(true);
    const [hash, setHash] = useState('');
    const [pageDetails, setPageDetails] = useState<ResourceData>();

    useEffect(()=>{
      const init = async ()=> {
        const resp = await getResources();
        setPageDetails(resp)
        console.log(resp)
      }
      init();
    },[])



    useEffect(() => {
      const timer = setInterval(() => {
        const newHash = window.location.hash.replace('#', '');
        if (newHash !== hash || hash === '') {
          if (newHash === 'scheduleceu') {
            setShowProductSamples(false);
          } else {
            setShowProductSamples(true);
          }
          document.getElementById(newHash)?.scrollIntoView({ behavior: 'smooth' });
        }
        setHash(newHash)
      }, 1000);
      return () => {
        clearInterval(timer);
      }
    }, [hash]);
    
    return (pageDetails &&
        <div className="relative text-brand-graphite">
            <section className="flex bg-white w-full max-lg:flex-col justify-center">
                <div className="max-lg:my-10 max-lg:ml-6 lg:hidden">
                    <ChevronLeft
                        onClick={() => back()}
                        className="cursor-pointer"
                    />
                </div>
                <div className="flex max-w-screen-2xl w-full">
                  <Image src={pageDetails.heroImage} alt={"maximo"} width={1440} height={432} className="max-h-[432px] w-full object-cover" />
                </div>
            </section>

            <section className="flex bg-white w-full justify-center">
              <div className="flex max-w-screen-2xl lg:px-[72px] lg:pt-[120px] w-full lg:gap-16 max-lg:px-6 max-lg:pt-14 max-lg:flex-col">
                <div className="flex flex-col gap-6 lg:w-1/2 max-lg:mb-14">
                  <H2 className="uppercase max-lg:hidden">
                    {pageDetails.title}
                  </H2>
                  <H5 className="uppercase lg:hidden">
                    {pageDetails.title}
                  </H5>
                  <ParagraphLarge className="max-lg:hidden">
                    {pageDetails.subtitle}
                  </ParagraphLarge>

                  <ParagraphLarge className="lg:hidden">
                    {pageDetails.subtitle}
                  </ParagraphLarge>
                </div>
              </div>
            </section>

            <section id='hardwood' className="flex justify-center bg-white w-full">
              <div className="flex flex-col gap-14 max-w-screen-2xl lg:px-[72px] lg:py-[80px] max-lg:px-6 max-lg:py-14 w-full">
                <H4>
                  Hardwood
                </H4>

                <div className="max-lg:w-full">
                  {
                    pageDetails.hardwood.map((item: any, index)=> (
                      <AccordionResources key={index} 
                        Item={`${index}`} 
                        Trigger={item.title} 
                        Content={
                        <div className="flex flex-col w-full">
                          {item.files.map((file: any, i: number)=>(
                            <div key={i} className={`flex justify-between p-4 ${i % 2 === 0 && 'bg-[#f6ca211a]' }`}>
                              <div className="flex items-center">
                                {file.text}
                              </div>
                              <div>
                                <Button 
                                  variant="secondary" 
                                  size="medium" 
                                  onClick={()=> window.open(`${file.file}`)}
                                >
                                  Download file
                                </Button>
                              </div>
                            </div>
                          ))}
                        </div>
                        } 
                      />
                    ))
                  }
                </div>
              </div>
            </section>

            <section id='thermo' className="flex justify-center bg-white w-full">
              <div className="flex flex-col gap-14 max-w-screen-2xl lg:px-[72px] lg:py-[80px] max-lg:px-6 max-lg:py-14 w-full">
                <H4>
                  Thermo
                </H4>

                <div className="max-lg:w-full">
                  {
                    pageDetails.thermo.map((item: any, index)=> (
                      <AccordionResources key={index} 
                        Item={`${index}`} 
                        Trigger={item.title} 
                        Content={
                        <div className="flex flex-col w-full">
                          {item.files.map((file: any, i: number)=>(
                            <div key={i} className={`flex justify-between p-4 ${i % 2 === 0 && 'bg-[#f6ca211a]' }`}>
                              <div className="flex items-center">
                                {file.text}
                              </div>
                              <div>
                                <Button 
                                  variant="secondary" 
                                  size="medium" 
                                  onClick={()=> window.open(`${file.file}`)}
                                >
                                  Download file
                                </Button>
                              </div>
                            </div>
                          ))}
                        </div>
                        } 
                      />
                    ))
                  }
                </div>
              </div>
            </section>


            <section className="flex bg-brand-ipe-yellow w-full justify-center">
                <div className="flex flex-col w-full lg:pt-14 max-lg:pt-[14px]">
                  <div className="flex w-full lg:py-6 ">
                    <div id='samples' className={`flex justify-center w-1/2 border-black ${showProductSamples?"border-b-4":"border-b"} `} onClick={()=>setShowProductSamples(true)}>
                      <H6 className="text-black cursor-pointer mb-6 max-lg:hidden">
                        {pageDetails.product_samples.title}
                      </H6>
                      <div className="text-black cursor-pointer lg:mb-6 max-lg:mb-[14px] lg:hidden">
                        {pageDetails.product_samples.title}
                      </div>
                    </div>
                    <div id='scheduleceu' className={`flex justify-center w-1/2 border-black ${showProductSamples?"border-b":"border-b-4"} `} onClick={()=>setShowProductSamples(false)}>
                      <H6 className="text-black cursor-pointer mb-6 max-lg:hidden">
                        {pageDetails.schedule_ceu.title}
                      </H6>
                      <div className="text-black cursor-pointer lg:mb-6 max-lg:mb-[14px] lg:hidden">
                        {pageDetails.schedule_ceu.title}
                      </div>
                    </div>
                  </div>
                  <div className="flex w-full">
                    <div className="flex max-w-screen-2xl lg:px-[72px] lg:py-[104px] w-full lg:gap-16 max-lg:px-6 max-lg:pt-14 max-lg:flex-col">
                      {showProductSamples ?
                        <>
                          <div className="flex flex-col gap-6 lg:w-1/2 max-lg:mb-14">
                            <H2 className="text-black uppercase max-lg:hidden">
                              {pageDetails.product_samples.title}
                            </H2>
                            <H5 className="text-black uppercase lg:hidden">
                              {pageDetails.product_samples.title}
                            </H5>
                            <ParagraphLarge>
                              {pageDetails.product_samples.text}
                            </ParagraphLarge>
                          </div>
                          <div className="flex flex-col gap-6 lg:w-1/2 max-lg:mb-14">
                            <RequestSamplesForm formId={pageDetails.product_samples.hubspot_form_id} portalId={pageDetails.product_samples.hubspot_portal_id} />
                          </div>
                        </>
                        :
                        <>
                          <div className="flex flex-col gap-6 lg:w-1/2 max-w-[474px] max-lg:mb-14">
                            <H2 className="text-black uppercase max-lg:hidden">
                              {pageDetails.schedule_ceu.title}
                            </H2>
                            <H5 className="text-black uppercase lg:hidden">
                              {pageDetails.schedule_ceu.title}
                            </H5>
                            <ParagraphLarge>
                              <div
                                className="[&>b]:text-black"
                                dangerouslySetInnerHTML={{
                                  __html: pageDetails.schedule_ceu.text.replaceAll('\r\n', '<br/>').replaceAll('<strong>', '<b>').replaceAll('</strong>', '</b>')
                                }}
                              />
                            </ParagraphLarge>

                            <div className="flex max-w-[210px]">
                              <Image src={"/images/selo-schedule-ceu.png"} alt={"maximo"} width={210} height={86} className="max-h-[86px] w-full" />
                            </div>
                          </div>
                          <div className="flex flex-col gap-6 lg:w-1/2 max-lg:mb-14">
                            <ScheduleCeuForm  formId={pageDetails.schedule_ceu.hubspot_form_id} portalId={pageDetails.schedule_ceu.hubspot_portal_id}/>
                          </div>
                        </>
                      }
                    </div>
                  </div>
                </div>
                
            </section>

            <Footer />
        </div>
    )
}
