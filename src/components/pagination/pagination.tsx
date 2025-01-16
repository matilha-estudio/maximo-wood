/* eslint-disable @typescript-eslint/no-explicit-any */
import { MoveDown, MoveLeft, MoveRight } from "lucide-react";
import { Button } from "../ui/button";

export interface IPagination {
  currentPage: number,
  totalItems: number,
  itemsPerPage: number,
  paginate: any,
  totalPages: number
}

export default function Pagination({
  currentPage,
  totalItems,
  itemsPerPage,
  paginate,
  totalPages
}: IPagination) {
  const pageNumbers = [];
  const maxPage = totalPages > 0 ? totalPages : Math.ceil(totalItems / itemsPerPage);

  for (let i = 1; i <= maxPage; i++) {
    pageNumbers.push(i);
  }

  const goToPage = (number: number) =>{
    paginate(number);
    document.getElementById('filters')?.scrollIntoView({ behavior: 'smooth' });
  }

  return (<>
    {maxPage > 1 && <>
      <div className="flex justify-center items-center max-lg:hidden">
        {currentPage > 1 &&
          <div className="cursor-pointer mr-1" onClick={()=> goToPage(currentPage -1)}>
            <MoveLeft />
          </div>
        }
        {pageNumbers.map((number)=> (
          <div key={number} className={`flex justify-center items-center w-10 h-10 ${currentPage === number && "border border-black rounded-full"} cursor-pointer`}>
            <div onClick={()=>goToPage(number)}>
              {number}
            </div>
          </div>
        ))}
        {currentPage !== pageNumbers.length &&
          <div className="cursor-pointer ml-1" onClick={()=> goToPage(currentPage + 1)}>
            <MoveRight className="h-5 w-5" />
          </div>
        }
      </div>
      {currentPage !== pageNumbers.length &&
        <div className="flex justify-center items-center lg:hidden">
          <Button
            className="w-full max-w-[312px] flex justify-between"
            variant="secondary" 
            size="medium"
            onClick={()=> paginate(currentPage + 1, true)}
          >
            <div className="w-full">
              More products
            </div>
            <MoveDown className="h-5 w-5" />
          </Button>
        </div>
      }
    </>
    }
  </>);
}
