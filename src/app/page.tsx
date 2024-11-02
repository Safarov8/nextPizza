// import Image from "next/image";

// import Categories from "@/components/shared/categories";
import { Container } from "@/components/shared/container";
// import SortPopup from "@/components/shared/sort-popup";
import { Title } from "@/components/shared/title";
import TopBar from "@/components/shared/top-bar";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="">
      <Container className="mt-10 ">
        <Title text="Все пиццы" size="lg" className="font-extrabold " />
      </Container>
      <TopBar />
      <Container className=" pb-14 ">
        {/* фильтрация */}

        <div className="flex gap-[60px]">
          <div className="w-[250px]">
            {/* <Filters /> */}
          </div>

          {/* Список товаров */}

          <div className="flex-1">
            <div className="flex flex-col gap-16">
              {/* <ProductsGroupList title="Пиццы" items={[1, 2, 3, 4, 5]} />
              <ProductsGroupList title="Комбо" items={[1, 2, 3, 4, 5]} /> */}
              Список товаров
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
