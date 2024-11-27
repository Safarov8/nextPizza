import { Api } from "../services/api-client";
import { Ingridient } from "@prisma/client";
import { useEffect, useState } from "react";

export const useIngridients = () => {
  const [ingridients, setIngridients] = useState<Ingridient[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchIngridients() {
      try {
        setLoading(true);
        const ingridients = await Api.ingridients.getAll();
        setIngridients(ingridients);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    fetchIngridients();
  }, []);

  return {
    ingridients,
    loading,
  };
};
