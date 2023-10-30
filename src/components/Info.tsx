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
// ---------------------------------------------------------------------------------

type InfoPropsType = {
  name: string;
  flag: any;

  // nativeName: any;
  // capital: string;
  // population: any;
  // region: any;
  // subregion: any;
  // currencies: any;
  // languages: any;
  // borders: any;
  // tld: any;
};

export const Info: React.FC<InfoPropsType> = (props) => {
  return (
    <div>
      <Wrapper>
        <InfoImg src={props.flag} />
        <div>
          <InfoTitle>{props.name}</InfoTitle>
        </div>
      </Wrapper>
    </div>
  );
};
