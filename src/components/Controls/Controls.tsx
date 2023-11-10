import {FC, useEffect, useState} from "react";
import {Search} from "../Search";
import {CustomSelect} from "../../Layouts/CustomSelect";
import {Wrapper} from "./ControlsLayout";
import {Optionstype, PropsType} from "./types";

export const Controls: FC<PropsType> = ({onSearch}) => {
  const [search, setSearch] = useState<string>("");
  const [region, setRegion] = useState<string>("");

  const options: Optionstype[] = [
    {value: "", label: "All"},
    {value: "Africa", label: "Africa"},
    {value: "America", label: "America"},
    {value: "Asia", label: "Asia"},
    {value: "Europe", label: "Europe"},
    {value: "Oceania", label: "Oceania"},
  ];

  const setRegionValue = ({value}: any): void => {
    setRegion(value)
  }

  useEffect(() => {
    const regionValue = region || "";

    onSearch(search, regionValue);
  }, [search, region]);

  return (
    <Wrapper>
      <Search search={search} setSearch={setSearch}/>
      <CustomSelect
        options={options}
        placeholder='Filter by Region'
        // isClearable
        isSearchable={false}
        // value={""}
        onChange={setRegionValue}
      />
    </Wrapper>
  );
};
