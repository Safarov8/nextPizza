// import { ingridients } from "./constants";
//Это файл для генерации данных для нашего БД тестовых

import { hashSync } from "bcrypt";
import { prisma } from "./prisma-client";
import { categories, ingridients, products } from "./constants";
import { Prisma } from "@prisma/client";

const randomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min) * 10) / 10;
};

//пишем ф-ю которая генерирует нам рандомный пицца
const generateProductItem = ({
  productId,
  pizzaType,
  size,
}: {
  productId: number;
  pizzaType?: 1 | 2;
  size?: 20 | 30 | 40;
}) => {
  return {
    productId,
    price: randomNumber(190, 600),
    pizzaType,
    size,
  } as Prisma.ProductItemUncheckedCreateInput;
};

async function up() {
  //генерирует данные

  await prisma.user.createMany({
    data: [
      {
        fullName: "User TEst", //тут мы создаём нового ЮЗЕРА
        email: "user@test.ru",
        password: hashSync("1111", 10),
        verified: new Date(),
        role: "USER",
      },
      {
        fullName: "Admin Admin", // а тут создаём нвоого ЮЗЕРА АДМИНА
        email: "admin@test.ru",
        password: hashSync("1111", 10),
        verified: new Date(),
        role: "ADMIN",
      },
    ],
  });

  //создаём данные для таблицы category
  await prisma.category.createMany({
    data: categories,
  });

  //создаём данные для таблицы ingridients
  await prisma.ingridient.createMany({
    data: ingridients,
  });

  //создаём данные для таблицы product
  await prisma.product.createMany({
    data: products,
  });

  const pizza1 = await prisma.product.create({
    data: {
      name: "Пепперони фреш",
      imageUrl:
        "https://media.dodostatic.net/image/r:233x233/11EE7D61304FAF5A98A6958F2BB2D260.webp",
      categoryId: 1,
      ingridients: {
        connect: ingridients.slice(0, 5),
      },
    },
  });

  const pizza2 = await prisma.product.create({
    data: {
      name: "Сырная",
      imageUrl:
        "https://media.dodostatic.net/image/r:233x233/11EE7D610CF7E265B7C72BE5AE757CA7.webp",
      categoryId: 1,
      ingridients: {
        connect: ingridients.slice(5, 10),
      },
    },
  });

  const pizza3 = await prisma.product.create({
    data: {
      name: "Чоризо фреш",
      imageUrl:
        "https://media.dodostatic.net/image/r:584x584/11EE7D61706D472F9A5D71EB94149304.webp",
      categoryId: 3,
      ingridients: {
        connect: ingridients.slice(10, 40),
      },
    },
  });

  await prisma.productItem.createMany({
    data: [
      //Пицца "Пепперони фреш"
      generateProductItem({ productId: pizza1.id, pizzaType: 1, size: 20 }),
      generateProductItem({ productId: pizza1.id, pizzaType: 2, size: 30 }),
      generateProductItem({ productId: pizza1.id, pizzaType: 2, size: 40 }),
      // {
      //   productId: pizza1.id,
      //   pizzaType: 1,
      //   price: randomNumber(190, 600),
      //   size: 20
      // },
      // {
      //   productId: pizza1.id,
      //   pizzaType: 2,
      //   price: randomNumber(190, 600),
      //   size: 30
      // },
      // {
      //   productId: pizza1.id,
      //   pizzaType: 2,
      //   price: randomNumber(190, 600),
      //   size: 40
      // },
      //Пицца "Сырная"
      generateProductItem({ productId: pizza2.id, pizzaType: 1, size: 20 }),
      generateProductItem({ productId: pizza2.id, pizzaType: 1, size: 30 }),
      generateProductItem({ productId: pizza2.id, pizzaType: 1, size: 40 }),
      generateProductItem({ productId: pizza2.id, pizzaType: 2, size: 20 }),
      generateProductItem({ productId: pizza2.id, pizzaType: 2, size: 30 }),
      generateProductItem({ productId: pizza2.id, pizzaType: 2, size: 40 }),

      //Пицца "Чоризо Фреш"
      generateProductItem({ productId: pizza3.id, pizzaType: 1, size: 20 }),
      generateProductItem({ productId: pizza3.id, pizzaType: 2, size: 30 }),
      generateProductItem({ productId: pizza3.id, pizzaType: 2, size: 40 }),

      //Остальные продукты
      generateProductItem({ productId: 1 }),
      generateProductItem({ productId: 2 }),
      generateProductItem({ productId: 3 }),
      generateProductItem({ productId: 4 }),
      generateProductItem({ productId: 5 }),
      generateProductItem({ productId: 6 }),
      generateProductItem({ productId: 7 }),
      generateProductItem({ productId: 8 }),
      generateProductItem({ productId: 9 }),
      generateProductItem({ productId: 10 }),
      generateProductItem({ productId: 11 }),
      generateProductItem({ productId: 12 }),
      generateProductItem({ productId: 14 }),
      generateProductItem({ productId: 13 }),
      generateProductItem({ productId: 15 }),
      generateProductItem({ productId: 16 }),
      generateProductItem({ productId: 17 }),
    ],
  });

  //тестовые данные карзины
  await prisma.cart.createMany({
    data: [
      {
        userId: 1,
        totalAmoun: 0,
        token: "11111",
      },
      {
        userId: 2,
        totalAmoun: 0,
        token: "22222",
      },
    ],
  });

  await prisma.cartItem.create({
    data: {
      productItemId: 1,
      cartId: 1,
      quantity: 2,
      ingredients: {
        connect: [{ id: 1 }, { id: 2 }, { id: 3 }],
      },
    },
  });
}
async function down() {
  //очищает генерированные данные чтобв потом щаново генерировать

  // await prisma.user.deleteMany({})      - мы могли бы просто так сделать и не парится, но проблема в том что при таком запросе
  // id их будут зарезервированы и новые генерации будут в продолжении уже удалённых id юзеров
  // т.е. если мы добавили 3 юзера то уже занято id до 3 далее удаляем их и при создании новых юзеров
  // их id начинается с id-4

  // именно при таком SQL запросе. Именно CASCADE указывает что если с эти id Юзером есть ещё что-то связанное в других таблицах
  // то и их удаляй чтобы не было конфликтов
  await prisma.$executeRaw`TRUNCATE TABLE "User"RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Category"RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Ingridient"RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Product"RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "ProductItem"RESTART IDENTITY CASCADE`;
  // await prisma.$executeRaw`TRUNCATE TABLE "User"RESTART IDENTITY CASCADE`;
  //RESTART IDENTITY  - это мы очищаем сам id
  //TRUNCATE TABLE  - саму таблицу тоже очищаем.
}

async function main() {
  try {
    await down();
    await up();
  } catch (error) {}
}

//далее Мы вызовим сам main() и соответсвенно он должен нам дать ответ
main()
  .then(async () => {
    await prisma.$disconnect(); // если ответ был то disconnect
  })
  .catch(async (e) => {
    //если ответа не было то ошибка
    console.error(e);
    await prisma.$disconnect();
    process.exit;
  });
