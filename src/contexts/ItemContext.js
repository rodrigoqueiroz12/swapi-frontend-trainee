import React, { createContext, useState } from "react";
import api from "../services/api";

export const ItemContext = createContext({});

export const ItemContextProvider = ({ children }) => {
  const [Item, setItem] = useState(null);
  const [detailItem, setDetailItem] = useState();

  const getItem = async () => {
    try {
      const swapiResult = await api.get("/people");
      const { results } = swapiResult.data;
      setItem(results);
    } catch (error) {
      console.log("Ocorreu um erro.");
    }
  };

  const itemProviderValue = {
    Item,
    detailItem,
    getItem,
    setDetailItem,
  };

  return (
    <ItemContext.Provider value={itemProviderValue}>
      {children}
    </ItemContext.Provider>
  );
};