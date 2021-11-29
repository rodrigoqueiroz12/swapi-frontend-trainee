import React, { useContext, useEffect, useState } from "react";
import { Welcome, Container, ContainerButton } from "./App.style";
import Search from "./components/Search";
import List from "./components/List";
import Button from "./components/Button";
import { PeopleContext } from "./contexts/PeopleContext";

const App = () => {
  const { peoples, getPeoples, setDetailPeople } = useContext(PeopleContext);
  const [search, setSearch] = useState(null);

  useEffect(() => {
    if (!peoples) getPeoples();
  });


  const searchName = (term) => {
    const result = peoples.filter((item) => item.name.toLowerCase().includes(term.toLowerCase()));
    setSearch(result);
  }

  return (
    <>
      <ContainerButton>
        <Button page={"planetas"} />
        <Button page={"naves"} />
      </ContainerButton>
      <Welcome>
        <header>Not so long time ago, in a galaxy not so far away...</header>
      </Welcome>
      <Container>
        <Search searchName={searchName}></Search>
        {peoples ? (<List items={search ? search : peoples} setDetailItem={setDetailPeople} detailPage={"peopledetalhes"}></List>) : null}
      </Container>
    </>
  );
}

export default App;
