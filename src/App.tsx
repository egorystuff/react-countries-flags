import { Route, Routes } from "react-router-dom";

import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { HomePage } from "./pages/HomePage";
import { Details } from "./pages/Details";
import { NotFoung } from "./pages/NotFoung";

function App() {
  return (
    <div>
      <Header />
      <Main>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/country/:name' element={<Details />} />
          <Route element={<NotFoung />} />
        </Routes>
      </Main>
    </div>
  );
}

export default App;
