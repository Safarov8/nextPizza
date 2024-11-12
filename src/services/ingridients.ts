import { Ingridient} from "@prisma/client";
import { axiosInstance } from "./axios-instance";
import { ApiRoutes } from "@/prisma/api-routes";

export const getAll = async (): Promise<Ingridient[]> => {
  const { data } = await axiosInstance.get<Ingridient[]>(
    ApiRoutes.INGRIDIENTS);
  return data;
};
