'use client'
import { H5, ParagraphLarge } from "@/components/text/Heading";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function ProductSamples() {
    return (
      <section className="flex bg-brand-ipe-yellow/15 w-full justify-center">
      <div className="flex justify-center items-center max-w-screen-2xl w-full md:py-[120px] md:px-[72px] gap-8 max-lg:px-6 max-lg:py-14 max-lg:flex-col">
        <Image 
          className="max-lg:max-h-[286px] max-lg:max-w-[360px]" 
          src={"/images/wood_draw.png"} 
          alt={"wood_draw"} 
          width={709} 
          height={561} 
        />
        <div className="flex flex-col items-center gap-8 max-w-[453px] text-center">
          <H5>
            Product samples
          </H5>
          <ParagraphLarge>
            Feel the quality of Maximo Wood. Get your sample and discover the difference at your fingertips.
          </ParagraphLarge>
          <Button className="w-fit max-lg:w-full">
            Order samples
          </Button>
        </div>
      </div>
    </section>
    );
}
