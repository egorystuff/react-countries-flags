import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { ALL_COUNTRIES } from "../config";
import { List } from "../components/List";
import { Card } from "../components/Card";
import { Controls } from "../components/Controls";
import { CountriesContext } from "../App";

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

export const HomePage: React.FC = () => {
  const { countries, setCountries } = useContext(CountriesContext);

  const [filteredCountries, setFilteredCountries] = useState(countries);

  const handleSearch = (search: string, region: string) => {
    let data = [...countries];

    if (region) {
      data = data.filter((c: CountriesPropsType) => c.region.includes(region));
    }

    if (search) {
      data = data.filter((c: CountriesPropsType) =>
        c.name.common.toLocaleLowerCase().includes(search.toLocaleLowerCase()),
      );
    }
    setFilteredCountries(data);
  };

  const navigate = useNavigate();

  useEffect(() => {
    if (!filteredCountries.length) axios.get(ALL_COUNTRIES).then(({ data }) => setCountries(data));
  }, [filteredCountries, setCountries]);

  return (
    <div>
      <Controls onSearch={handleSearch} />
      <List>
        {filteredCountries.map((c: CountriesPropsType) => {
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
              onClick={() => {
                navigate(`/country/${c.name.common}`);
              }}
              key={c.name.common}
              {...countryInfo}></Card>
          );
        })}
      </List>
    </div>
  );
};
