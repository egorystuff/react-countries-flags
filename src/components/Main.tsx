import React from "react";
import styled from "styled-components";
import { Container } from "./Container";

// styled-components----------------------------------------------------------------

const Wrapper = styled.main`
  padding: 2rem 0;

  @media (min-width: 767px) {
    padding: 4rem 0;
  }
`;

const Title = styled.a.attrs({
  href: "/",
})`
  color: var(--colors-text);
  font-size: var(--fs-md);
  text-decoration: none;
  font-weight: var(--fw-bold);
`;

// ---------------------------------------------------------------------------------

type PropsType = {
  children: React.ReactNode;
};

export const Main: React.FC<PropsType> = (props) => {
  return (
    <Wrapper>
      <Container>{props.children}</Container>
    </Wrapper>
  );
};
