import React, { useState } from 'react';
import { Navbar } from '../CSS';

export default function SearchBar(props) {
   const [characters, setCharacters] = useState("");

   const handleChange = (e) => {
      const {value} = e.target;
      setCharacters(value)
      }
   
   return (
      <Navbar>
         <input type='search' placeholder='Buscar' onChange={handleChange} />
         <button onClick={() => props.onSearch(characters)}>Agregar</button>
      </Navbar>
   );
}