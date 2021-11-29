import React from "react";
import styled from "styled-components";
import { Container } from "../App.style";

const Card = ({ item, type }) => {
  return (
    <Container>
      {type === "naves" ? (<Content>
        <h1>Detalhes da Nave</h1>
        <br />
        <p>
          <b>Nome:</b> <span>{item.name}</span>
        </p>
        <p>
          <b>Modelo:</b> <span>{item.model}</span>
        </p>
        <p>
          <b>Fabricante:</b> <span>{item.manufacturer}</span>
        </p>
        <p>
          <b>Custo em créditos:</b> <span>{item.cost_in_credits}</span>
        </p>
        <p>
          <b>Comprimento:</b> <span>{item.length}</span>
        </p>
        <p>
          <b>Velocidade atmosférica máxima:</b> <span>{item.max_atmosphering_speed}</span>
        </p>
      </Content>) : null}
      {type === "pessoa" ? (<Content>
        <h1>Detalhes do Personagem</h1>
        <br />
        <p>
          <b>Nome:</b> <span>{item.name}</span>
        </p>
        <p>
          <b>Altura:</b> <span>{item.height}</span>
        </p>
        <p>
          <b>Peso:</b> <span>{item.mass}</span>
        </p>
        <p>
          <b>Nascimento:</b> <span>{item.birth_year}</span>
        </p>
        <p>
          <b>Cabelo:</b> <span>{item.hair_color}</span>
        </p>
        <p>
          <b>Sexo:</b> <span>{item.gender}</span>
        </p>
      </Content>) : null}
      {type === "planetas" ? (<Content>
        <h1>Detalhes do Planeta</h1>
        <br />
        <p>
          <b>Nome:</b> <span>{item.name}</span>
        </p>
        <p>
          <b>Período de rotação:</b> <span>{item.rotation_period}</span>
        </p>
        <p>
          <b>Período orbital:</b> <span>{item.orbital_period}</span>
        </p>
        <p>
          <b>Diâmetro:</b> <span>{item.diameter}</span>
        </p>
        <p>
          <b>Clima:</b> <span>{item.climate}</span>
        </p>
        <p>
          <b>Gravidade:</b> <span>{item.gravity}</span>
        </p>
      </Content>) : null}
    </Container>
  );
};

export default Card;

// styles
const Content = styled.div`
  height: auto;
  width: 100%;
  padding: 20px 30px;
  box-sizing: border-box;
  color: #333;
  font-size: 20px;
  font-weight: bold;
  line-height: 10px;
  border: 1px solid #333;
  border-radius: 7px;
  background-color: #fff;
  & span {
    color: #444;
  }
  & h1 {
    text-align: center;
    font-size: 20px;
  }
`;