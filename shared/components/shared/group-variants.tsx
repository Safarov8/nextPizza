"use client";

///// Это окно для выборки размера пиццы : https://dodopizza.ru/moscow/product/beef-n-sausages-meat-mix

import { cn } from "../../lib/utils";
import * as React from "react";

type Variant = {
  name: string;
  value: string;
  disabled?: boolean;
  className?: string;
};

interface IAppProps {
  items: readonly Variant[];
  onClick?: (value: Variant["value"]) => void;
  value?: Variant["value"];
  className?: string;
}

const GroupVariants: React.FunctionComponent<IAppProps> = ({
  items,
  onClick,
  value,
  className,
}) => {
  return (
    <div
      className={cn(
        "flex justify-between bg-[#f3f3f7] rounded-3xl p-1 select-none "
      )}
    >
      {items.map((item) => (
        <button
          key={item.name}
          onClick={() => onClick?.(item.value)}
          className={cn(
            className,
            "flex items-center  justify-center cursor-pointer h-[30px] px-5 flex-1 rounded-3xl transition-all duration-500 text-sm",
            {
              "bg-white shadow": item.value === value,
              "text-gray-500 opacity-50 pointer-events-none": item.disabled,
            }
          )}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
};

export default GroupVariants;
