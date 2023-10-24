import React from "react";
import styled from "styled-components";

import { IoSearch } from "react-icons/io5";

// styled-components----------------------------------------------------------------
const InputContainer = styled.label`
  background-color: var(--colors-ui-base);
  padding: 1rem 2rem;
  display: flex;
  align-items: center;

  border-radius: var(--radius);
  box-shadow: var(--shadow);
  width: 100%;
  margin-bottom: 1rem;

  @media (min-width: 767px) {
    margin-bottom: 0;
    width: 280px;
  }
`;

const Input = styled.input.attrs({
  type: "search",
  placeholder: "Search for a country...",
})`
  margin-left: 2rem;
  border: none;
  outline: none;
  color: var(--colors-text);
  background-color: var(--colors-ui-base);
`;

// ---------------------------------------------------------------------------------

type PropsType = {
  search: string;
  setSearch: (value: string) => void;
};

export const Search: React.FC<PropsType> = (props) => {
  return (
    <InputContainer>
      <IoSearch />
      <Input onChange={(event) => props.setSearch(event.target.value)} value={props.search} />
    </InputContainer>
  );
};