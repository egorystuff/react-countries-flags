import React from "react";
import styled from "styled-components";

// styled-components----------------------------------------------------------------

const Wrapper = styled.article``;

const CardImage = styled.img``;

const CardBody = styled.div``;

const CardTitle = styled.h3``;

const CardList = styled.ul``;

const CardListItem = styled.li``;

// ---------------------------------------------------------------------------------

type PropsType = {
  img: any;
  name: any;
  info: any[];
  onClick: (value: any) => void;
};

export const Card: React.FC<PropsType> = (props) => {
  return (
    <Wrapper onClick={props.onClick}>
      <CardImage />
      <CardBody>
        <CardTitle>{props.name}</CardTitle>
        <CardList>
          {props.info.map((el: any) => (
            <CardListItem key={el.title}>
              <b>{el.title}:</b>
              {el.discription}
            </CardListItem>
          ))}
        </CardList>
      </CardBody>
    </Wrapper>
  );
};
