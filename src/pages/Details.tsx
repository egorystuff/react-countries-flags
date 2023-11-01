import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

import { IoArrowBack } from "react-icons/io5";

import { searcByCountry } from "../config";
import { Button } from "../components/Button";
import { Info } from "../components/Info";

type InfoType = {
  name: { common: string; nativeName: {}; official: string };
  flags: {
    alt: string;
    png: string;
    svg: string;
  };
  capital: [];
  population: number;
  region: string;
  subregion: string;
  languages: {};
  borders: [];
} | null;

export const Details: React.FC = () => {
  const { name } = useParams<string>();
  const navigate = useNavigate();

  const [country, setCountry] = useState<InfoType>(null);

  useEffect(() => {
    axios.get(searcByCountry(name)).then(({ data }) => setCountry(data[0]));
  }, [name]);

  const countryInfo = {
    name: country?.name.common,
    flag: country?.flags.png,
    flagAlt: country?.flags.alt,
    official: country?.name.official,
    capital: country?.capital,
    population: country?.population.toLocaleString(),
    region: country?.region,
    subregion: country?.subregion,
    borders: country?.borders,
    languages: country?.languages,
  };

  return (
    <div>
      <Button onClick={() => navigate(-1)}>
        <IoArrowBack /> Back
      </Button>

      {country && <Info navigate={navigate} {...countryInfo} />}
    </div>
  );
};
