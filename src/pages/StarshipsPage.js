import React, { useContext, useEffect, useState } from "react";
import { Welcome, Container } from "../App.style";
import Search from "../components/Search";
import List from "../components/List";
import { useNavigate } from "react-router-dom";
import { StarshipContext } from "../contexts/StarshipsContext";
import styled from "styled-components";
const App = () => {
  const { starships, getStarships, setDetailStarship } = useContext(StarshipContext);
  const [search, setSearch] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    if (!starships) getStarships();
  });


  const searchName = (term) => {
    const result = starships.filter((item) => item.name.toLowerCase().includes(term.toLowerCase()));
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
        {starships ? (<List items={search ? search : starships} setDetailItem={setDetailStarship} detailPage={"starshipdetalhes"}></List>) : null}
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