import React, { useContext } from "react";
import { Welcome } from "../App.style";
import Card from "../components/Card";
import { StarshipContext } from "../contexts/StarshipsContext";
import { ContainerButton } from "../App.style";
import Button from "../components/Button";

const Detail = () => {
  const { detailStarship } = useContext(StarshipContext);
  
  return (
    <>
      <ContainerButton>
        <Button page={"naves"} />
      </ContainerButton>
      <Welcome>
        <header>Not so long time ago, in a galaxy not so far away...</header>
      </Welcome>
      {detailStarship ? <Card item={detailStarship} type = {"naves"}/> : null}
    </>
  );
};

export default Detail;
