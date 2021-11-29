import React, { useContext, useEffect, useState } from "react";
import { Welcome, Container } from "../App.style";
import Search from "../components/Search";
import List from "../components/List";
import { useNavigate } from "react-router-dom";
import { PlanetContext } from "../contexts/PlanetsContext";
import styled from "styled-components";
const App = () => {
  const { planets, getPlanets, setDetailPlanet } = useContext(PlanetContext);
  const [search, setSearch] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    if (!planets) getPlanets();
  });


  const searchName = (term) => {
    const result = planets.filter((item) => item.name.toLowerCase().includes(term.toLowerCase()));
    setSearch(result);
  }

  return (
    <>
      <Voltar onClick={() => { navigate("/"); }}>Voltar</Voltar>
      <Welcome>
        <header>Not so long time ago, in a galaxy not so far away...</header>
      </Welcome>
      <Container>
        <Search searchName={searchName}></Search>
        {planets ? (<List items={search ? search : planets} setDetailItem={setDetailPlanet} detailPage={"planetdetalhes"}></List>) : null}
      </Container>
    </>
  );
}

export default App;

const Voltar = styled.div`
  color: #ffe300;
  font-weight: bold;
  font-size: 20px;
  cursor: pointer;
`;