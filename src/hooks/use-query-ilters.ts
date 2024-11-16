import { useEffect } from "react";

export const useQueryFiltesr = (filters: ) => {
  useEffect(() => {
    const params = {
      ...filters.prices,
      pizzaTypes: Array.from(filters.pizzaTypes),
      sizes: Array.from(filters.sizes),
      ingridients: Array.from(filters.selectedIngridients),
    };
    // для qs  того чтобы выбранные фильтры передать на роут
    const query = qs.stringify(params, {
      // это arrayFormat: 'comma',  для того чтобы дважды не повторялись переданные данные объекта
      arrayFormat: "comma",
    });
    router.push(`?${query}`, { scroll: false });
  }, []);
};
