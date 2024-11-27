import { cn } from "../../lib/utils";
import React, { useState } from "react";
import PizzaImage from "./pizza-image";
import { Title } from "./title";
import { Button } from "../ui";
import GroupVariants from "./group-variants";
import {
  mapPizzaType,
  PizzaSize,
  pizzaSizes,
  PizzaType,
  pizzaTypes,
} from "../../constants/pizza";
import { Ingridient, ProductItem } from "@prisma/client";
import IngridientItem from "./ingridient-item";
import { useSet } from "react-use";

type Props = {
  imageUrl: string;
  name: string;
  //   ingridients: IProduct['ingridients'];
  ingridients: Ingridient[];
  //   items?: IProduct["item"];
  items: ProductItem[];
  onClickAddCart?: VoidFunction;
};

export default function ChoosePizzaForm({
  name,
  items,
  imageUrl,
  ingridients,
  onClickAddCart,
}: Props) {
  const [size, setSize] = useState<PizzaSize>(20);
  const [type, setType] = useState<PizzaType>(1);

  const [selectedIngridients, { toggle: addIngridient }] = useSet(
    new Set<number>([])
  );

  const textDetaills = `${size} см, ${mapPizzaType[type]} пицца, ингридиенты: (${selectedIngridients.size})`;
  const pizzaPrice = items.find(
    (item) => item.pizzaType === type && item.size === size
  )?.price || 0;

  const totalIngridients = ingridients
    .filter((ingridient) => selectedIngridients.has(ingridient.id))
    .reduce((acc, ingridient) => acc + ingridient.price, 0);

  const totalPrice = pizzaPrice + totalIngridients;

  const handleClickAdd = () => {
    onClickAddCart?.();
    console.log({
      size,
      type,
      ingridients: selectedIngridients.size,
    });

    const availablePizzaSizes = items.filter((item) => item.pizzaType === type);
    console.log(items, availablePizzaSizes);
    
    
  };
  return (
    <div className={cn("flex flex-1 ")}>
      <PizzaImage imageUrl={imageUrl} size={size} />

      <div className="w-[490px] bg-[#FCFCFC] p-7 ">
        <Title text={name} size="md" className="font-extrabold mb-1" />

        {/* {console.log(ingridients)} */}

        <p className="text-gray-400 ">{textDetaills}</p>

        <div className="flex flex-col gap-[6px] mt-5 ">
          <GroupVariants
            items={pizzaSizes}
            value={String(size)}
            onClick={(value) => setSize(Number(value) as PizzaSize)}
          />
          <GroupVariants
            items={pizzaTypes}
            value={String(type)}
            onClick={(value) => setType(Number(value) as PizzaType)}
            className=" "
          />
        </div>

        <div className=" p-5 rounded-md h-[420px] overflow-auto scrollbar mt-5   ">
          <div className="grid grid-cols-3 gap-4 ">
            {ingridients.map((ingridient) => (
              <IngridientItem
                imageUrl={ingridient.imageUrl}
                name={ingridient.name}
                price={ingridient.price}
                key={ingridient.id}
                active={selectedIngridients.has(ingridient.id)}
                onClick={() => addIngridient(ingridient.id)}
              />
            ))}
          </div>
        </div>

        <Button
          onClick={handleClickAdd}
          className="h-[55px] px-10 text-base rounded-[18px] w-full mt-10"
        >
          Добавить в карзиину за {totalPrice} с
        </Button>
      </div>
    </div>
  );
}
