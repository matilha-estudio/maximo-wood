'use client'
import { H5, ParagraphLarge } from "@/components/text/Heading";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Routes } from "@/enums/routes";
import { ProductSamplesDto } from "@/services/models";
import { useEffect, useState } from "react";
import { getProductSamples } from "@/services";

export default function ProductSamples() {
    const [productSamples, setProductSamples] = useState<ProductSamplesDto>()
    const { push } = useRouter();

    useEffect(()=>{
      const init = async () => {
        const response = await getProductSamples();
        setProductSamples(response);
      }
  
      init();
    },[])

    return (productSamples &&
      <section className="flex bg-brand-ipe-yellow/15 w-full justify-center">
      <div className="flex justify-center items-center max-w-screen-2xl w-full md:py-[120px] md:px-[72px] gap-8 max-lg:px-6 max-lg:py-14 max-lg:flex-col">
        <Image 
          className="max-lg:max-h-[286px] max-lg:max-w-[360px]" 
          src={productSamples.image} 
          alt={"wood_draw"} 
          width={709} 
          height={561} 
        />
        <div className="flex flex-col items-center gap-8 max-w-[453px] text-center">
          <H5 className="text-[#3F3E3E]">
            {productSamples.title}
          </H5>
          <ParagraphLarge className="text-[#3F3E3E]">
            {productSamples.text}
          </ParagraphLarge>
          <Button className="w-fit max-lg:w-full" onClick={()=>push(Routes.resourcesSamples)}>
            Order samples
          </Button>
        </div>
      </div>
    </section>
    );
}
