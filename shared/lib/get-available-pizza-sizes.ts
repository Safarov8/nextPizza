import { ProductItem } from "@prisma/client";
import { pizzaSizes, PizzaType } from "../constants/pizza";
import { Variant } from "../components/shared/group-variants";

/**
 *
 * @param type
 * @param items
 * @returns
 */
export const getAvailablePizzaSizes = (
  type: PizzaType,
  items: ProductItem[]
): Variant[] => {
  const filteredPizzasByType = items.filter((item) => item.pizzaType === type); // даёт нам доступные пиццы
  const availablePizzaSizes = pizzaSizes.map((item) => ({
    // и доступные размеры
    name: item.name,
    value: item.value,
    disabled: !filteredPizzasByType.some(
      (pizza) => Number(pizza.size) === Number(item.value)
    ),
  }));

  return availablePizzaSizes;
};
