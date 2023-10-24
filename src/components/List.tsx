import React from "react";
import styled from "styled-components";

// styled-components----------------------------------------------------------------

const Wrapper = styled.section`
  wiidth: 100%;
  padding: 2rem 0;

  display: grid;
  grid-template-columns: repeat(1, 1ft);
  gap: 2rem;

  @media (min-width: 767px) {
    grid-template-columns: repeat(2, 1ft);
    gap: 3rem;

    padding: 2.5rem 0;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1ft);
    gap: 4rem;
  }
`;

// ---------------------------------------------------------------------------------

type PropsType = {
  children: React.ReactNode;
};

export const List: React.FC<PropsType> = (props) => {
  return <Wrapper>{props.children}</Wrapper>;
};
