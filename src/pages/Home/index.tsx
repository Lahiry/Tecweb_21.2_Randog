import { useState } from "react";
import { Dog } from "../../components/Dog";
import { Container } from "./styles"

const Home = (): JSX.Element => {

  const[search, setSearch] = useState('');

  return (
    <Container> 
      <h2>Search by breed</h2>

      <input
        placeholder="Search breed"
        onChange={event => setSearch(event.target.value)}
      />
      
      <Dog search={search}/>
    </Container>
  );
}

export default Home;