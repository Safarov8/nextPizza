//Это файл для генерации данных для нашего БД тестовых

import { hashSync } from "bcrypt";
import { prisma } from "./prisma-client"
import { categories,  ingridients, products } from "./constants";

async function up(){            //генерирует данные
    
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

    await prisma.category.createMany({
        data: categories,
    })
    await prisma.ingridient.createMany({
        data: ingridients,
    })
   await prisma.product.createMany({
    data: products
   })


}
async function down(){            //очищает генерированные данные чтобв потом щаново генерировать

  // await prisma.user.deleteMany({})      - мы могли бы просто так сделать и не парится, но проблема в том что при таком запросе
  // id их будут зарезервированы и новые генерации будут в продолжении уже удалённых id юзеров
  // т.е. если мы добавили 3 юзера то уже занято id до 3 далее удаляем их и при создании новых юзеров
  // их id начинается с id-4

  // именно при таком SQL запросе. Именно CASCADE указывает что если с эти id Юзером есть ещё что-то связанное в других таблицах
  // то и их удаляй чтобы не было конфликтов
  await prisma.$executeRaw`TRUNCATE TABLE "User"RESTART IDENTITY CASCADE`;
  //RESTART IDENTITY  - это мы очищаем сам id
  //TRUNCATE TABLE  - саму таблицу тоже очищаем.
}


async function main(){
 try {
    await down()
    await up()
 } catch (error)  {
    
 }   
}


//далее Мы вызовим сам main() и соответсвенно он должен нам дать ответ
main().then(async()=>{
    await prisma.$disconnect();   // если ответ был то disconnect
}) .catch(async (e)=>{           //если ответа не было то ошибка 
    console.error(e);
    await prisma.$disconnect();
    process.exit
})

