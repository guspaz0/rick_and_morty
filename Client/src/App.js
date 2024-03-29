import React from 'react';
import {useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { Cards, Nav, About, Detail, Error, FormLogin, Favorites } from './components/index'
import {Estrellas} from './CSS';
import { onSearchAction, loginAction, addCharacter, delCharacter } from './redux/actions';

function App () {

  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const access = useSelector(state => state.Access)
  const allCharacters = useSelector(state => state.allCharacters)

  //const [access, setAccess] = useState(false);

  //const [characters, setCharacters] = useState([])
  
  function search (value){
    for (var i = 0; i < allCharacters.length; i++) {
      if (allCharacters[i].id === value) {
        return true
      }
    }
  }
  

  async function onSearch(character) {
  try {
    const data = await onSearchAction(character)
    if (data.name) {
      if (search(data.id)) {
        window.alert('El ID '+data.id+' ya existe')
      } else {
        dispatch(addCharacter(data.id));
      }
    } else {
      window.alert('No hay personajes con ese ID');
    }
  } catch (error) {
    console.log(error)
  }
}

  useEffect(() => {
    !access && navigate('/');
    access && navigate('/home');
  }, [access]);

async function login(userData) {
  try {
    dispatch(loginAction(userData));
    // setAccess(() => {
    //   if (data.access) return true
    //   else return false
    // });
    //access && navigate('/home')
  } catch (error) {console.log(error)}
}

  const onClose = (id) => {
    dispatch(delCharacter(id))
    //setCharacters(characters.filter(char => char.id !== id))
  } 

  return (
    <Estrellas>
      {location.pathname !== '/' && <Nav onSearch={onSearch}/>}
      <Routes>
        
        <Route exact path='/' element={<FormLogin login={login}/>} />
        <Route path='/home' element={<Cards characters={allCharacters} onClose={onClose}/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/detail/:detailId' element={<Detail/>}/>
        <Route path='*' element={<Error/>} />
        <Route path='/favorites' element={<Favorites/>} />
      </Routes>
    </Estrellas>
  );
}

export default App
