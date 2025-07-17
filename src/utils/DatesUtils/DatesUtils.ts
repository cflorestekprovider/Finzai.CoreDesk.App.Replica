export const formatDateShort = (day: number, month: number, year: number) => {


  const formattedDateShort = `${day.toString().padStart(2, "0")}-${month.toString().padStart(2, "0")}-${year}`;


  return formattedDateShort;
};


export const formatDateLong = (day: number, month: number, year: number) => {
  const date = new Date(year, month - 1, day); // Meses en JS van de 0 a 11
  const options: Intl.DateTimeFormatOptions = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };

  const formattedDateLong = date.toLocaleDateString("es-ES", options);

  return formattedDateLong;
};



export const formatDateDMYTOYMD = (dateString: string) => {
  // Separar la fecha por el carácter '/'
  const [day, month, year] = dateString.split('/');

  // Crear un nuevo objeto Date utilizando el formato: año, mes (0-indexed), día
  const date = new Date(Number(year), Number(month) - 1, Number(day));

  // Formatear la fecha en el formato 'yyyy-mm-dd'
  const formattedDate = date.toISOString().split('T')[0];

  return formattedDate;
};

export const convertToISO = (dateStr: string) => {
  const [day, month, year] = dateStr.split("/");
  return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
};

export const convertToISO_DMY = (dateStr: string) => {
  const [day, month, year] = dateStr.split("/");
  return `${day.padStart(2, '0')}/${month.padStart(2, '0')}/${year}`;
};

export const isValidDate = (isoDate: string) => {
    const date = new Date(isoDate);
    if (!(date instanceof Date) || isNaN(date.getTime())) return false;

    const year = date.getFullYear();
    const currentYear = new Date().getFullYear();

    // Solo acepta fechas entre 1900 y el año actual + 50
    return year >= 1900 && year <= currentYear + 50;
}

export const formatDate = (dateStr: string | undefined): string | undefined => 
{
  return dateStr?.split('T')[0];
}