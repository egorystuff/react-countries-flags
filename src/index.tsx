import {Suspense, StrictMode} from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import "./index.css";
import {App} from "./App";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <StrictMode>
    <BrowserRouter>
      <Suspense fallback={<h1>loading...</h1>}>
        <App/>
      </Suspense>
    </BrowserRouter>
  </StrictMode>,
);
