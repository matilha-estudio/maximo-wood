"use client"

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import { ChevronDown, Menu, X } from "lucide-react";
import { SubtitleSmallBold, SubtitleSmallMedium } from "../text/Heading";
import { cn } from "@/lib/utils";
import { Routes } from "@/enums/routes";
import ListItensMenuMobile from "./components/listItensMenuMobile";
import { useRouter } from "next/navigation";

export default function Navbar({
  children
}:{
  children: React.ReactNode;
}) {
    const [expandedSection, setExpandedSection] = useState<string | null>(null);
    const [isScrolled, setIsScrolled] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const { push } = useRouter();

    const toggleSection = (section: string) => {
      setExpandedSection(prevSection => (prevSection === section ? null : section));
    };

    // Listen for scroll events to toggle logo
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // Listen for screen width change
    useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth > 1024) {
          setShowMenu(false);
        }
      };

      if (window.innerWidth > 1024) {
        setShowMenu(false);
      }

      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

    const onClickRedirect = (page = Routes.home) => {
      setShowMenu(false);
      push(page)
    }

    const buttonsByMaterial = () => {
      return (
      <div className="flex flex-col gap-4">
          <Button variant="link" size="medium" className="justify-start p-0" onClick={()=>onClickRedirect(Routes.hardwood)}>
              <SubtitleSmallMedium>HardWood</SubtitleSmallMedium>
          </Button>
          <Button variant="link" size="medium" className="justify-start p-0" onClick={()=>onClickRedirect(Routes.thermowood)}>
              <SubtitleSmallMedium>TermoWood</SubtitleSmallMedium>
          </Button>
      </div>
      )
    }

    const buttonsByApp = () => {
      return (
        <div className="flex flex-col gap-4">
          <Button variant="link" size="medium" className="justify-start p-0">
            <SubtitleSmallMedium>Siding & Cladding</SubtitleSmallMedium>
          </Button>
          <Button variant="link" size="medium" className="justify-start p-0">
            <SubtitleSmallMedium>Decking</SubtitleSmallMedium>
          </Button>
        </div>
      )
    }

    const buttonsByCollection = () => {
      return (
        <div className="flex flex-col gap-4">
          <Button variant="link" size="medium" className="justify-start p-0">
              <SubtitleSmallMedium>Walls & Ceilings</SubtitleSmallMedium>
          </Button>
          <Button variant="link" size="medium" className="justify-start p-0">
              <SubtitleSmallMedium>Narrow</SubtitleSmallMedium>
          </Button>
        </div>
      )
    }

    const buttonsInspiration = () => {
      return (
        <div className="flex flex-col gap-4">
          <Button variant="link" size="medium" className="justify-start p-0" onClick={()=>onClickRedirect(Routes.allProjects)}>
            <SubtitleSmallMedium>Projects</SubtitleSmallMedium>
          </Button>
          <Button variant="link" size="medium" className="justify-start p-0" onClick={()=>onClickRedirect(Routes.resources)}>
            <SubtitleSmallMedium>Request Samples</SubtitleSmallMedium>
          </Button>
        </div>
      )
    }

    const buttonsResources = () => {
      return (
        <div className="flex flex-col gap-4">
          <Button variant="link" size="medium" className="justify-start p-0" onClick={()=>onClickRedirect(Routes.resources)}>
            <SubtitleSmallMedium>Schedule a ceu</SubtitleSmallMedium>
          </Button>
          <Button variant="link" size="medium" className="justify-start p-0" onClick={()=>onClickRedirect(Routes.resources)}>
            <SubtitleSmallMedium>Resources for hardwood</SubtitleSmallMedium>
          </Button>
          <Button variant="link" size="medium" className="justify-start p-0" onClick={()=>onClickRedirect(Routes.resources)}>
            <SubtitleSmallMedium>Resources for thermo</SubtitleSmallMedium>
          </Button>
          <Button variant="link" size="medium" className="justify-start p-0" onClick={()=>onClickRedirect(Routes.resources)}>
            <SubtitleSmallMedium>Request samples</SubtitleSmallMedium>
          </Button>
        </div>
      )
    }

    const buttonsWhereToBy = () =>{
      return (
        <div className="flex flex-col gap-4">
          <Button variant="link" size="medium" className="justify-start p-0" onClick={()=>onClickRedirect(Routes.contactus)}>
            <SubtitleSmallMedium>Contact us</SubtitleSmallMedium>
          </Button>
          <Button variant="link" size="medium" className="justify-start p-0" onClick={()=>onClickRedirect(Routes.becomeADealer)}>
            <SubtitleSmallMedium>Become a dealer</SubtitleSmallMedium>
          </Button>
        </div>
      )
    }

    const itensMenuMobile = [
      { 
        label: 'Products',
        content: <>
          <div className="flex flex-col h-full gap-6 border-neutral-1000 w-full max-w-[224px] pl-[18px] pb-4">
            <SubtitleSmallBold>By Material</SubtitleSmallBold>
            {buttonsByMaterial()}
          </div>
          <div className="flex flex-col h-full gap-6 border-neutral-1000 w-full max-w-[224px] pl-[18px] pb-4">
            <SubtitleSmallBold>By Application</SubtitleSmallBold>
            {buttonsByApp()}
          </div>
          <div className="flex flex-col h-full gap-6 border-neutral-1000 w-full max-w-[224px] pl-[18px] pb-4">
            <SubtitleSmallBold>By Collection</SubtitleSmallBold>
            {buttonsByCollection()}
          </div>
        </>
      },
      { 
        label: 'Inspiration', 
        content:<>
          <div className="flex flex-col h-full gap-6 border-neutral-1000 w-full max-w-[224px] pl-[18px] pb-4">
            {buttonsInspiration()}
          </div>
        </>
      },
      { 
        label: 'Resources', 
        content: <div className="flex flex-col h-full gap-6 border-neutral-1000 w-full max-w-[224px] pl-[18px] pb-4">
          {buttonsResources()}
        </div>
      },
      { 
        label: 'Where to Buy', 
        content: <div className="flex flex-col h-full gap-6 border-neutral-1000 w-full max-w-[224px] pl-[18px] pb-4">
          {buttonsWhereToBy()}
        </div>
      },
    ];

    const itensMenuDesk = {
      products: {
        image: '/images/menu/products.jpeg',
        menu: <>
        <div className="flex flex-col h-full border-l gap-6 border-neutral-1000 w-full max-w-[224px] pl-[18px] pb-4">
            <SubtitleSmallBold>By Material</SubtitleSmallBold>
            {buttonsByMaterial()}
        </div>
        <div className="flex flex-col h-full border-l gap-6 border-neutral-1000 w-full max-w-[224px] pl-[18px] pb-4">
            <SubtitleSmallBold>By Application</SubtitleSmallBold>
            {buttonsByApp()}
        </div>
        <div className="flex flex-col h-full border-l gap-6 border-neutral-1000 w-full max-w-[224px] pl-[18px] pb-4">
            <SubtitleSmallBold>By Collection</SubtitleSmallBold>
            {buttonsByCollection()}
        </div>
      </>
      },
      inspiration: {
        image: '/images/menu/inspiration.jpeg',
        menu: <>
        <div className="flex flex-col h-full border-l gap-6 border-neutral-1000 w-full max-w-[224px] pl-[18px] pb-4">
          {buttonsInspiration()}
        </div>
      </>
      },
      resources: {
        image: '/images/menu/resources.jpeg',
        menu: <>
        <div className="flex flex-col h-full border-l gap-6 border-neutral-1000 w-full max-w-[224px] pl-[18px] pb-4">
          {buttonsResources()}
        </div>
      </>
      },
      'where-to-buy': {
        image: '/images/menu/wheretoby.jpeg',
        menu: <>
        <div className="flex flex-col h-full border-l gap-6 border-neutral-1000 w-full max-w-[224px] pl-[18px] pb-4">
          {buttonsWhereToBy()}
        </div>
      </>
      },
    }

    return (<>
        <nav className={cn(`flex ${showMenu && 'h-screen'} flex-col justify-center items-center bg-white sticky top-0 gap-9 z-10`)}>
            {/* principal area */}
            <div className={cn("relative flex justify-between px-6 lg:px-[72px] py-8 w-full max-w-screen-2xl border-neutral-1000 border-b")}>
                <div className="relative flex items-center">
                    <a href={Routes.home}>
                        {/* Logo preto (inicial) */}
                        <Image
                            src={"/logos/MAXIMO_NO_TAGLINE_LOGO_BLACK.svg"}
                            alt="logo"
                            width={199}
                            height={36.85}
                            className={cn(
                                "object-contain transition-opacity duration-300 ease-in-out",
                                isScrolled ? "opacity-0" : "opacity-100"
                            )}
                        />

                        {/* Logo amarelo (scroll) */}
                        <Image
                            src={"/logos/MAXIMO_MW_LOGO_YELLOW.svg"}
                            alt="logo"
                            width={50}
                            height={56}
                            className={cn(
                                "object-contain absolute top-0 left-0 transition-opacity duration-300 ease-in-out",
                                isScrolled ? "opacity-100" : "opacity-0"
                            )}
                        />
                    </a>
                </div>
                <div className="max-lg:hidden flex items-center justify-center lg:gap-0 xl:gap-10 ">
                    <div className="flex items-center justify-center lg:gap-0 xl:gap-4">
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
                    <Button variant="default" size="default" onClick={()=>onClickRedirect(Routes.becomeADealer)}>
                      Become a dealer
                    </Button>
                </div>
                <div className="lg:hidden">
                  <Button variant="default" size="medium" onClick={()=>setShowMenu(!showMenu)}>
                    {showMenu ? <X /> : <Menu /> }
                  </Button>
                </div>
            </div>

            {showMenu &&
              <div className="lg:hidden h-full w-full flex flex-col justify-between">
                <div className="px-6 grid grid-cols-1 gap-4 justify-items-start">
                    {itensMenuMobile.map((item, index)=>(
                      <ListItensMenuMobile 
                        key={index} 
                        Item={item.label} 
                        Trigger={item.label} 
                        Content={item.content} 
                      />
                    ))}
                </div>
                
                <div className="flex justify-center w-full pb-6 px-6">
                  <Button className="w-full" variant="default" size="default" onClick={()=> onClickRedirect(Routes.becomeADealer)}>
                    Become a dealer
                  </Button>
                </div>
              </div>
            }

            {/* collapsible area */}
            {expandedSection && (
                <div className="flex w-full max-w-screen-2xl px-[72px] h-full pb-9 gap-6 max-lg:hidden">
                    <Image
                        src={itensMenuDesk[expandedSection as keyof typeof itensMenuDesk]?.image}
                        alt="logo"
                        width={422}
                        height={318}
                    />
                    <div className="flex gap-6 h-full w-full">
                        {itensMenuDesk[expandedSection as keyof typeof itensMenuDesk]?.menu}
                    </div>
                </div>
            )}
        </nav>
        {!showMenu && children}
    </>);
}