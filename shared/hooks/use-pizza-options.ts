'use client'
import { useEffect, useState } from "react";
import { PizzaSize, PizzaType } from "../constants/pizza";
import { Variant } from "../components/shared/group-variants";
import { useSet } from "react-use";
import { ProductItem } from "@prisma/client";
import { getAvailablePizzaSizes } from "../lib";

interface ReturnProps {
  size: PizzaSize;
  type: PizzaType;
  selectedIngridients: Set<number>;
  availableSizes: Variant[];
  setSize: (size: PizzaSize) => void;
  setType: (type: PizzaType) => void;
  addIngridient: (id: number) => void;
}

export const usePizzaOptions = (items: ProductItem[]): ReturnProps => {
  const [size, setSize] = useState<PizzaSize>(20);
  const [type, setType] = useState<PizzaType>(1);
  const [selectedIngridients, { toggle: addIngridient }] = useSet(
    new Set<number>([])
  );
  const availableSizes  = getAvailablePizzaSizes(type, items);


  // вот этот хук служит для того чтобы следить за дотупным размером, и при его наличии его переключает на этот размер
  useEffect(() => {
    const isAvailabledSize = availableSizes?.find(
      (item) => Number(item.value) === size && !item.disabled
    );
    const availableSize = availableSizes?.find((item) => !item.disabled);

    if (!isAvailabledSize && availableSize) {
      setSize(Number(availableSize.value) as PizzaSize);
    }
  }, [type]);

  return {
    size,
    type,
    selectedIngridients,
    addIngridient,
    availableSizes,
    setSize,
    setType,
  };
};
