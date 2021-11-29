import React from "react";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import App from "./App";
import PeopleDetail from "./pages/PeopleDetail";
import PlanetsPage from "./pages/PlanetsPage";
import StarshipsPage from "./pages/StarshipsPage";
import PlanetsDetail from "./pages/PlanetsDetail";
import StarshipsDetail from "./pages/StarshipsDetail";

const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/", element: <App /> },
    { path: "peopledetalhes", element: <PeopleDetail /> },
    { path: "planetas/planetdetalhes", element: <PlanetsDetail /> },
    { path: "naves/starshipdetalhes", element: <StarshipsDetail /> },
    { path: "planetas", element: <PlanetsPage /> },
    { path: "naves", element: <StarshipsPage /> },
  ]);
  return routes;
};

const AppRouter = () => {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
};

export default AppRouter;