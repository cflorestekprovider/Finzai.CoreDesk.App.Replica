import { useQuery } from "@tanstack/react-query";
import { FinancingType } from "../../api/models/CatalogsModel/CatalogsModel";

const CatalogsApi = import.meta.env.VITE_REGISTRATION_API;

const fetchFinancingType = async (): Promise<FinancingType[]> => {
  try {
      const financingTypeResponse = await fetch(
        `${CatalogsApi}GetFinancingTypes`
      );
  
      if (!financingTypeResponse.ok) {
        throw new Error(`HTTP error! Status: ${financingTypeResponse.status}`);
      }
  
      const jsonResponse = await financingTypeResponse.json();
  
      const financingTypes = jsonResponse.financingTypes ?? [];
  
      const list = Array.isArray(financingTypes)
        ? financingTypes.map((item: FinancingType) => ({
            id: item.id,
            name: item.name,
            description: item.description,
            isDeleted: item.isDeleted,
          }))
        : [];
  
      return list;
    } catch (error) {
      console.error("Error fetching financing type:", error);
      return [];
    }
};

export const useFinancingTypesQuery = () => {
return useQuery({
  queryKey: ["financingType-list"],
  queryFn: fetchFinancingType,
  staleTime: 1000 * 60 * 5, // 5 minutos
});
};