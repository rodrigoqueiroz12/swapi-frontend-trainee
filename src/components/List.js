import React from 'react';
import { useNavigate } from "react-router-dom";
import { Container } from "../App.style";
import styled from "styled-components";

const List = ({ items, setDetailItem, detailPage }) => {
  const navigate = useNavigate();
  return (
    <Container>
      <Title>
        Lista
      </Title>
      <Itens>
        {items.map((item) => (
          <li key={item.url}>
            <p>{item.name}</p>
            <button
              className="button-detail"
              onClick={() => {
                setDetailItem(item);
                navigate(detailPage);
              }}
            >
              Ver detalhes
            </button>
          </li>
        ))}
      </Itens>
    </Container>
  )
}

export default List;

// Styled
const Title = styled.h1`
    margin: 10px;
    padding: 0;
    color: #fff;
    font-size: 25px
`;

const Itens = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  width: 100%;
  & li {
    position: relative;
    box-sizing: border-box;
    margin: 10px 0;
    padding: 10px;
    padding-left: 15px;
    width: 100%;
    flex-direction: row;
    color: #333;
    font-size: 20px;
    font-weight: bold;
    line-height: 5px;
    border: 1px solid #333;
    border-radius: 7px;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    transition: .3s background;
    &:hover {
      background: #f0f0f0;
    }
  }
  & .button-detail {
    position: absolute;
    margin-right: 15px;
    right: 0;
    top: 50%;

    box-sizing: border-box;
    

    font-size: 15px;
    font-weight: bold;
    color: #005076;
    line-height: 5px;
    text-decoration: none;
    background: none;
    border: none;
    cursor: pointer;
    transition: .3s color
  }
  & button:hover {
    color: #0074ab;
  }
`;