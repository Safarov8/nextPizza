import { cn } from "../../lib/utils";
import PizzaImage from "./pizza-image";
import { Title } from "./title";
import { Button } from "../ui";
import GroupVariants from "./group-variants";
import {
  PizzaSize,
  PizzaType,
  pizzaTypes,
} from "../../constants/pizza";
import { Ingridient, ProductItem } from "@prisma/client";
import IngridientItem from "./ingridient-item";
import { getPizzaDetails } from "../../lib";
import { usePizzaOptions } from "../../hooks/use-pizza-options";

type Props = {
  imageUrl: string;
  name: string;
  ingridients: Ingridient[];
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
  const {
    size,
    type,
    selectedIngridients,
    setSize,
    setType,
    availableSizes,
    addIngridient,
  } = usePizzaOptions(items);

  const { totalPrice, textDetaills } = getPizzaDetails(
    type,
    size,
    items,
    ingridients,
    selectedIngridients,
  );

  const handleClickAdd = () => {
    onClickAddCart?.();
  };

  return (
    <div className={cn("flex flex-1 ")}>
      <PizzaImage imageUrl={imageUrl} size={size} />

      <div className="w-[490px] bg-[#FCFCFC] p-7 ">
        <Title text={name} size="md" className="font-extrabold mb-1" />

        <p className="text-gray-400 ">{textDetaills}</p>

        <div className="flex flex-col gap-[6px] mt-5 ">
          <GroupVariants
            items={availableSizes}
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
