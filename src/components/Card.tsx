import React from "react";
import styled from "styled-components";

// styled-components----------------------------------------------------------------

const Wrapper = styled.article`
  border-radius: var(--radius);
  background-color: var(--colors-ui-base);
  box-shadow: var(--shadow);
  cursor: pointer;
  overflow: hidden;
`;

const CardImage = styled.img`
  display: block;
  width: 100%;
  height: 150px;
  object-fit: cover;
  object-position: center;
  box-shadow: var(--shadow);
`;

const CardBody = styled.div`
  padding: 1rem 1.5rem 2rem;
`;

const CardTitle = styled.h3`
  margin: 0;
  font-size: var(--fs-md);
  font-weight: var(--fw-bold);
`;

const CardList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 1rem 0 0;
`;

const CardListItem = styled.li`
  font-size: var(--fs-sm);
  line-height: 1.5;
  font-weight: var(--fw-light);

  & > b {
    font-weight: var(--fw-bold);
  }
`;

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
