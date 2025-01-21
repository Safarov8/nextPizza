import { prisma } from "@/prisma/prisma-client";
import { calcCartItemTotalPrice } from "./calc-cart-item-total-price";

export const updateCartTotalAmount = async (token: string) => {
  
  //находим карзину
    const userCart = await prisma.cart.findFirst({
    where: {
      token,
    },
    include: {
      items: {
        orderBy: {
          createdAt: "desc",
        },
        include: {
          productItem: {
            include: {
              product: true,
            },
          },
          ingredients: true,
        },
      },
    },
  });

  //пробежимся по этой карзине и вернёт нам всё что необходимо
  if (!userCart) {
    return 0;
  }

  //вычисление общую стоимость карзины
  const totalAmount = userCart?.items.reduce((acc, item) => {
    return acc + calcCartItemTotalPrice(item);
  }, 0);



// обновит эту общую стоимость в этой карзине и вернёт карзину уже с новой информацией
  return await prisma.cart.update({
    where: {
      id: userCart.id,
    },
    data: {
      totalAmoun: totalAmount,
    },
    include: {
      items: {
        orderBy: {
          createdAt: "desc",
        },
        include: {
          productItem: {
            include: {
              product: true,
            },
          },
          ingredients: true,
        },
      },
    },
  });
};
