import { Ingridient } from "@prisma/client";
import { mapPizzaType, PizzaSize, PizzaType } from "../constants/pizza";
// import { CartStateItem } from "./get-cart-details";
export const getCartItemDetails = (
  pizzaType: PizzaType,
  pizzaSize: PizzaSize,
  ingridients: Ingridient[]
): string => {
  const details = [];

  if (pizzaSize && pizzaType) {
    const typeName = mapPizzaType[pizzaType];
    details.push(`${typeName} ${pizzaSize} см`);
  }

  if (ingridients) {
    details.push(...ingridients.map((ingredient) => ingredient.name));
  }

  return details.join(", ");
};
