import {useEffect, useState, FC} from "react";
import {useParams, useNavigate} from "react-router-dom";
import axios from "axios";

import {IoArrowBack} from "react-icons/io5";

import {searchByCountry} from "../config";
import {Button} from "../Layouts/Button";
import {Info} from "../components/Info/Info";

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

const Details: FC = () => {
  const {name} = useParams<string>();
  const navigate = useNavigate();

  const [country, setCountry] = useState<InfoType>(null);

  useEffect(() => {
    axios.get(searchByCountry(name)).then(({ data }) => setCountry(data[0]));
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

  const goToPrevPage = (): void => {
    navigate(-1)
  }

  return (
    <div>
      <Button type="button" onClick={goToPrevPage}>
        <IoArrowBack/> Back
      </Button>

      {country && <Info {...countryInfo} />}
    </div>
  );
};

export default Details
