import { useQuery } from "@tanstack/react-query";
import { Municipality } from "../../api/models/CatalogsModel/CatalogsModel";

const CatalogsApi = import.meta.env.VITE_REGISTRATION_API;

export const fetchMunicipality = async (municipalityId:number | null): Promise<Municipality[]> => {

  if(municipalityId == 0){
    return [];
  }

  try {
      const municipalityResponse = await fetch(
        `${CatalogsApi}GetMunicipalitiesByStateId?stateId=${municipalityId}`
      );
  
      if (!municipalityResponse.ok) {
        throw new Error(`HTTP error! Status: ${municipalityResponse.status}`);
      }
  
      const jsonResponse = await municipalityResponse.json();
  
      const municipalities = jsonResponse.municipalities ?? [];
  
      const list = Array.isArray(municipalities)
        ? municipalities.map((item: Municipality) => ({
            id: item.id,
            name: item.name,
            description: item.description,
            isDeleted: item.isDeleted,
            stateId: item.stateId
          }))
        : [];
  
      return list;
    } catch (error) {
      console.error("Error fetching municipality:", error);
      return [];
    }
};

export const useMunicipalityQuery = (municipalityId: number | null) => {
  return useQuery({
    queryKey: ["municipality-list"],
    queryFn: () => fetchMunicipality(municipalityId),
    enabled: !!municipalityId,
    staleTime: 1000 * 60 * 5, // 5 minutos
  });
};