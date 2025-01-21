import { mapPizzaType, PizzaSize, PizzaType } from "../constants/pizza";
import { CartStateItem } from "./get-cart-details";
export const getCartItemDetails = (
  ingridients: CartStateItem["ingredients"],
  pizzaType: PizzaType,
  pizzaSize: PizzaSize
): string => {
  const details = [];

  if (pizzaSize && pizzaType) {
    const typeName = mapPizzaType[pizzaType];
    details.push(`${typeName} ${pizzaSize} см`);
  }

  if (Array.isArray(ingridients)) {
    details.push(...ingridients.map((ingredient) => ingredient.name));
  }

  return details.join(", ");
};
