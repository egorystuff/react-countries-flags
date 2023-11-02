import styled from "styled-components";

export const HeaderEl = styled.header`
  box-shadow: var(--shadow);
  background-color: var(--colors-ui-base);
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 1.5rem 0;
`;

export const Title = styled.div`
  color: var(--colors-text);
  font-size: var(--fs-md);
  text-decoration: none;
  font-weight: var(--fw-bold);
`;

export const ModeSwitcher = styled.div`
  color: var(--colors-text);
  font-size: var(--fs-md);
  text-transform: capitalize;
  cursor: pointer;
`;