import { useEffect, useState } from "react";

import { Search } from "./Search";
import { CustomSelect } from "./CustomSelect";

export const Controls: React.FC = () => {
  const [search, setSearch] = useState<string>("");
  const [region, setRegion] = useState("");

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
    <div>
      <Search search={search} setSearch={setSearch} />
      <CustomSelect
        options={options}
        placeholder='Filter by Region'
        isClearable
        isSearchable={false}
        value={region}
        // onChange={setRegion}
      />
    </div>
  );
};
