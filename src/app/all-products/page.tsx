/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import { Footer } from "@/components/footer/footer";
import Pagination from "@/components/pagination/pagination";
import { ProductCard } from "@/components/productCard/productCard";
import ProductSamples from "@/components/productSamples";
import { Select } from "@/components/select/select";
import { H1, ParagraphLarge } from "@/components/text/Heading";
import { HardWoodList } from "@/products/HardWoodList";
import { ThermoWoodProducts } from "@/products/ThermowoodList";
import { Product } from "@/products/types";
import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface IFilters {
  TYPEOFWOOD: string | null,
  APPLICATION: string | null,
  COLLECTION: string | null 
}

const itemsPerPage = 9;

const itensTypeWood = [
  "Thermowood", 
  "Hardwood", 
  "All Materials"
];

const itensApplication = [
  "Siding & Cladding", 
  "Decking", 
  "Deck Tile", 
  "Posts and Beams", 
  "Facades", 
  "Fencing", 
  "Pergolas", 
  "Trimming", 
  "All application"
];

const itensCollection = [
  "Narrow decking", 
  "Standard decking", 
  "Narrow walls & ceillings", 
  "Standard walls & ceillings", 
  "Ultra Wide walls & ceillings", 
  "All collections"
];



export default function Products() {
    const LIST_PRODUCTS = HardWoodList.concat(ThermoWoodProducts);
    const { back } = useRouter();
    const [currentPage, setCurrentPage] = useState(1);
    const [listPage, setListPage] = useState<Product[]>([]);
    const [filters, setFilters] = useState<IFilters>({ 
      TYPEOFWOOD: null, APPLICATION: null, COLLECTION: null
    });

    useEffect(()=>{
      pagination(1);
    },[])

    
    const pagination = (pageNumber: number, isMobile = false) => {
      const minPage = pageNumber;
      const maxPage = Math.ceil(LIST_PRODUCTS?.length / itemsPerPage)
      
      if(minPage >= 1 && maxPage >= pageNumber){
        const indexOfLastItem = pageNumber * itemsPerPage;
        const indexOfFirstItem = indexOfLastItem - itemsPerPage;
        const newList = LIST_PRODUCTS?.slice(indexOfFirstItem, indexOfLastItem);
        if(isMobile){
          setListPage(current => ([...current, ...newList]));
        }else{
          setListPage(newList);
        }
        setCurrentPage(pageNumber);
      }
    }

    const onChangeFilter = (value: string, label: string) => {
      const labelTrim = label.replaceAll(' ', '').toUpperCase();
      const newFilters = {...filters, [labelTrim]: value.replaceAll(' ', '').toUpperCase()};
      console.log(newFilters)
      const newList = LIST_PRODUCTS.filter(item => 
        ((newFilters.TYPEOFWOOD == "ALLMATERIALS" && item.tag.material) ||
        item.tag.material.replaceAll(' ', '').toUpperCase() === newFilters.TYPEOFWOOD) ||
        ((newFilters.COLLECTION == "ALLCOLLECTIONS" && item.tag.collection) ||
        item.tag.collection.replaceAll(' ', '').toUpperCase() === newFilters.COLLECTION)
      )
      console.log(newList);
      
      setFilters(newFilters);
      // list_products.tag.material === value
      console.log(value)
      console.log(LIST_PRODUCTS)
    }

    return (
        <div className="relative text-brand-graphite">
            <section className="flex bg-white w-full justify-center">
                <div className="flex flex-col max-w-screen-2xl w-full lg:gap-10 max-lg:pt-10">
                    <div className="max-lg:mb-10 max-lg:ml-6 lg:hidden">
                        <ChevronLeft
                            onClick={() => back()}
                            className="cursor-pointer"
                        />
                    </div>
                    <Image
                        src={"/images/all-products/header.png"}
                        alt="logo"
                        width={1440}
                        height={432}
                        className="max-h-[432px] max-w-screen-2xl w-full h-full object-contain max-lg:hidden"
                    />
                    <Image
                        src={"/images/all-products/headerMobile.jpg"}
                        alt="logo"
                        width={1440}
                        height={432}
                        className="max-h-[432px] w-full object-cover lg:hidden" />
                </div>
            </section>

            <section className="flex bg-white w-full justify-center">
                <div className="flex flex-col max-w-screen-2xl lg:px-[72px] lg:py-[120px] w-full gap-10 max-lg:px-6 max-lg:py-14">
                    <H1 className="max-w-[924px]">
                        Products
                    </H1>

                    <ParagraphLarge className="max-w-[638px]">
                        Explore our collections with peace of mind, knowing every Maximo board is sustainably sourced and chemical-free. Enhance your spaces—indoors and out—without harming your home or the planet. This is wood elevated to the max.
                    </ParagraphLarge>
                </div>
            </section>

            {/* 
              <div className="flex max-w-screen-2xl lg:px-[72px] w-full gap-10 max-lg:px-6">
                  <Select label="Type of wood" onChange={onChangeFilter} lista={itensTypeWood}/>
                  <Select label="Application" onChange={onChangeFilter} lista={itensApplication}/>
                  <Select label="Collection" onChange={onChangeFilter} lista={itensCollection} />
              </div>
            
            */}

            <section className="flex bg-white w-full justify-center">
                <div className="flex flex-col justify-center max-w-screen-2xl w-full md:py-[120px] md:px-[70px] max-lg:px-6 max-lg:py-14">

                    <div className="flex flex-wrap gap-8 w-full justify-center max-lg:justify-start mb-2">
                        {
                            listPage.map((product, index) => (
                                <ProductCard key={index} product={product} />
                            ))
                        }
                    </div>
                    <Pagination 
                      itemsPerPage={itemsPerPage}
                      totalItems={LIST_PRODUCTS?.length || 0}
                      currentPage={currentPage}
                      paginate={pagination} 
                      totalPages={0}            
                    />
                </div>
            </section>

            <ProductSamples />

            <Footer />
        </div >
    );
}
