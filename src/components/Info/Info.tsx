import {FC, useEffect, useState} from "react";
import axios from "axios";
import {filterByCode} from "../../config";
import {useNavigate} from "react-router-dom";
import {InfoPropsType} from "./types";
import {InfoImg, InfoTitle, InfoWrapper, List, ListGroup, ListItem, Meta, Tag, TagGroup} from "./InfoLayouts";

export const Info: FC<InfoPropsType> = (props) => {
  const navigate = useNavigate();

  const [neighbors, setNeighbors] = useState<string[]>([] as string[]);

  const goToNeighborCountry = (path: string): void => {
    navigate(path)
  }

  useEffect(() => {
    if (props.borders?.length) {
      axios
        .get(filterByCode(props.borders))
        .then(({data}) => setNeighbors(data.map((c: { name: { common: string } }) => c.name.common)));
    }
  }, [props.borders]);

  let languagesInfo: any[] = [];


  if (props.languages !== undefined) languagesInfo = Object.values(props.languages);

  return (
    <div>
      <InfoWrapper>
        <InfoImg src={props.flag} alt={props.flagAlt}/>
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
            <b>Languages: </b>
            {!languagesInfo.length ? (
              <span>There is no border countries</span>
            ) : (
              <TagGroup>
                {languagesInfo.map((l) => (
                  <span key={l}>{l}</span>
                ))}
              </TagGroup>
            )}
          </Meta>

          <Meta>
            <b>Border Countries: </b>
            {!props.borders ? (
              <span>There is no border countries</span>
            ) : (
              <TagGroup>
                {neighbors.map((b) => (
                  <Tag
                    key={b}
                    onClick={() => goToNeighborCountry(`/country/${b}`)}
                  >
                    {b}
                  </Tag>
                ))}
              </TagGroup>
            )}
          </Meta>
        </div>
      </InfoWrapper>
    </div>
  );
};
