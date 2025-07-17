import { useQuery } from "@tanstack/react-query";
import { DetailFinancialPlan } from "../../api/models/CatalogsModel/CatalogsModel";

const CatalogsApi = import.meta.env.VITE_REGISTRATION_API;

const fetchDetailFinancialPlan = async (): Promise<DetailFinancialPlan[]> => {
  try {
      const detailFinancialPlanResponse = await fetch(
        `${CatalogsApi}GetFinancialPlansModules`
      );
  
      if (!detailFinancialPlanResponse.ok) {
        throw new Error(`HTTP error! Status: ${detailFinancialPlanResponse.status}`);
      }
  
      const jsonResponse = await detailFinancialPlanResponse.json();
  
      const detailFinancialPlan = jsonResponse.financialPlanModules ?? [];
  
      const list = Array.isArray(detailFinancialPlan)
        ? detailFinancialPlan.map((item: DetailFinancialPlan) => ({
            id: item.id,
            name: item.name,
            description: item.description,
            isDeleted: item.isDeleted,
            financialPlanModulesDetails:item.financialPlanModulesDetails
          }))
        : [];
  
      return list;
    } catch (error) {
      console.error("Error fetching detail financial plan:", error);
      return [];
    }
};

export const useDetailFinancialPlanQuery = () => {
return useQuery({
  queryKey: ["detailFinancialPlan-list"],
  queryFn: fetchDetailFinancialPlan,
  staleTime: 1000 * 60 * 5, // 5 minutos
});
};