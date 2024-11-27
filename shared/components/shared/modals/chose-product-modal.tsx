"use client";
import { Dialog } from "../../ui";
import * as React from "react";
import { Product } from "@prisma/client";
import { cn } from "../../../lib/utils";
import { DialogContent } from "../../ui/dialog";
import { useRouter } from "next/navigation";
import { Title } from "../title";
import ChooseProductForm from "../choose-product-form";
import { ProductWithRelations } from "../../../../@types/prisma";
import ChoosePizzaForm from "../choose-pizza-form";

interface IChoseProductModalProps {
  product: ProductWithRelations;
}

const ChoseProductModal: React.FunctionComponent<IChoseProductModalProps> = ({
  product,
}) => {
  const router = useRouter();
  const isPizzaform = Boolean(product.items[0].pizzaType);

  return (
    <Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
      <DialogContent
        className={cn(
          "p-0 w-[1060px] max-w-[1000px] min-h-[700px] bg-white overflow-hidden"
        )}
      >
        {isPizzaform ? (
          <ChoosePizzaForm
            imageUrl={product.imageUrl}
            name={product.name}
            ingridients={product.ingridients}
            items={product.items}
          />
        ) : (
          <ChooseProductForm imageUrl={product.imageUrl} name={product.name} />
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ChoseProductModal;
