import { useQuery } from "@tanstack/react-query";
import { PostalCodeDetail } from "../../api/models/CatalogsModel/CatalogsModel";

const CatalogsApi = import.meta.env.VITE_REGISTRATION_API;

export const fetchPostalCode = async (postalCode: string | null): Promise<PostalCodeDetail | null> => {
  if (!postalCode) return null;

  try {
    const response = await fetch(
      `${CatalogsApi}GetPostalCodeDetail?postalCode=${encodeURIComponent(postalCode)}`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const jsonResponse = await response.json();

    return jsonResponse?.postalCodeDetail ?? null;
  } catch (error) {
    console.error("Error fetching postal code:", error);
    return null;
  }
};

export const usePostalCodeQuery = (postalCode: string | null) => {
  return useQuery({
    queryKey: ["zipCode-list", postalCode], // Se agrega postalCode para evitar caché incorrecto
    queryFn: () => fetchPostalCode(postalCode),
    enabled: !!postalCode && postalCode.length >= 4, // Evita llamadas con valores nulos o vacíos
    staleTime: 1000 * 60 * 5, // 5 minutos
  });
};
