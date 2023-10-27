import { Route, Routes } from "react-router-dom";

import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { HomePage } from "./pages/HomePage";
import { Details } from "./pages/Details";
import { NotFound } from "./pages/NotFound";
import { createContext, useState } from "react";

export const CountriesContext = createContext({
  countries: [],
  setCountries: (countries: []) => {},
});

function App() {
  const [countries, setCountries] = useState([]);

  return (
    <div>
      <CountriesContext.Provider value={{ countries, setCountries }}>
        <Header />
        <Main>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/country/:name' element={<Details />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Main>
      </CountriesContext.Provider>
    </div>
  );
}

export default App;
