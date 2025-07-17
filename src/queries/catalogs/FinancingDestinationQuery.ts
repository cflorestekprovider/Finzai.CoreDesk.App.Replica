import { useQuery } from "@tanstack/react-query";
import { FinancingDestination } from "../../api/models/CatalogsModel/CatalogsModel";

const CatalogsApi = import.meta.env.VITE_REGISTRATION_API;

const fetchFinancingDestination = async (): Promise<FinancingDestination[]> => {
  try {
      const financingDestinationResponse = await fetch(
        `${CatalogsApi}GetFinancingDestinations`
      );
  
      if (!financingDestinationResponse.ok) {
        throw new Error(`HTTP error! Status: ${financingDestinationResponse.status}`);
      }
  
      const jsonResponse = await financingDestinationResponse.json();
  
      const financingDestinations = jsonResponse.financingDestinations ?? [];
  
      const list = Array.isArray(financingDestinations)
        ? financingDestinations.map((item: FinancingDestination) => ({
            id: item.id,
            name: item.name,
            description: item.description,
            isDeleted: item.isDeleted,
          }))
        : [];
  
      return list;
    } catch (error) {
      console.error("Error fetching financing destination:", error);
      return [];
    }
};

export const useFinancingDestinationsQuery = () => {
return useQuery({
  queryKey: ["financingDestination-list"],
  queryFn: fetchFinancingDestination,
  staleTime: 1000 * 60 * 5, // 5 minutos
});
};