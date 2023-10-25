import { useEffect, useState } from "react";
import axios from "axios";

import { Controls } from "./components/Controls";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { ALL_COUNTRIES } from "./config";
import { List } from "./components/List";
import { Card } from "./components/Card";
import { type } from "os";

type NameCountryType = {
  common: string;
  nativeName: {};
  official: string;
};

type FlagsCountrytype = {
  alt: string;
  png: string;
  svg: string;
};

type CountriesPropsType = {
  capital: [];
  name: NameCountryType;
  population: number;
  region: string;
  flags: FlagsCountrytype;
};

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios.get(ALL_COUNTRIES).then(({ data }) => setCountries(data));
  }, []);

  console.log(countries);

  return (
    <div>
      <Header />
      <Main>
        <Controls />
        <List>
          {countries.map((c: CountriesPropsType) => {
            const countryInfo = {
              img: c.flags.png,
              name: c.name.common,
              info: [
                { title: "Population", discription: c.population.toLocaleString() },
                { title: "Region", discription: c.region },
                { title: "Capital", discription: c.capital },
              ],
            };

            return (
              <Card
                onClick={function (value: any): void {
                  throw new Error("Function not implemented.");
                }}
                key={c.name.common}
                {...countryInfo}></Card>
            );
          })}
        </List>
      </Main>
    </div>
  );
}

export default App;
