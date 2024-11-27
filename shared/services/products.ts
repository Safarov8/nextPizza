import { Product } from "@prisma/client";
import { axiosInstance } from "./axios-instance";
import { ApiRoutes } from "@/prisma/api-routes";

export const search = async (query: string): Promise<Product[]> => {
  const { data } = await axiosInstance.get<Product[]>(ApiRoutes.SEARCH_PRODUCTS , {
    params: { query },
  });
  return data;
};