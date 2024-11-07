'use client'
import AccordionResources from "@/components/accordionResources/accordionResources";
import { Footer } from "@/components/footer/footer";
import RequestSamplesForm from "@/components/forms/requestSamples";
import ScheduleCeuForm from "@/components/forms/scheduleceu";
import { H2, H4, H5, H6, ParagraphLarge } from "@/components/text/Heading";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Resources() {
    const { back } = useRouter();
    const [showProductSamples, setShowProductSamples] = useState(true);
    return (
        <div className="relative text-brand-graphite">

            <section className="flex bg-white w-full max-lg:flex-col justify-center">
                <div className="max-lg:my-10 max-lg:ml-6 lg:hidden">
                    <ChevronLeft
                        onClick={() => back()}
                        className="cursor-pointer"
                    />
                </div>
                <div className="flex max-w-screen-2xl w-full">
                  <Image src={"/images/resources_hero.jpeg"} alt={"maximo"} width={1440} height={432} className="max-h-[432px] w-full object-cover" />
                </div>
            </section>

            <section className="flex bg-white w-full justify-center">
              <div className="flex max-w-screen-2xl lg:px-[72px] lg:pt-[120px] w-full lg:gap-16 max-lg:px-6 max-lg:pt-14 max-lg:flex-col">
                <div className="flex flex-col gap-6 lg:w-1/2 max-lg:mb-14">
                  <H2 className="uppercase max-lg:hidden">
                    Resources
                  </H2>
                  <H5 className="uppercase lg:hidden">
                    Be at the Forefront of the Wood Revolution
                  </H5>
                  <ParagraphLarge className="max-lg:hidden">
                    From product education to ordering samples, we’ve made it easy for you to have the best Maximo experience possible. If you can’t find what you’re looking for, let us know, and we’ll get back to you as soon as possible to address your needs.
                  </ParagraphLarge>

                  <ParagraphLarge className="lg:hidden">
                    Partner with Maximo Wood to lead the charge in innovative, sustainable wood solutions. Gain access to our premium products, exclusive market opportunities, and dedicated support designed to elevate your business to new heights.
                  </ParagraphLarge>
                </div>
              </div>
            </section>

            <section className="flex bg-white w-full">
              <div className="flex flex-col gap-14 max-w-screen-2xl lg:px-[72px] lg:py-[80px] max-lg:px-6 max-lg:py-14 w-full">
                <H4>
                  Hardwood
                </H4>

                <div className="max-lg:w-full">
                  {
                    HardWoodData.map((item, index) => (
                      <AccordionResources key={index} Item={item.Item} Trigger={item.Trigger} Content={item.Content} />
                    ))
                  }
                </div>
              </div>
            </section>

            <section className="flex bg-white w-full">
              <div className="flex flex-col gap-14 max-w-screen-2xl lg:px-[72px] lg:py-[80px] max-lg:px-6 max-lg:py-14 w-full">
                <H4>
                  Thermo
                </H4>

                <div className="max-lg:w-full">
                  {
                    ThermoData.map((item, index) => (
                      <AccordionResources key={index} Item={item.Item} Trigger={item.Trigger} Content={item.Content} />
                    ))
                  }
                </div>
              </div>
            </section>


            <section className="flex bg-brand-ipe-yellow w-full justify-center">
                <div className="flex flex-col w-full lg:pt-14 max-lg:pt-[14px]">
                  <div className="flex w-full lg:py-6 ">
                    <div className={`flex justify-center w-1/2 border-black ${showProductSamples?"border-b-4":"border-b"} `} onClick={()=>setShowProductSamples(true)}>
                      <H6 className="text-black cursor-pointer mb-6 max-lg:hidden">
                        Product Samples
                      </H6>
                      <div className="text-black cursor-pointer lg:mb-6 max-lg:mb-[14px] lg:hidden">
                        Product Samples
                      </div>
                    </div>
                    <div className={`flex justify-center w-1/2 border-black ${showProductSamples?"border-b":"border-b-4"} `} onClick={()=>setShowProductSamples(false)}>
                      <H6 className="text-black cursor-pointer mb-6 max-lg:hidden">
                        Schedule a CEU
                      </H6>
                      <div className="text-black cursor-pointer lg:mb-6 max-lg:mb-[14px] lg:hidden">
                      Schedule a CEU
                      </div>
                    </div>
                  </div>
                  <div className="flex w-full">
                    <div className="flex max-w-screen-2xl lg:px-[72px] lg:py-[104px] w-full lg:gap-16 max-lg:px-6 max-lg:pt-14 max-lg:flex-col">
                      {showProductSamples ?
                        <>
                          <div className="flex flex-col gap-6 lg:w-1/2 max-lg:mb-14">
                            <H2 className="text-black uppercase max-lg:hidden">
                              Request Samples
                            </H2>
                            <H5 className="text-black uppercase lg:hidden">
                              Request Samples
                            </H5>
                            <ParagraphLarge>
                              Want to experience Maximo Wood for yourself? Complete the form, and we’ll deliver a sample that lets you feel the quality firsthand. Be sure to include details about your project, so we can tailor the samples to your specific needs.
                            </ParagraphLarge>
                          </div>
                          <div className="flex flex-col gap-6 lg:w-1/2 max-lg:mb-14">
                            <RequestSamplesForm />
                          </div>
                        </>
                        :
                        <>
                          <div className="flex flex-col gap-6 lg:w-1/2 max-w-[474px] max-lg:mb-14">
                            <H2 className="text-black uppercase max-lg:hidden">
                              Schedule a CEU
                            </H2>
                            <H5 className="text-black uppercase lg:hidden">
                              Schedule a CEU
                            </H5>
                            <ParagraphLarge>
                              At Maximo Wood, we believe in not only providing high-quality products but also empowering professionals in the field. That’s why we offer a registered course with AIA CES for continuing professional education under our Maximo Thermo division:
                            </ParagraphLarge>

                            <ParagraphLarge>
                              <b className="text-black">Course Title:</b> Thermally Modified Wood as a Sustainable, Biophilic Product Choice for Architects and Designers
                            </ParagraphLarge>

                            <ParagraphLarge>
                              <b className="text-black">Credits Offered:</b> 1 LU|HSW credit
                            </ParagraphLarge>

                            <ParagraphLarge>
                              Architects and Designers can choose from the following options to complete the course at no cost: <b className="text-black">In-person Lunch and Learn, Virtual event, On-Demand Course (Accessible anytime).</b>
                            </ParagraphLarge>

                            <div className="flex max-w-[210px]">
                              <Image src={"/images/selo-schedule-ceu.png"} alt={"maximo"} width={210} height={86} className="max-h-[86px] w-full" />
                            </div>
                          </div>
                          <div className="flex flex-col gap-6 lg:w-1/2 max-lg:mb-14">
                            <ScheduleCeuForm />
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


const HardWoodData = [
  {
      Item: "1",
      Trigger: "Brochures",
      Content: <>
      <div className="flex flex-col w-full">
        <div className="flex justify-between p-4">
          <div className="flex items-center">
            Ipe product sheet
          </div>
          <div>
            <Button 
              variant="secondary" 
              size="medium" 
              onClick={()=> window.open('https://drive.google.com/file/d/1iYX-bq6HoSywKWscBTOciL_swe7kR7Oj/view?usp=sharing')}
            >
              Download file
            </Button>
          </div>
        </div>
        <div className="flex justify-between p-4 bg-[#f6ca211a]">
          <div className="flex items-center">
            Cumaru product sheet
          </div>
          <div>
            <Button 
              variant="secondary" 
              size="medium" 
              onClick={()=>window.open('https://drive.google.com/file/d/1JxvwXr1w24_fNGffBCGzUObqODtCzHM7/view?usp=sharing')}
            >
              Download file
            </Button>
          </div>
        </div>
        <div className="flex justify-between p-4">
          <div className="flex items-center">
            Ipe size and profiles
          </div>
          <div>
            <Button 
              variant="secondary" 
              size="medium" 
              onClick={()=> window.open('https://drive.google.com/file/d/1MQovYSE0mBh70kpCaHtwMWW3QN8SKVM2/view?usp=sharing')}
            >
              Download file
            </Button>
          </div>
        </div>
        <div className="flex justify-between p-4 bg-[#f6ca211a]">
          <div className="flex items-center">
            Cumaru size and profiles
          </div>
          <div>
            <Button 
              variant="secondary" 
              size="medium"
              onClick={()=>window.open('https://drive.google.com/file/d/1rYMhzUa-zmkbV4Z9u8FDVobiJfKSx8dA/view?usp=sharing')}
            >
              Download file
            </Button>
          </div>
        </div>
        <div className="flex justify-between p-4">
          <div className="flex items-center">
            Garapa size and profiles
          </div>
          <div>
            <Button 
              variant="secondary" 
              size="medium" 
              onClick={()=>window.open('https://drive.google.com/file/d/1IYTc7mdELpLTqIqAgj9UwSVjsohn6xCJ/view?usp=sharing')}
            >
              Download file
            </Button>
          </div>
        </div>
      </div>
      </>
  },
  {
      Item: "2",
      Trigger: "Best pratices",
      Content: <>
      <div className="flex flex-col w-full">
        <div className="flex justify-between p-4">
          <div className="flex items-center">
            Deck Ventilation
          </div>
          <div>
            <Button 
              variant="secondary" 
              size="medium" 
              onClick={()=>window.open('https://drive.google.com/file/d/1G5C9f6PoZ6A6fvC5ient24vS71M54AhY/view?usp=drive_link')}
            >
              Download file
            </Button>
          </div>
        </div>
        <div className="flex justify-between p-4 bg-[#f6ca211a]">
          <div className="flex items-center">
            Highest Spans Decking
          </div>
          <div>
            <Button 
              variant="secondary" 
              size="medium" 
              onClick={()=>window.open('https://drive.google.com/file/d/1zu__EOrEay5CR6DdT7FzLbkUk40mJFb9/view?usp=drive_link')}
            >
              Download file
            </Button>
          </div>
        </div>
        <div className="flex justify-between p-4">
          <div className="flex items-center">
            Mold, Mildew, and Stains on Wood Decking and Cladding
          </div>
          <div>
            <Button 
              variant="secondary" 
              size="medium" 
              onClick={()=>window.open('https://drive.google.com/file/d/1UBruwAehHCkwrx4N2bdYW0Ix2GYx6zfy/view?usp=sharing')}
            >
              Download file
            </Button>
          </div>
        </div>
        <div className="flex justify-between p-4 bg-[#f6ca211a]">
          <div className="flex items-center">
            Roof Deck and Deck Tiles Maintenance
          </div>
          <div>
            <Button 
              variant="secondary" 
              size="medium" 
              onClick={()=>window.open('https://drive.google.com/file/d/1KOs8WDBTujTzMiUpBfVGsn6KLPNLZ5rh/view?usp=drive_link')}
            >
              Download file
            </Button>
          </div>
        </div>
        <div className="flex justify-between p-4">
          <div className="flex items-center">
            Wind Uplift and Roof Deck
          </div>
          <div>
            <Button 
              variant="secondary" 
              size="medium" 
              onClick={()=>window.open('https://drive.google.com/file/d/1oD8eoS0c10jigHlQX8I0B0a16vHS-Nop/view?usp=drive_link')}
            >
              Download file
            </Button>
          </div>
        </div>
        <div className="flex justify-between p-4 bg-[#f6ca211a]">
          <div className="flex items-center">
            Mold, Mildew, and Stains on Wood Decking and Cladding
          </div>
          <div>
            <Button 
              variant="secondary" 
              size="medium" 
              onClick={()=>window.open('https://drive.google.com/file/d/1UBruwAehHCkwrx4N2bdYW0Ix2GYx6zfy/view?usp=sharing')}
            >
              Download file
            </Button>
          </div>
        </div>
        <div className="flex justify-between p-4">
          <div className="flex items-center">
            Roof Deck and Deck Tiles Maintenance
          </div>
          <div>
            <Button 
              variant="secondary" 
              size="medium" 
              onClick={()=>window.open('https://drive.google.com/file/d/1AYX5uQ6M5z2tegFNXjKRpRbiMdLPzD6z/view?usp=drive_link')}
            >
              Download file
            </Button>
          </div>
        </div>
        <div className="flex justify-between p-4 bg-[#f6ca211a]">
          <div className="flex items-center">
            Storage and Handling
          </div>
          <div>
            <Button 
              variant="secondary" 
              size="medium" 
              onClick={()=>window.open('https://drive.google.com/file/d/1IWNpLxutCgNHipTFi6kQkBmTWZ6vCoya/view?usp=drive_link')}
            >
              Download file
            </Button>
          </div>
        </div>
        <div className="flex justify-between p-4">
          <div className="flex items-center">
            Cutting and Drilling Maximo Decking
          </div>
          <div>
            <Button 
              variant="secondary" 
              size="medium" 
              onClick={()=>window.open('https://drive.google.com/file/d/13arXKvcKewzHpM5IS8lBwZUa17kkG6-W/view?usp=sharing')}
            >
              Download file
            </Button>
          </div>
        </div>
        <div className="flex justify-between p-4 bg-[#f6ca211a]">
          <div className="flex items-center">
            End Matching and Butt Joints
          </div>
          <div>
            <Button 
              variant="secondary" 
              size="medium" 
              onClick={()=> window.open('https://drive.google.com/file/d/1orDTGs-B-C0kqIm-r7OUVijqofTNkyTL/view?usp=drive_link')}
            >
              Download file
            </Button>
          </div>
        </div>
        <div className="flex justify-between p-4">
          <div className="flex items-center">
            Best Practices
          </div>
          <div>
            <Button 
              variant="secondary" 
              size="medium" 
              onClick={()=> window.open('https://drive.google.com/file/d/1pN8mqKIHPH22jqG54YVqRLI2xsIjvYyu/view?usp=drive_link')}
            >
              Download file
            </Button>
          </div>
        </div>
        <div className="flex justify-between p-4 bg-[#f6ca211a]">
          <div className="flex items-center">
            Deck Ventilation
          </div>
          <div>
            <Button 
              variant="secondary" 
              size="medium" 
              onClick={()=> window.open('https://drive.google.com/file/d/1G5C9f6PoZ6A6fvC5ient24vS71M54AhY/view?usp=drive_link')}
            >
              Download file
            </Button>
          </div>
        </div>
        <div className="flex justify-between p-4">
          <div className="flex items-center">
            Highest Spans Decking
          </div>
          <div>
            <Button 
              variant="secondary" 
              size="medium" 
              onClick={()=> window.open('https://drive.google.com/file/d/1zu__EOrEay5CR6DdT7FzLbkUk40mJFb9/view?usp=drive_link')}
            >
              Download file
            </Button>
          </div>
        </div>
        <div className="flex justify-between p-4 bg-[#f6ca211a]">
          <div className="flex items-center">
            Understanding Building Codes
          </div>
          <div>
            <Button 
              variant="secondary" 
              size="medium"
              onClick={()=> window.open('https://drive.google.com/file/d/1JaqRTQBDnaZA4N3MFg1QFdZMguoTuaXa/view?usp=drive_link')} 
            >
              Download file
            </Button>
          </div>
        </div>
        <div className="flex justify-between p-4">
          <div className="flex items-center">
            End Sealer
          </div>
          <div>
            <Button 
              variant="secondary" 
              size="medium" 
              onClick={()=> window.open('https://drive.google.com/file/d/1wkSuT7MDGgJdhFw5J8hEckW2cas6G4CH/view?usp=drive_link')} 
            >
              Download file
            </Button>
          </div>
        </div>
        <div className="flex justify-between p-4 bg-[#f6ca211a]">
          <div className="flex items-center">
            Roof Deck and Deck Tiles Maintenance
          </div>
          <div>
            <Button 
              variant="secondary" 
              size="medium" 
              onClick={()=> window.open('https://drive.google.com/file/d/1AYX5uQ6M5z2tegFNXjKRpRbiMdLPzD6z/view?usp=drive_link')} 
            >
              Download file
            </Button>
          </div>
        </div>
        <div className="flex justify-between p-4">
          <div className="flex items-center">
            Gluing Naturally Durable Hardwoods
          </div>
          <div>
            <Button 
              variant="secondary" 
              size="medium" 
              onClick={()=> window.open('https://drive.google.com/file/d/1Bmpv5BjUOnb2qn_PjxlPBKLhg7VeKZEy/view?usp=drive_link')} 
            >
              Download file
            </Button>
          </div>
        </div>
        <div className="flex justify-between p-4 bg-[#f6ca211a]">
          <div className="flex items-center">
            Wood Acclimationg and Drying
          </div>
          <div>
            <Button 
              variant="secondary" 
              size="medium" 
              onClick={()=> window.open('https://drive.google.com/file/d/1LzMANlzWiTWHON2soliMDcQc_eY3N8zn/view?usp=drive_link')} 
            >
              Download file
            </Button>
          </div>
        </div>
      </div>
      </>
  },
  {
      Item: "3",
      Trigger: "Comparative documents",
      Content: <>
      <div className="flex flex-col w-full">
        <div className="flex justify-between p-4">
          <div className="flex items-center">
            Hardwood Decking vs. Compostie Decking
          </div>
          <div>
            <Button 
              variant="secondary" 
              size="medium" 
              onClick={()=> window.open('https://drive.google.com/file/d/1GnEuyejJLnvjgd3jcKYcsq1XUK2qVPVa/view?usp=drive_link')}
            >
              Download file
            </Button>
          </div>
        </div>
        <div className="flex justify-between p-4 bg-[#f6ca211a]">
          <div className="flex items-center">
            Maximo vs. Generic Ipe Brands
          </div>
          <div>
            <Button 
              variant="secondary" 
              size="medium" 
              onClick={()=> window.open('https://drive.google.com/file/d/1eQ4U-cuR2GwPzlRoCghWKZOoQq_ZyHcf/view?usp=sharing')}
            >
              Download file
            </Button>
          </div>
        </div>
        <div className="flex justify-between p-4">
          <div className="flex items-center">
            Natural Weathering vs. Finishing Decking
          </div>
          <div>
            <Button 
              variant="secondary" 
              size="medium" 
              onClick={()=>window.open('https://drive.google.com/file/d/1eQ4U-cuR2GwPzlRoCghWKZOoQq_ZyHcf/view?usp=sharing')}
            >
              Download file
            </Button>
          </div>
        </div>
        <div className="flex justify-between p-4 bg-[#f6ca211a]">
          <div className="flex items-center">
            Maximo 4 inch vs. 6 inch Decking
          </div>
          <div>
            <Button 
              variant="secondary" 
              size="medium" 
              onClick={()=>window.open('https://drive.google.com/file/d/1sCmMwaAyHsvUTXn3UFwKmS-Z-noPVVGB/view?usp=drive_link')}
            >
              Download file
            </Button>
          </div>
        </div>
      </div>
    </>
  },
  {
      Item: "4",
      Trigger: "Technical features",
      Content: <>
      <div className="flex flex-col w-full">
        <div className="flex justify-between p-4">
          <div className="flex items-center">
            Slip Resistence
          </div>
          <div>
            <Button 
              variant="secondary" 
              size="medium" 
              onClick={()=>window.open('https://drive.google.com/file/d/1RpObQ4Cx_IDy-kEBprrV5IVutBU4oBcO/view?usp=sharing')}
            >
              Download file
            </Button>
          </div>
        </div>
        <div className="flex justify-between p-4 bg-[#f6ca211a]">
          <div className="flex items-center">
            Stringer Beam Span Tables
          </div>
          <div>
            <Button 
              variant="secondary" 
              size="medium" 
              onClick={()=>window.open('https://drive.google.com/file/d/1MQQlicNUhHh4KkolJhf5PcMw8llFlwrT/view?usp=drive_link')}
            >
              Download file
            </Button>
          </div>
        </div>
        <div className="flex justify-between p-4">
          <div className="flex items-center">
            Grading Rules
          </div>
          <div>
            <Button 
              variant="secondary" 
              size="medium" 
              onClick={()=>window.open('https://drive.google.com/file/d/1M_0nhbxRBUvqT_Ht7zb0CZBuVMZVqr9r/view?usp=sharing')}
            >
              Download file
            </Button>
          </div>
        </div>
        <div className="flex justify-between p-4 bg-[#f6ca211a]">
          <div className="flex items-center">
            Deck Surface Temperature
          </div>
          <div>
            <Button 
              variant="secondary" 
              size="medium" 
              onClick={()=>window.open('https://drive.google.com/file/d/1nZEHR3RhtaWiWVlgI1_gRxpT_l5_Gpab/view?usp=drive_link')}
            >
              Download file
            </Button>
          </div>
        </div>
      </div>
    </>
  }
];

const ThermoData = [
  {
      Item: "1",
      Trigger: "Brochures",
      Content: <>
      <div className="flex flex-col w-full">
        <div className="flex justify-between p-4">
          <div className="flex items-center">
            Ayous Data Sheet
          </div>
          <div>
            <Button 
              variant="secondary" 
              size="medium"
              onClick={()=>window.open('https://drive.google.com/file/d/1nhtK2ZD6LEV85oCaU9NUPO_Si3l8ipJw/view?usp=drive_link')}
            >
              Download file
            </Button>
          </div>
        </div>
        <div className="flex justify-between p-4 bg-[#f6ca211a]">
          <div className="flex items-center">
            Ayous Size and profiles
          </div>
          <div>
            <Button 
              variant="secondary" 
              size="medium" 
              onClick={()=>window.open('https://drive.google.com/file/d/1vlYf9pnwPRiZOGpfOH82RAOOguIwNqtR/view?usp=sharing')}
            >
              Download file
            </Button>
          </div>
        </div>
        <div className="flex justify-between p-4">
          <div className="flex items-center">
            Ash Data Sheet
          </div>
          <div>
            <Button 
              variant="secondary" 
              size="medium" 
              onClick={()=>window.open('https://drive.google.com/file/d/1XNMztPTWdLjnbUROaVLWlzQBm0aFgwvo/view?usp=drive_link')}
            >
              Download file
            </Button>
          </div>
        </div>
        <div className="flex justify-between p-4 bg-[#f6ca211a]">
          <div className="flex items-center">
            Ash Size and profiles
          </div>
          <div>
            <Button 
              variant="secondary" 
              size="medium" 
              onClick={()=>window.open('https://drive.google.com/file/d/1_TIY1LQ_p5LcDZ2fsZdH6pprjh45vK5w/view?usp=sharing')}
            >
              Download file
            </Button>
          </div>
        </div>
        <div className="flex justify-between p-4">
          <div className="flex items-center">
            Scandinavian Data Sheet
          </div>
          <div>
            <Button 
              variant="secondary" 
              size="medium" 
              onClick={()=>window.open('https://drive.google.com/file/d/1_B1D419pg2Xo78hYLt_xBYf5KHd-3cX7/view?usp=drive_link')}
            >
              Download file
            </Button>
          </div>
        </div>
        <div className="flex justify-between p-4 bg-[#f6ca211a]">
          <div className="flex items-center">
            Scandinavian Size and profiles
          </div>
          <div>
            <Button 
              variant="secondary" 
              size="medium" 
              onClick={()=>window.open('https://drive.google.com/file/d/1CT4Zi-iNjC4acUzpK8iTLgXD9q4v6LQ-/view?usp=sharing')}
            >
              Download file
            </Button>
          </div>
        </div>
        <div className="flex justify-between p-4">
          <div className="flex items-center">
            Clear Radiata Data Sheet
          </div>
          <div>
            <Button 
              variant="secondary" 
              size="medium" 
              onClick={()=>window.open('https://drive.google.com/file/d/1vgvRLyY3Po_xwuasWDn5BVJAjjmh5OL2/view?usp=drive_link')}
            >
              Download file
            </Button>
          </div>
        </div>
        <div className="flex justify-between p-4 bg-[#f6ca211a]">
          <div className="flex items-center">
            Clear Radiata Process Sheet
          </div>
          <div>
            <Button 
              variant="secondary" 
              size="medium" 
              onClick={()=>window.open('https://drive.google.com/file/d/1r3SZWWIwR3QikE7QFk63ph4iGISKm4X2/view?usp=drive_link')}
            >
              Download file
            </Button>
          </div>
        </div>
        <div className="flex justify-between p-4">
          <div className="flex items-center">
            Clear Radiata Size and profiles
          </div>
          <div>
            <Button 
              variant="secondary" 
              size="medium" 
              onClick={()=>window.open('https://drive.google.com/file/d/12YTWeJa9Ahnfm3mO8mQLnSIVnpIoJrpf/view?usp=sharing')}
            >
              Download file
            </Button>
          </div>
        </div>
        <div className="flex justify-between p-4 bg-[#f6ca211a]">
          <div className="flex items-center">
            Clear Radiata OPX Treatment
          </div>
          <div>
            <Button 
              variant="secondary" 
              size="medium" 
              onClick={()=>window.open('https://drive.google.com/file/d/1bF3cvk58D7wm9eKOvYvCkDvX6LjvBUJW/view?usp=drive_link')}
            >
              Download file
            </Button>
          </div>
        </div>
      </div>
      </>
  },
  {
      Item: "2",
      Trigger: "Best pratices",
      Content: <>
      <div className="flex flex-col w-full">
        <div className="flex justify-between p-4">
          <div className="flex items-center">
            Installation Guide - Siding
          </div>
          <div>
            <Button 
              variant="secondary" 
              size="medium" 
              onClick={()=>window.open('https://drive.google.com/file/d/1CZYZ_XKiqsVyw0CT14jcnvUUN5Wrc9w0/view?usp=drive_link')}
            >
              Download file
            </Button>
          </div>
        </div>
        <div className="flex justify-between p-4 bg-[#f6ca211a]">
          <div className="flex items-center">
            FAQs - Siding
          </div>
          <div>
            <Button 
              variant="secondary" 
              size="medium" 
              onClick={()=>window.open('https://drive.google.com/file/d/16BWt0EarnAw3OyUge5195uijPjik3Ank/view?usp=drive_link')}
            >
              Download file
            </Button>
          </div>
        </div>
      </div>
      </>
  }
]