import { useState } from 'react';
import './App.css';
import Cards from './components/Cards.jsx';
import styled from 'styled-components';
import characters, { Rick } from './data.js';
import Nav from './components/Nav.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Detail from './components/Detail.jsx';
import { Routes, Route } from 'react-router-dom';

const Estrellas = styled.div`
  background-image: url(https://i.pinimg.com/originals/74/ce/23/74ce2337bade70a41d90adac7d861d23.jpg);
  position: absolute;
  width: 100%;
  height: 100%;
`;

function App () {
  const [characters, setCharacters] = useState([])

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

  const onClose = (id) => {
    setCharacters(characters.filter(char => char.id !== id))
  } 


  return (
    <Estrellas>
      <div>
        <Nav onSearch={onSearch}/>
      </div>
      <div>
        <Cards
          characters={characters}
          onClose={onClose}
        />
      </div>
      <Routes>
      <Route to="/" element={<Home/>}/>
        <Route to="/about" element={<About/>}/>
        <Route to="/detail/:detailId" element={<Detail/>}/>
      </Routes>
    </Estrellas>

  )
}

export default App
