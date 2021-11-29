import React, { useContext } from "react";
import { Welcome } from "../App.style";
import Card from "../components/Card";
import { ItemContext } from "../contexts/ItemContext";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Detail = () => {
  const { detailItem } = useContext(ItemContext);
  const navigate = useNavigate();
  return (
    <>
      <Voltar onClick={()=>{navigate("/");}}>Voltar</Voltar>
      <Welcome>
        <header>Not so long time ago, in a galaxy not so far away...</header>
      </Welcome>
      {detailItem ? <Card people={detailItem} /> : null}
    </>
  );
};

export default Detail;

const Voltar = styled.div`
  color: #ffe300;
  font-weight: bold;
  font-size: 20px;
  cursor: pointer;
`;