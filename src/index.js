import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import AppRouter from "./routes";

import { PeopleContextProvider } from "./contexts/PeopleContext";
import { PlanetContextProvider } from "./contexts/PlanetsContext";
import { StarshipContextProvider } from "./contexts/StarshipsContext";

ReactDOM.render(
  <React.StrictMode>
    <PeopleContextProvider>
      <PlanetContextProvider>
        <StarshipContextProvider>
          <AppRouter>
            <App />
          </AppRouter>
        </StarshipContextProvider>
      </PlanetContextProvider>
    </PeopleContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);