import { useContext, useEffect, useState, FC } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { ALL_COUNTRIES } from "../config";
import { List } from "../components/List";
import { Card } from "../components/Card/Card";
import { Controls } from "../components/Controls/Controls";
import { CountriesContext } from "../App";

type NameCountryType = {
  common: string;
  nativeName: {};
  official: string;
};

type FlagsCountryType = {
  alt: string;
  png: string;
  svg: string;
};

type CountriesPropsType = {
  capital: [];
  name: NameCountryType;
  population: number;
  region: string;
  flags: FlagsCountryType;
};

const HomePage: FC = () => {
  const navigate = useNavigate();

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

  const goToCountryInfo = (path: string): void => {
    navigate(path)
  }

  useEffect(() => {
    if (!filteredCountries.length) axios.get(ALL_COUNTRIES).then(({ data }) => setCountries(data));
  }, []);

  useEffect(() => {
    handleSearch("", "");
  }, [countries]);

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
              onClick={() => goToCountryInfo(`/country/${c.name.common}`)}
              key={c.name.common}
              {...countryInfo}/>
          );
        })}
      </List>
    </div>
  );
};

export default HomePage
