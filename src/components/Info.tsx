import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { filterByCode } from "../config";

// styled-components----------------------------------------------------------------

const Wrapper = styled.section`
  margin-top: 3rem;
  width: 100%;
  display: grid;
  grid-template-columns: 100%;
  gap: 2rem;

  @media (min-width: 767px) {
    grid-template-columns: minmax(100px, 400px) 1fr;
    gap: 5rem;
    align-items: center;
  }

  @media (min-width: 1024px) {
    grid-template-columns: minmax(400px, 600px) 1fr;
  }
`;

const InfoImg = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const InfoTitle = styled.h1`
  margin: 0;
  font-weight: var(--fw-normal);
`;

const ListGroup = styled.div`
  display: flex;
  flex-direction: column;

  gap: 2rem;

  @media (min-width: 767px) {
    flex-direction: row;
    gap: 4rem;
  }
`;

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const ListItem = styled.li`
  line-height: 1.8;

  & > b {
    font-weight: var(--fw-bold);
  }
`;

const Meta = styled.div`
  margin-top: 3rem;
  display: flex;
  gap: 1.5rem;
  flex-direction: column;
  align-items: flex-start;

  & > b {
    font-weight: var(--fw-bold);
  }

  @media (min-width: 767px) {
    flex-direction: row;
    align-items: center;
  }
`;

const TagGroup = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

const Tag = styled.span`
  padding: 0 1rem;
  background-color: var(--colors-ui-base);
  box-shadow: var(--shadow);
  line-height: 1.5;
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
  borders: [] | undefined;
  navigate: (value: any) => void;
};

export const Info: React.FC<InfoPropsType> = (props) => {
  const [neighbors, setNeighbors] = useState([]);

  useEffect(() => {
    if (props.borders?.length) {
      axios
        .get(filterByCode(props.borders))
        .then(({ data }) => setNeighbors(data.map((c: { name: { common: string } }) => c.name.common)));
    }
  }, [props.borders]);

  return (
    <div>
      <Wrapper>
        <InfoImg src={props.flag} alt={props.flagAlt} />
        <div>
          <InfoTitle>{props.name}</InfoTitle>

          <ListGroup>
            <List>
              <ListItem>
                <b>Capital: </b>
                {props.capital}
              </ListItem>

              <ListItem>
                <b>Population: </b>
                {props.population}
              </ListItem>

              <ListItem>
                <b>Region: </b>
                {props.region}
              </ListItem>

              <ListItem>
                <b>Subregion: </b>
                {props.subregion}
              </ListItem>
            </List>

            <List></List>
          </ListGroup>

          <Meta>
            <b>Border Countries: </b>
            {!props.borders ? (
              <span>There is no border countries</span>
            ) : (
              <TagGroup>
                {neighbors.map((b) => (
                  <Tag
                    onClick={() => {
                      props.navigate(`/country/${b}`);
                    }}
                    key={b}>
                    {b}
                  </Tag>
                ))}
              </TagGroup>
            )}
          </Meta>
        </div>
      </Wrapper>
    </div>
  );
};
