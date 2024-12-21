import { Ingridient, ProductItem } from "@prisma/client";
import { calcTotalPizzaPrice } from "./calc-total-pizza-price";
import { mapPizzaType, PizzaSize, PizzaType } from "../constants/pizza";

export const getPizzaDetails = (
  type: PizzaType,
  size: PizzaSize,
  items: ProductItem[],
  ingridients: Ingridient[],
  selectedIngridients: Set<number>
) => {
  const totalPrice = calcTotalPizzaPrice(
    type,
    size,
    items,
    ingridients,
    selectedIngridients
  );
  const textDetaills = `${size} см, ${mapPizzaType[type]} пицца, ингридиенты: (${selectedIngridients.size})`;

  return { totalPrice, textDetaills };
};
