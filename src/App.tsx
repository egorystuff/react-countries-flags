import {Header} from "./components/Header/Header";
import {Main} from "./components/Main";
import {createContext, useState} from "react";
import {AppRouter} from "./components/AppRouter";

export const CountriesContext = createContext({
  countries: [],
  setCountries: (countries: []) => {
  },
});

export function App() {
  const [countries, setCountries] = useState([]);

  return (
    <div>
      <CountriesContext.Provider value={{countries, setCountries}}>
        <Header/>
        <Main>
          <AppRouter/>
        </Main>
      </CountriesContext.Provider>
    </div>
  );
}
