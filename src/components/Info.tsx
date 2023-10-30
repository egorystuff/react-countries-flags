import React from "react";
import styled from "styled-components";

// styled-components----------------------------------------------------------------

const Wrapper = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 1.5rem 0;
`;

const InfoImg = styled.img`
  color: var(--colors-text);
  font-size: var(--fs-md);
  text-decoration: none;
  font-weight: var(--fw-bold);
`;

const InfoTitle = styled.h1`
  color: var(--colors-text);
  font-size: var(--fs-md);
  text-transform: capitalize;
  cursor: pointer;
`;

const InfoElem = styled.h4`
  color: var(--colors-text);
  font-size: var(--fs-md);
  text-transform: capitalize;
  cursor: pointer;
`;
// ---------------------------------------------------------------------------------

type InfoPropsType = {
  name: string | undefined;
  flag: string | undefined;
  flagAlt: string | undefined;
  official: string | undefined;
  capital: [] | undefined;
  population: string | undefined;
  region: string | undefined;
  subregion: string | undefined;
  languages: {} | undefined;
  // borders: any;
  // tld: any;
};

export const Info: React.FC<InfoPropsType> = (props) => {
  return (
    <div>
      <Wrapper>
        <InfoImg src={props.flag} alt={props.flagAlt} />
        <div>
          <InfoTitle>{props.name}</InfoTitle>
          <InfoTitle>{props.capital}</InfoTitle>
          <InfoTitle>{props.population}</InfoTitle>
          <InfoTitle>{props.region}</InfoTitle>
          <InfoTitle>{props.subregion}</InfoTitle>
          <InfoTitle></InfoTitle>
        </div>
      </Wrapper>
    </div>
  );
};
