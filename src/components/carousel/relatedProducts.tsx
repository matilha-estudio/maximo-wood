import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"
import { Product } from "@/products/types";
import { ProductCard } from "../productCard/productCard";


interface IProductsCard {
  products: Product[],
  limit: number,
}

export function RelatedProducts(props: IProductsCard) {
    return (
      <div className="w-full">
        <Carousel>
          <CarouselContent className="-ml-2">
            {
              props.products && props.products.slice(0, (props.limit || 1)).map((item, index) => (
                <CarouselItem key={index} className="basis-2/1 pl-0">
                  <ProductCard key={index} product={item} />
                </CarouselItem>
              ))
            }
          </CarouselContent>
        </Carousel>
      </div>
    )
}