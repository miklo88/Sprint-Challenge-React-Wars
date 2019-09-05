import React, { useState, useEffect } from 'react';
import axios from "axios";
import Navigation from "./components/Navigation";
import CharacterCard from "./components/CharacterCard";


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  // componentDidUpdate(prevProps, prevState) {
    
  // }
  
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`https://swapi.co/api/people/`)
    // axios.get(`https://swapi.co/api/species/`)

      .then(res => {
        console.log(res.data.results);
        setData(res.data.results);
      })
      .catch(err => {
        console.log(err);
      })
  }, [])


  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">

    <Navigation />

      <div className="CardClass">
        {data.length ? data.map(item => {
          console.log(item)
          return <CharacterCard name={item.name}
            birthDate={item.birth_year}
            gender={item.gender}
            height={item.height} />
        }) : null}
      </div>

    </div>
  );
}

export default App