import { useQuery } from "@tanstack/react-query";
import { Country } from "../../api/models/CatalogsModel/CatalogsModel";

const CatalogsApi = import.meta.env.VITE_REGISTRATION_API;

const fetchCountries = async (): Promise<Country[]> => {
  try {
      const countryResponse = await fetch(
        `${CatalogsApi}GetCountries`
      );
  
      if (!countryResponse.ok) {
        throw new Error(`HTTP error! Status: ${countryResponse.status}`);
      }
  
      const jsonResponse = await countryResponse.json();
  
      const countries = jsonResponse.countries ?? [];
  
      const list = Array.isArray(countries)
        ? countries.map((item: Country) => ({
            id: item.id,
            name: item.name,
            description: item.description,
            isDeleted: item.isDeleted
          }))
        : [];
  
      return list;
    } catch (error) {
      console.error("Error fetching countries:", error);
      return [];
    }
};

export const useCountriesQuery = () => {
return useQuery({
  queryKey: ["country-list"],
  queryFn: fetchCountries,
  staleTime: 1000 * 60 * 5, // 5 minutos
});
};