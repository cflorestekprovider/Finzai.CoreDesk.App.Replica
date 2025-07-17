import { useQuery } from "@tanstack/react-query";
import { UserQuantity } from "../../api/models/CatalogsModel/CatalogsModel";

const CatalogsApi = import.meta.env.VITE_REGISTRATION_API;

const fetchUserQuantity = async (): Promise<UserQuantity[]> => {
  try {
      const userQuantityResponse = await fetch(
        `${CatalogsApi}GetUserQuantities`
      );
  
      if (!userQuantityResponse.ok) {
        throw new Error(`HTTP error! Status: ${userQuantityResponse.status}`);
      }
  
      const jsonResponse = await userQuantityResponse.json();
  
      const userQuantities = jsonResponse.userQuantities ?? [];
  
      const list = Array.isArray(userQuantities)
        ? userQuantities.map((item: UserQuantity) => ({
            id: item.id,
            name: item.name,
            description: item.description,
            isDeleted: item.isDeleted,
            minimumUser: item.minimumUser,
            maximunUser: item.maximunUser
          }))
        : [];
  
      return list;
    } catch (error) {
      console.error("Error fetching user quantities:", error);
      return [];
    }
};

export const useUserQuantitiesQuery = () => {
return useQuery({
  queryKey: ["userQuantity-list"],
  queryFn: fetchUserQuantity,
  staleTime: 1000 * 60 * 5, // 5 minutos
});
};