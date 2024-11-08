// import Image from "next/image";

// import Categories from "@/components/shared/categories";
import { Container } from "@/components/shared/container";
import Filters from "@/components/shared/filters";
// import ProductCard from "@/components/shared/product-card";
import ProductsGroupList from "@/components/shared/products-group-list";
// import SortPopup from "@/components/shared/sort-popup";
import { Title } from "@/components/shared/title";
import TopBar from "@/components/shared/top-bar";
// import { Button } from "@/components/ui/button";


export default function Home() {
  return (
    <div className="">
      <Container className="mt-10 ">
        <Title text="Все пиццы" size="lg" className="font-extrabold " />
      </Container>
      <TopBar />
      <Container className=" pb-14 mt-10 ">
        {/* фильтрация */}

        <div className="flex gap-[80px]">
          <div className="w-[250px]">
            <Filters />
          </div>

          {/* Список товаров */}

          <div className="flex-1">
            <div className="flex flex-col gap-16">
              {/* <ProductsGroupList title="Пиццы" items={[1, 2, 3, 4, 5]} />
              <ProductsGroupList title="Комбо" items={[1, 2, 3, 4, 5]} /> */}
              {/* <ProductCard
                id={0}
                name="Пицца мацорелла"
                price={550}
                imageUrl="https://media.dodostatic.net/image/r:292x292/11EE7D61706D472F9A5D71EB94149304.avif"
              /> */}
              <ProductsGroupList
                title="Пиццы"
                categoryId={1}
                items={[
                  {
                    id: 1,
                    name: "Пицца мацорелла",
                    imageUrl : "https://media.dodostatic.net/image/r:292x292/11EE7D61706D472F9A5D71EB94149304.avif",
                    // price:{550}, 
                    items: [{price: 550}]
                  },
                  {
                    id: 2,
                    name: "Пицца Мотти",
                    imageUrl : "https://media.dodostatic.net/image/r:292x292/11EE7D61706D472F9A5D71EB94149304.avif",
                    // price:{550}, 
                    items: [{price: 550}]
                  },
                  {
                    id: 3,
                    name: "Пицца мацорелла",
                    imageUrl : "https://media.dodostatic.net/image/r:292x292/11EE7D61706D472F9A5D71EB94149304.avif",
                    // price:{550}, 
                    items: [{price: 550}]
                  },
                  {
                    id: 4,
                    name: "Пицца Мотти",
                    imageUrl : "https://media.dodostatic.net/image/r:292x292/11EE7D61706D472F9A5D71EB94149304.avif",
                    // price:{550}, 
                    items: [{price: 550}]
                  },
                  {
                    id: 5,
                    name: "Пицца мацорелла",
                    imageUrl : "https://media.dodostatic.net/image/r:292x292/11EE7D61706D472F9A5D71EB94149304.avif",
                    // price:{550}, 
                    items: [{price: 550}]
                  },
                  {
                    id: 6,
                    name: "Пицца Мотти",
                    imageUrl : "https://media.dodostatic.net/image/r:292x292/11EE7D61706D472F9A5D71EB94149304.avif",
                    // price:{550}, 
                    items: [{price: 550}]
                  },
                  {
                    id: 7,
                    name: "Пицца мацорелла",
                    imageUrl : "https://media.dodostatic.net/image/r:292x292/11EE7D61706D472F9A5D71EB94149304.avif",
                    // price:{550}, 
                    items: [{price: 550}]
                  },
                  {
                    id: 8,
                    name: "Пицца Мотти",
                    imageUrl : "https://media.dodostatic.net/image/r:292x292/11EE7D61706D472F9A5D71EB94149304.avif",
                    // price:{550}, 
                    items: [{price: 550}]
                  },
                  {
                    id: 9,
                    name: "Пицца мацорелла",
                    imageUrl : "https://media.dodostatic.net/image/r:292x292/11EE7D61706D472F9A5D71EB94149304.avif",
                    // price:{550}, 
                    items: [{price: 550}]
                  },
                  {
                    id: 10,
                    name: "Пицца Мотти",
                    imageUrl : "https://media.dodostatic.net/image/r:292x292/11EE7D61706D472F9A5D71EB94149304.avif",
                    // price:{550}, 
                    items: [{price: 550}]
                  },
                ]}
              />
              <ProductsGroupList
                title="Комбо"
                categoryId={2}
                items={[
                  {
                    id: 1,
                    name: "Пицца мацорелла",
                    imageUrl : "https://media.dodostatic.net/image/r:292x292/11EE7D61706D472F9A5D71EB94149304.avif",
                    // price:{550}, 
                    items: [{price: 550}]
                  },
                  {
                    id: 2,
                    name: "Пицца Мотти",
                    imageUrl : "https://media.dodostatic.net/image/r:292x292/11EE7D61706D472F9A5D71EB94149304.avif",
                    // price:{550}, 
                    items: [{price: 550}]
                  },
                  {
                    id: 3,
                    name: "Пицца мацорелла",
                    imageUrl : "https://media.dodostatic.net/image/r:292x292/11EE7D61706D472F9A5D71EB94149304.avif",
                    // price:{550}, 
                    items: [{price: 550}]
                  },
                  {
                    id: 4,
                    name: "Пицца Мотти",
                    imageUrl : "https://media.dodostatic.net/image/r:292x292/11EE7D61706D472F9A5D71EB94149304.avif",
                    // price:{550}, 
                    items: [{price: 550}]
                  },
                  {
                    id: 5,
                    name: "Пицца мацорелла",
                    imageUrl : "https://media.dodostatic.net/image/r:292x292/11EE7D61706D472F9A5D71EB94149304.avif",
                    // price:{550}, 
                    items: [{price: 550}]
                  },
                  {
                    id: 6,
                    name: "Пицца Мотти",
                    imageUrl : "https://media.dodostatic.net/image/r:292x292/11EE7D61706D472F9A5D71EB94149304.avif",
                    // price:{550}, 
                    items: [{price: 550}]
                  },
                  {
                    id: 7,
                    name: "Пицца мацорелла",
                    imageUrl : "https://media.dodostatic.net/image/r:292x292/11EE7D61706D472F9A5D71EB94149304.avif",
                    // price:{550}, 
                    items: [{price: 550}]
                  },
                  {
                    id: 8,
                    name: "Пицца Мотти",
                    imageUrl : "https://media.dodostatic.net/image/r:292x292/11EE7D61706D472F9A5D71EB94149304.avif",
                    // price:{550}, 
                    items: [{price: 550}]
                  },
                  {
                    id: 9,
                    name: "Пицца мацорелла",
                    imageUrl : "https://media.dodostatic.net/image/r:292x292/11EE7D61706D472F9A5D71EB94149304.avif",
                    // price:{550}, 
                    items: [{price: 550}]
                  },
                  {
                    id: 10,
                    name: "Пицца Мотти",
                    imageUrl : "https://media.dodostatic.net/image/r:292x292/11EE7D61706D472F9A5D71EB94149304.avif",
                    // price:{550}, 
                    items: [{price: 550}]
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
