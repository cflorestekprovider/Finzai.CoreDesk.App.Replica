import { useQuery } from "@tanstack/react-query";
import { FinancialPlan } from "../../api/models/CatalogsModel/CatalogsModel";

const CatalogsApi = import.meta.env.VITE_REGISTRATION_API;

const fetchFinancialPlan = async (): Promise<FinancialPlan[]> => {
  try {
      const financialPlanResponse = await fetch(
        `${CatalogsApi}GetFinancialPlansTypes`
      );
  
      if (!financialPlanResponse.ok) {
        throw new Error(`HTTP error! Status: ${financialPlanResponse.status}`);
      }
  
      const jsonResponse = await financialPlanResponse.json();
  
      const financialPlansTypeDetails = jsonResponse.financialPlansTypes ?? [];
  
      const list = Array.isArray(financialPlansTypeDetails)
        ? financialPlansTypeDetails.map((item: FinancialPlan) => ({
            id: item.id,
            name: item.name,
            description: item.description,
            isDeleted: item.isDeleted,
            price: item.price,
            userQuantityId: item.userQuantityId,
            userQuantity: item.userQuantity
          }))
        : [];
  
      return list;
    } catch (error) {
      console.error("Error fetching financial plan:", error);
      return [];
    }
};

export const useFinancialPlansQuery = () => {
return useQuery({
  queryKey: ["financialPlan-list"],
  queryFn: fetchFinancialPlan,
  staleTime: 1000 * 60 * 5, // 5 minutos
});
};