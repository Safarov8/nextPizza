import { prisma } from "@/prisma/prisma-client";
import { NextRequest, NextResponse } from "next/server";
import { updateCartTotalAmount } from "../../../../../shared/lib/update-cart-total-amount";

export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const id = Number(params.id);
    const data = (await req.json()) as {quantity: number};
    const token = req.cookies.get("cartToken")?.value;

    if (!token) {
      return NextResponse.json({ message: "Cart token not found" });
    }

    const cartItem = await prisma.cartItem.findFirst({
      where: {
        id,
      },
    });

    if (!cartItem) {
      return NextResponse.json({ message: "Cart item not found" });
    }

//обновляем cartItem  
    await prisma.cartItem.update({
        where: {
          id,
        },
        data: {
          quantity: data.quantity
        },
      });

      const updatedUserCart = await updateCartTotalAmount(token);

      return NextResponse.json(updatedUserCart)

  } catch (error) {
    console.log(" [CART_PATCH] Server Error: ", error);
    return NextResponse.json(
      { message: " Не удалось обновить карзину" },
      { status: 500 }
    );
  }
}
