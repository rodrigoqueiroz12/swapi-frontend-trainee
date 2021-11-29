import React, { createContext, useState } from "react";
import api from "../services/api";

export const StarshipContext = createContext({});

export const StarshipContextProvider = ({ children }) => {
  const [starships, setStarships] = useState(null);
  const [detailStarship, setDetailStarship] = useState();

  const getStarships = async () => {
    try {
      const swapiResult = await api.get("/starships");
      const { results } = swapiResult.data;
      setStarships(results);
    } catch (error) {
      console.log("Vishi... Deu erro ;(");
    }
  };

  const starshipProviderValue = {
    starships,
    detailStarship,
    getStarships,
    setDetailStarship,
  };

  return (
    <StarshipContext.Provider value={starshipProviderValue}>
      {children}
    </StarshipContext.Provider>
  );
};