"use client";
import React, { useState } from "react";
import { Title } from "./title";
import { FilterCheckbox } from "./filter-checkbox";
import { Input } from "../ui";
import { RangeSlider } from "./range-slider";
import CheckboxFiltersGroup from "./checkbox-filters-group";
import { useFilterIngridients } from "@/hooks/useFilterIngridients";
// import { useStateList } from "react-use";

interface PriceProps {
  priceFrom: number;
  priceTo: number;
}

const Filters = (props: Props) => {
  const { ingridients, loading, onAddId, selectedIds } = useFilterIngridients();
  const [{ priceFrom, priceTo }, setPrice] = useState<PriceProps>({
    priceFrom: 0,
    priceTo: 5000,
  });

  const items = ingridients.map((item) => ({
    value: String(item.id),
    text: item.name,
  }));

  // const items = ingridients.map((item) => ({value: String(item.id), text: item.name}));
  // const updatePrice = {name: keyof PriceProps, value: number}=>{
  //   setPrice
  // }

  const updatePrice = (name: keyOf PriceProps, value: number)=>{
    setPrice((prevPrice) => ({...prevPrice, [name]: value}))
  }


  return (
    <div>
      <Title text="Фильрация" size="sm" className="mb-5 font-bold" />
      <div className="flex flex-col gap-4">
        {/* верхни чекбоксы */}
        <FilterCheckbox name="qwe" text="Можно собирать" value="1" />
        <FilterCheckbox name="asdf" text="Новинки" value="2" />
      </div>

      {/* филтр цен */}
      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="font-bold mb-3">Цена от и до:</p>
        <div className="flex gap-3 mb-5">
          <Input
            type="number"
            placeholder="0"
            min={0}
            max={1000}
            value={String(priceFrom)}
          />
          <Input
            type="number"
            min={100}
            max={1000}
            placeholder="30000"
            value={String(priceTo)}
          />
        </div>
        <RangeSlider min={0} max={5000} step={10} value={[0, 5000]} />
      </div>
      <CheckboxFiltersGroup
        title="Ингридиенты"
        name={ingridients}
        className="mt-10"
        limit={6}
        defaultItems={items.slice(0, 6)}
        items={items}
        loading={loading}
        onClickCheckBox={onAddId}
        selectedIds={selectedIds}
      />
    </div>
  );
};

export default Filters;
