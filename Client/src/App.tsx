import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route, useLocation, useNavigate, Navigate} from 'react-router-dom';
import { Cards, Nav, About, Detail, Error, FormLogin } from './components/index'
import Favorites from './components/Favorites.tsx'
import { Estrellas} from './CSS/index.ts';
import characterActions from './redux/characters/actions.ts'
import { TAppState, TDispatch } from './redux/store.ts';

function App () {

    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch<TDispatch>();
    const access = useSelector(({user}: TAppState) => user.user.access)
    const allCharacters = useSelector(({characters}: TAppState) => characters.characters)
    const pageInfo = useSelector(({characters}: TAppState) => characters.pageInfo)

  //const [access, setAccess] = useState(false);

  //const [characters, setCharacters] = useState([])

    function onSearch(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        const {name} = event.target
        dispatch(characterActions.onSearchAction({name: name.value}))
    }

    useEffect(() => {
        !access && navigate('/');
        if (!location.pathname.includes("/detail")) {
            access && navigate('/home');
        }
    }, [access, allCharacters, pageInfo]);



    function onClose(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault()
        const { id } = e.target
        console.log(e.target.id)
        dispatch(characterActions.delCharacter(+id))
        //setCharacters(characters.filter(char => char.id !== id))
    }

    return (
        <Estrellas>
            {location.pathname !== '/' && <Nav onSearch={onSearch}/>}
            <Routes>
                <Route path='/' element={<FormLogin/>} />
                <Route path='/home' element={<Cards characters={allCharacters} onClose={onClose} pageInfo={pageInfo}/>} />
                <Route path='/about' element={<About/>} />
                <Route path='/detail/:characterId' element={<Detail/>}/>
                <Route path='/favorites' element={access? <Favorites/> : <Navigate to='/'/>}/>
                <Route path='*' element={<Error/>} />
            </Routes>
        </Estrellas>
    );
}

export default App

