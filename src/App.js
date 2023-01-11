import { useState } from 'react'
import './App.css'
import Cards from './components/Cards.jsx'
import styled from 'styled-components'
import characters, { Rick } from './data.js'
import Nav from './components/Nav.jsx'

const Estrellas = styled.div`
  background-image: url(https://i.pinimg.com/originals/74/ce/23/74ce2337bade70a41d90adac7d861d23.jpg);
  position: absolute;
  width: 100%;
  height: 100%;
`;

function App () {
  const [characters, setCharacters] = useState([

  ])
  // const example = {
  //   name: 'Morty Smith',
  //   species: 'Human',
  //   gender: 'Male',
  //   image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
  // };

  function onSearch(character) {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('No hay personajes con ese ID');
         }
      });
  }

  return (
    <Estrellas>
      <div>
        <Nav onSearch={onSearch}/>
      </div>
      <div>
        <Cards
          characters={characters}
        />
      </div>
    </Estrellas>
  )
}

export default App
