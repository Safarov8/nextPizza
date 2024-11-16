"use client";
import React, { useEffect,  } from "react";
import { Title } from "./title";
import { Input } from "../ui";
import { RangeSlider } from "./range-slider";
import CheckboxFiltersGroup from "./checkbox-filters-group";
import qs from "qs";
import { useRouter,  } from "next/navigation";
import { useIngridients } from "@/hooks/use-ingridients";
import { useFilters } from "@/hooks/use-filters";

const Filters = (props: Props) => {
  const router = useRouter();
  const { ingridients, loading } = useIngridients();
const filters = useFilters()





  return (
    <div>
      <Title text="Фильрация" size="sm" className="mb-5 font-bold" />

      <div className="mb-5 ">
        <CheckboxFiltersGroup
          title="Тип теста"
          name="pizzaTypes"
          className="mb-5"
          onClickCheckBox={togglePizzaTypes}
          selected={pizzaTypes}
          items={[
            { text: "Тонкое", value: "1" },
            { text: "Традиционное", value: "2" },
          ]}
        />
      </div>

      <CheckboxFiltersGroup
        title="Размеры"
        name="sizes"
        className="mb-5 "
        onClickCheckBox={toggleSizes}
        selected={sizes}
        items={[
          { value: "20", text: "20 см" },
          { value: "30", text: "30 см" },
          { value: "40", text: "40 см" },
        ]}
      />

      {/* филтр цен */}
      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="font-bold mb-3">Цена от и до:</p>
        <div className="flex gap-3 mb-5">
          <Input
            type="number"
            placeholder="0"
            min={0}
            max={1000}
            value={String(prices.priceFrom)}
            onChange={(e) => updatePrice("priceFrom", Number(e.target.value))}
          />
          <Input
            type="number"
            min={100}
            max={1000}
            placeholder="30000"
            value={String(prices.priceTo)}
            onChange={(e) => updatePrice("priceTo", Number(e.target.value))}
          />
        </div>
        <RangeSlider
          min={0}
          max={1000}
          step={10}
          value={[prices.priceFrom || 0, prices.priceTo || 1000]}
          onValueChange={([priceFrom, priceTo]) =>
            setPrice({ priceFrom, priceTo })
          }
        />
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
        selected={selectedIngridients}
      />
    </div>
  );
};

export default Filters;
