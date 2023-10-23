import { Controls } from "./components/Controls";
import { Header } from "./components/Header";
import { Main } from "./components/Main";

function App() {
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
