import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

import { IoArrowBack } from "react-icons/io5";

import { searcByCountry } from "../config";
import { Button } from "../components/Button";
import { Info } from "../components/Info";

export const Details: React.FC = () => {
  const { name } = useParams();
  const navigate = useNavigate();

  const [country, setCountry] = useState(null);

  console.log(country);

  useEffect(() => {
    axios.get(searcByCountry(name)).then(({ data }) => setCountry(data[0]));
  }, [name]);

  return (
    <div>
      <Button onClick={() => navigate(-1)}>
        <IoArrowBack /> go Back
      </Button>

      {/* {country && <Info name={country.name.common} flag={undefined}></Info>} */}
    </div>
  );
};
