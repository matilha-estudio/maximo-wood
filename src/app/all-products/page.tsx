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
  { value: "Thermo" , label: "Thermowood" }, 
  { value: "Hardwood", label: "Hardwood" }, 
  { value: null, label: "All Materials" }
];

const itensApplication = [
  { value: "Siding&Cladding" , label: "Siding & Cladding" },
  { value: "Decking" , label: "Decking" },
  { value: "DeckTiles" , label: "Deck Tile" },
  { value: "Posts&Beams" , label: "Posts and Beams" },
  { value: "Fencing" , label: "Fencing" },
  { value: "Pergolas" , label: "Pergolas" },
  { value: "WoodTrim" , label: "Wood Trim" },
  { value: null , label: "All application" },
];

const itensCollection = [
  { value: "Narrow" , label: "Decking - Narrow" },
  { value: "Standard" , label: "Decking - Standard" },
  { value: "Narrow1" , label: "Walls & ceillings - Narrow" },
  { value: "Standard1" , label: "Walls & ceillings - Standard" },
  { value: "UltraWide" , label: "Decking - Ultra Wide" },
  { value: null , label: "All collections" },
];

export default function Products() {
    const LIST_PRODUCTS = HardWoodList.concat(ThermoWoodProducts)
    const [listaProdutos, setListaProdutos] = useState(HardWoodList.concat(ThermoWoodProducts))
    const [totalPages, setTotalPages] = useState(LIST_PRODUCTS.length || 0);
    const { back } = useRouter();
    const [currentPage, setCurrentPage] = useState(1);
    const [hash, setHash] = useState('');
    const [listPage, setListPage] = useState<Product[]>([]);
    const [filters, setFilters] = useState<IFilters>({ 
      TYPEOFWOOD: null, APPLICATION: null, COLLECTION: null
    });

    useEffect(() => {
      const timer = setInterval(() => {
        const newHash = window.location.hash.replace('#', '');
        if (newHash !== hash || hash === '') {
          if(newHash){
            if(
              newHash === 'siding' || 
              newHash === 'decking' ||
              newHash === 'decktiles' ||
              newHash === 'posts&beams' ||
              newHash === 'facades' ||
              newHash === 'pergolas' ||
              newHash === 'fencing' ||
              newHash === 'woodtrim'
            ){
              onChangeFilter(newHash === 'siding' ? 'Siding & Cladding' : newHash, 'Application', true)
            }
            if(newHash === 'narrow' || newHash === 'standard' || newHash === 'ultra'){
              onChangeFilter(newHash === 'ultra' ? 'Ultra Wide' : newHash, 'Collection', true)
            }
          }
        }
        setHash(newHash)
      }, 1000);
      return () => {
        clearInterval(timer);
      }
    }, [hash]);

    useEffect(()=>{
      pagination(1);
    },[])

    
    const pagination = (pageNumber: number, isMobile = false, lista?: Product[]) => {
      let listaToMap = lista || LIST_PRODUCTS
      const possuiFiltro = filters.APPLICATION || filters.COLLECTION || filters.TYPEOFWOOD;
      if(possuiFiltro && !lista){
        listaToMap = [...listaProdutos];
      }

      const minPage = pageNumber;
      const maxPage = Math.ceil(listaToMap?.length / itemsPerPage)
      if(lista || possuiFiltro){
        setTotalPages(maxPage);
        document.getElementById('filters')?.scrollIntoView({ behavior: 'smooth' });
      } else{
        setTotalPages(Math.ceil(LIST_PRODUCTS?.length / itemsPerPage))
      }

      if(minPage >= 1 && maxPage >= pageNumber){
        const indexOfLastItem = pageNumber * itemsPerPage;
        const indexOfFirstItem = indexOfLastItem - itemsPerPage;
        const newList = listaToMap?.slice(indexOfFirstItem, indexOfLastItem);
        if(isMobile){
          setListPage(current => ([...current, ...newList]));
        }else{
          setListPage(newList);
        }
        setCurrentPage(pageNumber);
      }
    }

    const onChangeFilter = (value: string, label: string, init = false) => {
      const labelTrim = label.replaceAll(' ', '').toUpperCase();
      let newFilters = null;
      if(init){
        newFilters = { TYPEOFWOOD: null, APPLICATION: null, COLLECTION: null, [labelTrim]: value?.replaceAll(' ', '').replace('1', '').toUpperCase() || null}
      }else {
        newFilters = {...filters, [labelTrim]: value?.replaceAll(' ', '').replace('1', '').toUpperCase() || null};
      }

      const newList = LIST_PRODUCTS.filter(item => {
        const matchesTypeOfWood = !newFilters.TYPEOFWOOD || 
          item.tag.material.replaceAll(' ', '').toUpperCase() === newFilters.TYPEOFWOOD;
    
        const matchesCollection = !newFilters.COLLECTION || 
          item.tag.collection.replaceAll(' ', '').toUpperCase() === newFilters.COLLECTION;
    
        const matchesApplication = !newFilters.APPLICATION || 
          item.tag.application.some(app => app.replaceAll(' ', '').toUpperCase() === newFilters.APPLICATION);
    
        return matchesTypeOfWood && matchesCollection && matchesApplication;
      });
      if(newList.length === 0){
        setListPage([])
      }
      if(newList.length === LIST_PRODUCTS.length){
        pagination(1, false, LIST_PRODUCTS)
      } else {
        setListaProdutos(newList);
        pagination(1,false, newList)
      }
      setFilters(newFilters);
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
                        alt="header desk"
                        width={1440}
                        height={432}
                        className="max-h-[432px] max-w-screen-2xl w-full h-full object-contain max-lg:hidden"
                    />
                    <Image
                        src={"/images/all-products/headerMobile.jpg"}
                        alt="header mobile"
                        width={1440}
                        height={432}
                        className="max-h-[432px] w-full object-cover lg:hidden" />
                </div>
            </section>

            <section className="flex bg-white w-full justify-center">
                <div className="flex flex-col max-w-screen-2xl lg:px-[72px] lg:pt-[120px] lg:pb-[80px] w-full gap-10 max-lg:px-6 max-lg:py-14">
                    <H1 className="max-w-[924px]">
                        Products
                    </H1>

                    <ParagraphLarge className="max-w-[638px]">
                        Explore our collections with peace of mind, knowing every Maximo board is sustainably sourced and chemical-free. Enhance your spaces—indoors and out—without harming your home or the planet. This is wood elevated to the max.
                    </ParagraphLarge>
                </div>
            </section>

            <section id='filters' className=" flex bg-white w-full justify-center">
              <div className="flex max-w-screen-2xl lg:px-[72px] w-full gap-4 max-lg:px-6 max-md:flex-col">
                <Select label="Type of wood" placeholder="All materials" value={filters.TYPEOFWOOD || '' } onChange={onChangeFilter} lista={itensTypeWood}/>
                <Select label="Application" placeholder="All application" value={filters.APPLICATION || '' } onChange={onChangeFilter} lista={itensApplication}/>
                <Select label="Collection" placeholder="All collections" value={filters.COLLECTION || '' } onChange={onChangeFilter} lista={itensCollection} />
              </div>
            </section>

            <section className="flex bg-white w-full justify-center">
                <div className="flex flex-col justify-center max-w-screen-2xl w-full md:py-[120px] md:px-[70px] max-lg:px-6 max-lg:py-14">

                    <div className="flex flex-wrap gap-4 w-full justify-start max-lg:justify-start mb-2">
                        {
                            listPage.map((product, index) => (
                                <ProductCard key={index} product={product} />
                            ))
                        }
                    </div>
                    {listPage.length > 0 &&
                      <Pagination 
                        itemsPerPage={itemsPerPage}
                        totalItems={LIST_PRODUCTS?.length || 0}
                        currentPage={currentPage}
                        paginate={pagination}    
                        totalPages={totalPages}
                      />
                    }
                </div>
            </section>

            <ProductSamples />

            <Footer />
        </div >
    );
}
