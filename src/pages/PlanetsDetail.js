import React, { useContext } from "react";
import { Welcome } from "../App.style";
import Card from "../components/Card";
import { PlanetContext } from "../contexts/PlanetsContext";
import { ContainerButton } from "../App.style";
import Button from "../components/Button";

const Detail = () => {
  const { detailPlanet } = useContext(PlanetContext);
  
  return (
    <>
      <ContainerButton>
        <Button page={"planetas"} />
      </ContainerButton>
      <Welcome>
        <header>Not so long time ago, in a galaxy not so far away...</header>
      </Welcome>
      {detailPlanet ? <Card item={detailPlanet}  type={"planetas"}/> : null}
    </>
  );
};

export default Detail;
