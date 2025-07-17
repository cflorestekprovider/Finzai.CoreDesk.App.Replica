import { useQuery } from "@tanstack/react-query";
import { JobPosition } from "../../api/models/CatalogsModel/CatalogsModel";

const CatalogsApi = import.meta.env.VITE_REGISTRATION_API;

const fetchJobPosition = async (): Promise<JobPosition[]> => {
  try {
      const jobPositionResponse = await fetch(
        `${CatalogsApi}GetJobPositions`
      );
  
      if (!jobPositionResponse.ok) {
        throw new Error(`HTTP error! Status: ${jobPositionResponse.status}`);
      }
  
      const jsonResponse = await jobPositionResponse.json();
  
      const jobPositions = jsonResponse.jobPositions ?? [];
  
      const list = Array.isArray(jobPositions)
        ? jobPositions.map((item: JobPosition) => ({
            id: item.id,
            name: item.name,
            description: item.description,
            isDeleted: item.isDeleted,
          }))
        : [];
  
      return list;
    } catch (error) {
      console.error("Error fetching job positions:", error);
      return [];
    }
};

export const useJobPositionsQuery = () => {
return useQuery({
  queryKey: ["jobPosition-list"],
  queryFn: fetchJobPosition,
  staleTime: 1000 * 60 * 5, // 5 minutos
});
};