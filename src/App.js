import './App.css';
import React from 'react';
import {useState, useEffect } from 'react';
import Cards from './components/Cards';
import styled from 'styled-components';
// import characters, { Rick } from './data.js';
import Nav from './components/Nav';
import About from './components/About';
import Detail from './components/Detail';
import Error from './components/Error';
import FormLogin from './components/FormLogin.jsx';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';

const Estrellas = styled.div`
  background-image: url(https://i.pinimg.com/originals/74/ce/23/74ce2337bade70a41d90adac7d861d23.jpg);
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 100%;
`;

function App () {

  const location = useLocation();
  const navigate = useNavigate();

  const username = 'gustip@gmail.com';
  const password = 'gusti123';

  const [access, setAccess] = useState(false);

  const [characters, setCharacters] = useState([])
  
  function search (value){
    for (var i = 0; i < characters.length; i++) {
      if (characters[i].id === value) {
        return true
      }
    }
  }
  function onSearch(character) {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
          if (data.name) {
            if (search(data.id)) {
              window.alert('El ID '+data.id+' ya existe')
            } else {
              setCharacters((oldChars) => [...oldChars, data]);
            }
          } else {
            window.alert('No hay personajes con ese ID');
          }
      });
    }

  useEffect(() => {
    !access && navigate('/');
  }, [access]);

  function login(userData){
    if (userData.password === password && userData.username === username) {
      setAccess(true);
      navigate('/home');
    }
    else {
      window.alert("usuario o contraseña invalidos");
    }
}
  const onClose = (id) => {
    setCharacters(characters.filter(char => char.id !== id))
  } 

  return (
    <Estrellas>
      {location.pathname !== '/' && <Nav onSearch={onSearch}/>}
      <Routes>
        <Route exact path='/' element={<FormLogin login={login}/>} />
        <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/detail/:detailId' element={<Detail/>} />
        <Route path='*' element={<Error/>} />
      </Routes>
    </Estrellas>

  );
}

export default App
