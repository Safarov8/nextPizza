import React from "react";
import { cn } from "../../lib/utils";
import { CircleCheck } from "lucide-react";

type Props = {
  imageUrl: string;
  name: string;
  price: string;
  active?: boolean;
  onClick?: () => void;
};

export default function IngridientItem({
  name,
  imageUrl,
  price,
  onClick,
  active,
}: Props) {
  return (
    <div
      className={cn(
        "flex items-center flex-col p-1 rounded-md w-32 text-center relative cursor-pointer shadow-md bg-white",
        { "border border-primary": active }
      )}
      onClick={onClick}
    >
      {active && <CircleCheck className="absolute top-2 ring-0 right-2 text-primary" />}
      <img src={imageUrl} width={110} height={110} alt="" />
      <span className="text-sm mb-1 ">{name}</span>
      <span className="font-bold">{price} ₽</span>
    </div>
  );
}
