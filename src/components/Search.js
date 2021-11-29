import React from "react";
import styled from "styled-components";

const Search = ({ searchName }) => {
  return (
    <SearchContainer>
      <input
        type="text"
        placeholder="Digite um nome para filtrar..."
        onChange={(e) => searchName(e.target.value)}
      />
    </SearchContainer>
  );
};

export default Search;

const SearchContainer = styled.div`
  margin-top: 30px;
  max-width: 100%;
  min-height: 12px;
  flex: 1;
  display: flex;
  position: relative;
  width: 100%;
  flex-direction: row;
  overflow: hidden;
  & input {
    box-sizing: border-box;
    margin: 0;
    padding: 15px;
    flex: 1;
    border: none;
    appearance: none;
    font-size: 18px;
    outline: none;
    border: 1px solid #333;
    border-radius: 7px;
    background-color: #fff;
    width: 100%;
  }
`;