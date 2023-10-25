const BASE_URL = "https://restcountries.com/v3.1/";

// export const ALL_COUNTRIES = BASE_URL + "all";

export const ALL_COUNTRIES = BASE_URL + "all?fields=name,capital,flags,population,region";

export const searcByCountry = (name: string) => BASE_URL + "/name/" + name;

export const filterByCode = (codes: any[]) => BASE_URL + "alpha?codes=" + codes.join(",");
