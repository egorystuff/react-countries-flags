import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { ALL_COUNTRIES } from "../config";
import { List } from "../components/List";
import { Card } from "../components/Card";
import { Controls } from "../components/Controls";

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
  const [countries, setCountries] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    axios.get(ALL_COUNTRIES).then(({ data }) => setCountries(data));
  }, []);

  // console.log(countries);
  // console.log(navigate);

  return (
    <div>
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
