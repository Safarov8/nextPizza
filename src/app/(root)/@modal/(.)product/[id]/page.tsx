import { Container } from "../../../../../../shared/components/shared/container";
import GroupVariants from "../../../../../../shared/components/shared/group-variants";
import ChoseProductModal from "../../../../../../shared/components/shared/modals/chose-product-modal";
import ProductImage from "../../../../../../shared/components/shared/pizza-image";
import { Title } from "../../../../../../shared/components/shared/title";
import { prisma } from "@/prisma/prisma-client";
import { notFound } from "next/navigation";

export default async function ProductModalPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const product = await prisma.product.findFirst({
    where: { id: Number(id) },
    include: {
      ingridients: true,
      items: true,
      // {
      //   orderBy: {
      //     createdAt: "desc",
      //   },
      //   include: {
      //     product: {
      //       include: {
      //         items: true,
      //       },
      //     },
      //   },
      // },
    },
  });

  return (
    <>
      <ChoseProductModal product={product} />
    </>
  );
}
