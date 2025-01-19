"use client";
import * as React from "react";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import Link from "next/link";
import { Button } from "../ui";
import { ArrowRight } from "lucide-react";
import CartDrawerItem from "./cart-drawer-item";
import { getCartItemDetails } from "../../lib";

export interface Props {}

export const CartDrawer: React.FC<React.PropsWithChildren<Props>> = ({
  children,
}) => {
  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent className="flex flex-col justify-between pb-0 bg-[#f4f1ee] ">
        <SheetTitle>
          В карзине <span className="font-bold ">3</span>
        </SheetTitle>

        {/* items */}

        <div className="-mx-6 mt-5 overflow-auto  flex-1 ">
          <div className="mb-2 ">
            <CartDrawerItem
              imageUrl={
                "https://media.dodostatic.net/image/r:292x292/11ee7d6175c10773bfe36e56d48df7e3.avif"
              }
              id={1}
              details={getCartItemDetails(2, 30, [
                { name: "Цыплёнок" },
                { name: "Сыр" },
              ])}
              name={"Чоризо фреш"}
              price={219}
              quantity={1}
            />
          </div>
        </div>

        <SheetFooter className="-mx-6 bg-white p-8 ">
          <div className="w-full ">
            <div className="flex mb-4 ">
              <span className="flex flex-1 text-lg to-neutral-500 ">
                Итого
                <div className="flex-1 border-b border-dashed border-b-neutral-200 relative -top-1 mx-2 " />
              </span>
              <span className="font-bold text-lg ">1500 ₽</span>
            </div>
            <Link href={"/cart"}>
              <Button type="submit" className="w-full h-12 ml-2 ">
                Оформить заказ
                <ArrowRight className="w-5 ml-12 " />
              </Button>
            </Link>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};
