import { useEffect, useState } from "react";
import axios from "axios";

import { Controls } from "./components/Controls";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { ALL_COUNTRIES } from "./config";

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios.get(ALL_COUNTRIES).then(({ data }) => setCountries(data));
  }, []);

  console.log(countries);

  return (
    <div>
      <Header />
      <Main>
        <Controls />
      </Main>
    </div>
  );
}

export default App;
