import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { NavLink,Link } from 'react-router-dom';

const Navbar = styled.div`
   position: absolute;
   width: 100%;
   height: 60px;
   top: 8px;
   right: 0px;
   background-color: slateblue;
   input {
      text-align: center;
      font: inherit;
      padding: 0.5rem;
      border-radius: 6px;
      border: 1px solid #ccc;
      width: 15rem;
      max-width: 100%;
      top: 10px;
      position:absolute;
      right: 150px;
   }
   button {
      background-color: green;
      color: white;
      position: absolute;
      right: 20px;
      top: 13px;
      width: 100px;
      height: 30px;
      border-radius: 5px;
      font-size: .5cm;
      :hover{
         background-color: yellow;
         color: black;

      }
   }
`;


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