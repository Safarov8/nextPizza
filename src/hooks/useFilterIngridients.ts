import { useSet } from 'react-use';
import React from "react";
import { Api } from "./../services/api-client";
import { Ingridient } from "@prisma/client";
import { useEffect, useState } from "react";

// type IngridientItem = Pick<Ingridient, "id" | "name">;

interface ReturnProps {
  ingridients: Ingridient[];
  loading: boolean;
  selectedIds: Set<string>;
  onAddId: (id: string ) => void;
}

export const useFilterIngridients = () => {
  const [ingridients, setIngridients] = useState<Ingridient[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedIds, { toggle }] = useSet(new Set<string>([]));



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

  return { ingridients, loading, onAddId: toggle, selectedIds  };
};
