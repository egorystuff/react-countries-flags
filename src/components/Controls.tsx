import React from "react";
import { useEffect, useState } from "react";
import styled from "styled-components";

import { Search } from "./Search";
import { CustomSelect } from "./CustomSelect";

// styled-components----------------------------------------------------------------

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (min-width: 767px) {
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
  }
`;

// ---------------------------------------------------------------------------------

export const Controls: React.FC = () => {
  const [search, setSearch] = useState<string>("");
  const [region, setRegion] = useState<string>("");

  type Optionstype = {
    value: string;
    label: string;
  };

  const options: Optionstype[] = [
    { value: "Africa", label: "Africa" },
    { value: "America", label: "America" },
    { value: "Asia", label: "Asia" },
    { value: "Europe", label: "Europe" },
    { value: "Oceania", label: "Oceania" },
  ];

  return (
    <Wrapper>
      <Search search={search} setSearch={setSearch} />
      <CustomSelect
        options={options}
        placeholder='Filter by Region'
        isClearable
        isSearchable={false}
        // value={region}
        // onChange={setRegion}
      />
    </Wrapper>
  );
};
