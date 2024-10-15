'use client'
import Navbar from "@/components/navbar/navbar";
import { H1, H2, ParagraphLarge, ParagraphMedium } from "@/components/text/Heading";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative">
      <Navbar />
      <section className="flex bg-neutral-1000 w-full justify-center">
        <div className="flex max-w-screen-2xl px-[72px] pt-[56px]">
          <div className="text-white w-full flex flex-col gap-9 justify-center">
            <H1 className="text-white">
              The Wood
              That Sets
              the Standard
            </H1>
            <ParagraphMedium className="max-w-[465px]">
              Maximo combines decades of natural resilience with advanced thermal innovation, offering wood that stands the test of time—in any climate, for any project.
            </ParagraphMedium>
            <Button className="gap-1 w-fit bg-white text-neutral-1000">
              Our Materials
              <ArrowRight />
            </Button>
          </div>
          <Image
            src={"/images/grant-ritchie-FBkrQhnLQoY-unsplash.png"}
            alt="logo"
            width={688}
            height={688}
            className="max-w-[688px] w-full h-full"
          />
        </div>
      </section>

      <section className="flex bg-white w-full justify-center">
        <div className="flex max-w-screen-2xl px-[72px] py-[120px]">
          <ParagraphLarge>
            Every Maximo board is handpicked for quality, sustainability, and unmatched stability. Our range includes both timeless hardwoods and thermally modified woods, giving you the flexibility to choose between classic beauty and modern performance. With Maximo, you’re not just choosing wood—you’re choosing a legacy of craftsmanship, built for the future. Explore the possibilities and discover the wood that redefines excellence.
          </ParagraphLarge>
        </div>
      </section>
    </div>
  );
}
