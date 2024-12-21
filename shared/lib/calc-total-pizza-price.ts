import { Ingridient, ProductItem } from "@prisma/client";
import { PizzaSize, PizzaType } from "../constants/pizza";

/**
 * ф-я для подсчёта общей стоимости пиццы
 * @example ``` calcTotalPizzaPRice(1, 20, items, ingridients, selectedingridients) ```
 * @param type  - тип теста выбранной пиццы
 * @param size  - размер выбранной пиццы
 * @param items  - список вариаций
 * @param ingridients  - список ингридиентов
 * @param selectedIngridients  - выбранные ингридиенты
 * @returns  number общую стоимость
 */
export const calcTotalPizzaPrice = (
  type: PizzaType,
  size: PizzaSize,
  items: ProductItem[],
  ingridients: Ingridient[],
  selectedIngridients: Set<number>
) => {
  const pizzaPrice =
    items.find((item) => item.pizzaType === type && item.size === size)?.price || 0;

  const totalIngridientPrice = ingridients
    .filter((ingridient) => selectedIngridients.has(ingridient.id))
    .reduce((acc, ingridient) => acc + ingridient.price, 0);

  return pizzaPrice + totalIngridientPrice;
};
