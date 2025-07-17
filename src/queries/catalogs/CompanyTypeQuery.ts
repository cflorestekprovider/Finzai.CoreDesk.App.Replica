import { useQuery } from "@tanstack/react-query";
import { CompanyType } from "../../api/models/CatalogsModel/CatalogsModel";

const CatalogsApi = import.meta.env.VITE_REGISTRATION_API;

const fetchCompanyType = async (): Promise<CompanyType[]> => {
    try {
        const companyTypeResponse = await fetch(
          `${CatalogsApi}GetCompanyTypes`
        );
    
        if (!companyTypeResponse.ok) {
          throw new Error(`HTTP error! Status: ${companyTypeResponse.status}`);
        }
    
        const jsonResponse = await companyTypeResponse.json();
    
        const companyTypes = jsonResponse.companyTypes ?? [];
    
        const list = Array.isArray(companyTypes)
          ? companyTypes.map((item: CompanyType) => ({
              id: item.id,
              name: item.name,
              description: item.description,
              isDeleted: item.isDeleted,
            }))
          : [];
    
        return list;
      } catch (error) {
        console.error("Error fetching company types:", error);
        return [];
      }
};

export const useCompanyTypesQuery = () => {
  return useQuery({
    queryKey: ["companyType-list"],
    queryFn: fetchCompanyType,
    staleTime: 1000 * 60 * 5, // 5 minutos
  });
};