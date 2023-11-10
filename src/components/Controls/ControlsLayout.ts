import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (min-width: 767px) {
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
  }
`;
