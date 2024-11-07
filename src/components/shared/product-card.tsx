import Link from "next/link";
import * as React from "react";
import { Title } from "./title";
import { Button } from "../ui";

interface productCardProps {
    id: number,
    name: string;
    price: number;
    imageUrl: string;
    className?: string;
}

const ProductCard: React.FunctionComponent<productCardProps> = ({id, name, price, imageUrl, className}) => {
  return (
    <div className=" ">
      <Link href={`/products/${id}`}>
        <div className="flex justify-center p-6 bg-secondary rounded-lg h-[260px]">
          <img className="w-[215px] h-[215px]" src={imageUrl} alt={name} />
        </div>
        <Title text={name} size="sm" className="mb-1 mt-3 font-bold" />
        <p className="text-sm text-gray-400 ">
          Цыплёнлк, Моцарелла, Сыры чеддер и пармезан, сырный соус, томаты, соус
          алфредо, чеснок{" "}
        </p>
        <div className="flex justify-between items-center mt-4 ">
          <span className="text-[20px] ">
            от <b>{price} ₽</b>
          </span>
          <Button variant={"secondary"} className="text-base font-bold"> + Добавить</Button>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
