import {ChangeEvent, FC} from "react";
import styled from "styled-components";
import {IoSearch} from "react-icons/io5";

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

export const Search: FC<PropsType> = ({setSearch, search}) => {

  const updateInputValue = (event: ChangeEvent<HTMLInputElement>): void => {
    setSearch(event.target.value)
  }

  return (
    <InputContainer>
      <IoSearch/>
      <Input onChange={updateInputValue} value={search}/>
    </InputContainer>
  );
};
