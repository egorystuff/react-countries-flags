const BASE_URL = "https://restcountries.com/v3.1/";

// export const ALL_COUNTRIES = BASE_URL + "all";

export const ALL_COUNTRIES = BASE_URL + "all?fields=name,capital,flags,population,region";

export const searchByCountry = (name: string | undefined): string => BASE_URL + "/name/" + name;

export const filterByCode = (codes: any[]): string => BASE_URL + "alpha?codes=" + codes.join(",");
