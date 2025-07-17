import { useQuery } from "@tanstack/react-query";
import { State } from "../../api/models/CatalogsModel/CatalogsModel";

const CatalogsApi = import.meta.env.VITE_REGISTRATION_API;

export const fetchStates = async (id:number | null): Promise<State[]> => {

  if(id == 0){
    return [];
  }

  try {
      const stateResponse = await fetch(
        `${CatalogsApi}GetStatesByCountryId?countryId=${id}`

      );
  
      if (!stateResponse.ok) {
        throw new Error(`HTTP error! Status: ${stateResponse.status}`);
      }
  
      const jsonResponse = await stateResponse.json();
  
      const states = jsonResponse.states ?? [];
  
      const list = Array.isArray(states)
        ? states.map((item: State) => ({
            id: item.id,
            name: item.name,
            description: item.description,
            isDeleted: item.isDeleted,
            countryId: item.countryId
          }))
        : [];
  
      return list;
    } catch (error) {
      console.error("Error fetching states:", error);
      return [];
    }
};

export const useStatesQuery = (id: number | null) => {
  return useQuery({
    queryKey: ["state-list"],
    queryFn: () => fetchStates(id),
    enabled: !!id,
    staleTime: 1000 * 60 * 5, // 5 minutos
  });
};