import {FC} from "react";
import {CardPropsType, InfoType} from "./types";
import {CardBody, CardImage, CardList, CardListItem, CardTitle, CardWrapper} from "./CartLayout";

export const Card: FC<CardPropsType> = ({img, name, info, onClick}) => (
  <CardWrapper onClick={onClick}>
    <CardImage src={img}/>
    <CardBody>
      <CardTitle>{name}</CardTitle>
      <CardList>
        {info.map((el: InfoType) => (
          <CardListItem key={el.title}>
            <b>{el.title}: </b>
            {el.discription}
          </CardListItem>
        ))}
      </CardList>
    </CardBody>
  </CardWrapper>
);
