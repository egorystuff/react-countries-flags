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

type PropsType = {
  onSearch: (search: string, region: string) => void;
};

export const Controls: React.FC<PropsType> = (props) => {
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("");

  type Optionstype = {
    value: string;
    label: string;
  };

  const options: Optionstype[] = [
    { value: "", label: "All" },
    { value: "Africa", label: "Africa" },
    { value: "America", label: "America" },
    { value: "Asia", label: "Asia" },
    { value: "Europe", label: "Europe" },
    { value: "Oceania", label: "Oceania" },
  ];

  useEffect(() => {
    const regionValue = region || "";

    props.onSearch(search, regionValue);
  }, [search, region]);

  return (
    <Wrapper>
      <Search search={search} setSearch={setSearch} />
      <CustomSelect
        options={options}
        placeholder='Filter by Region'
        // isClearable
        isSearchable={false}
        // value={""}
        onChange={(event: any) => {
          setRegion(event.value);
        }}
      />
    </Wrapper>
  );
};
