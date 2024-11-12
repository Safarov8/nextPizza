import { prisma } from "@/prisma/prisma-client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  // console.log(req.nextUrl.searchParams.get('query '));
  const query = (req.nextUrl.searchParams.get("query") || "").trim();

  const products = await prisma.product.findMany({
    where: {
      OR: [
        {
          name: {
            contains: query,
            mode: "insensitive",
          },
        },
        {
          ingridients: {
            some: {
              name: {
                contains: query,
                mode: "insensitive",
              },
            },
          },
        },
      ],
    },
    // where: {
    //   name: {
    //     contains: query.trim(),
    //     mode: "insensitive",
    //   },
    // },
    take: 5,
  });
  return NextResponse.json(products);
}
