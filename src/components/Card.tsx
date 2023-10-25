import React from "react";
import styled from "styled-components";

// styled-components----------------------------------------------------------------

const Wrapper = styled.article`
  border-radius: var(--radius);
  background-color: var(--colors-ui-base);
  box-shadow: var(--shadow);
  cursor: pointer;
  overflow: hidden;
  padding: 10px;
`;

const CardImage = styled.img`
  display: block;
  width: 100%;
  height: 150px;
  object-fit: cover;
  object-position: center;
  box-shadow: var(--shadow);
`;

const CardBody = styled.div``;

const CardTitle = styled.h3``;

const CardList = styled.ul``;

const CardListItem = styled.li``;

// ---------------------------------------------------------------------------------

type PropsType = {
  img: string;
  name: string;
  info: any[];
  onClick: (value: any) => void;
};

export const Card: React.FC<PropsType> = (props) => {
  return (
    <Wrapper onClick={props.onClick}>
      <CardImage src={props.img} />
      <CardBody>
        <CardTitle>{props.name}</CardTitle>
        <CardList>
          {props.info.map((el) => (
            <CardListItem key={el.title}>
              <b>{el.title}: </b>
              {el.discription}
            </CardListItem>
          ))}
        </CardList>
      </CardBody>
    </Wrapper>
  );
};
