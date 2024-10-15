import React, { useState } from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import { ChevronDown } from "lucide-react";
import { SubtitleSmallBold, SubtitleSmallMedium } from "../text/Heading";
import { cn } from "@/lib/utils";

export default function Navbar() {
    const [expandedSection, setExpandedSection] = useState<string | null>(null);

    const toggleSection = (section: string) => {
        setExpandedSection(prevSection => (prevSection === section ? null : section));
    };

    return (
        <nav className="flex flex-col justify-center items-center bg-white sticky top-0 gap-9">
            {/* principal area */}
            <div className={cn("flex justify-between px-[72px] py-8 w-full max-w-screen-2xl border-neutral-1000", expandedSection && "border-b")}>
                <Image
                    src={"/logos/MAXIMO_NO_TAGLINE_LOGO_BLACK.svg"}
                    alt="logo"
                    width={199}
                    height={36.85}
                />
                <div className="flex items-center justify-center gap-10">
                    <div className="flex items-center justify-center gap-4">
                        <Button variant="link" size="medium" className="gap-1" onClick={() => toggleSection('products')}>
                            Products
                            <ChevronDown />
                        </Button>
                        <Button variant="link" size="medium" className="gap-1" onClick={() => toggleSection('inspiration')}>
                            Inspiration
                            <ChevronDown />
                        </Button>
                        <Button variant="link" size="medium" className="gap-1" onClick={() => toggleSection('resources')}>
                            Resources
                            <ChevronDown />
                        </Button>
                        <Button variant="link" size="medium" className="gap-1" onClick={() => toggleSection('where-to-buy')}>
                            Where to Buy
                            <ChevronDown />
                        </Button>
                    </div>
                    <Button variant="default" size="default">
                        Become a dealer
                    </Button>
                </div>
            </div>

            {/* collapsible area */}
            {expandedSection && (
                <div className="flex w-full max-w-screen-2xl px-[72px] h-full pb-9 gap-6">
                    <Image
                        src={"/images/grant-ritchie-FBkrQhnLQoY-unsplash.png"}
                        alt="logo"
                        width={422}
                        height={318}
                    />
                    <div className="flex gap-6 h-full w-full">
                        <div className="flex flex-col h-full border-l gap-6 border-neutral-1000 w-full max-w-[224px] pl-[18px] pb-4">
                            <SubtitleSmallBold>By Material</SubtitleSmallBold>
                            <div className="flex flex-col gap-4">
                                <Button variant="link" size="medium" className="justify-start p-0">
                                    <SubtitleSmallMedium>HardWood</SubtitleSmallMedium>
                                </Button>
                                <Button variant="link" size="medium" className="justify-start p-0">
                                    <SubtitleSmallMedium>TermoWood</SubtitleSmallMedium>
                                </Button>
                            </div>
                        </div>
                        <div className="flex flex-col h-full border-l gap-6 border-neutral-1000 w-full max-w-[224px] pl-[18px] pb-4">
                            <SubtitleSmallBold>By Application</SubtitleSmallBold>
                            <div className="flex flex-col gap-4">
                                <Button variant="link" size="medium" className="justify-start p-0">
                                    <SubtitleSmallMedium>Siding & Cladding</SubtitleSmallMedium>
                                </Button>
                                <Button variant="link" size="medium" className="justify-start p-0">
                                    <SubtitleSmallMedium>Decking</SubtitleSmallMedium>
                                </Button>
                            </div>
                        </div>
                        <div className="flex flex-col h-full border-l gap-6 border-neutral-1000 w-full max-w-[224px] pl-[18px] pb-4">
                            <SubtitleSmallBold>By Collection</SubtitleSmallBold>
                            <div className="flex flex-col gap-4">
                                <Button variant="link" size="medium" className="justify-start p-0">
                                    <SubtitleSmallMedium>Walls & Ceilings</SubtitleSmallMedium>
                                </Button>
                                <Button variant="link" size="medium" className="justify-start p-0">
                                    <SubtitleSmallMedium>Narrow</SubtitleSmallMedium>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}