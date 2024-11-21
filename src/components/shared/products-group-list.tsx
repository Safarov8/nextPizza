"use client";

import React, { useEffect, useRef } from "react";
import { Title } from "./title";
import { cn } from "@/lib/utils";
import ProductCard from "./product-card";
import { useIntersection } from "react-use";
import { useCategoryStore } from "@/store/category";

type Props = {
  title: string;
  items: any[];
  className: string;
  listClassName: string;
  categoryId: number;
};

const ProductsGroupList = ({
  title,
  items,
  className,
  listClassName,
  categoryId,
}) => {
  // это для поимки секции при скролле

  const intersectionRef = React.useRef(null);
  const setActiveCategoryId = useCategoryStore((state) => state.setActiveId);
  const intersection = useIntersection(intersectionRef, {
    threshold: 0.5,
  });

  useEffect(() => {
    if (intersection?.isIntersecting) {
      setActiveCategoryId(categoryId);
    }
  }, [intersection?.isIntersecting]);

  return (
    <div id={title} ref={intersectionRef}>
      <Title text={title} size="lg" className="font-extrabold mb-5" />

      <div className={cn("grid grid-cols-3 gap-[50px]", listClassName)}>
        {items.map((product, i) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            imageUrl={product.imageUrl}
            price={product.items[0].price}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductsGroupList;
