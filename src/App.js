import './App.css';
import React from 'react';
import {useState} from 'react';
import Cards from './components/Cards';
import styled from 'styled-components';
import characters, { Rick } from './data.js';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Detail from './components/Detail';
import Error from './components/Error'
import { Routes, Route, Link } from 'react-router-dom';

// import { useState } from 'react';
// import './App.css'
// import Cards from './components/Cards'
// import Nav from './components/Nav'
// import { Routes, Route } from 'react-router-dom';
// import styled from 'styled-components'
// import About from './components/About';
// import Detail from './components/Detail';
// import Error from './components/Error';
// import Home from './components/Home';

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
        <Cards characters={characters} onClose={onClose}/>
      </div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/detail/:detailId' element={<Detail/>} />
        <Route path='/*' element={<Error/>} />
      </Routes>
    </Estrellas>

  );
}

export default App
