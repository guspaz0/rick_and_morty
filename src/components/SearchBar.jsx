import './SearchBar.css';
import styled from 'styled-components';

const Navbar = styled.div`
   position: absolute;
   width: 100%;
   height: 60px;
   top: 8px;
   right: 0px;
   background-color: slateblue;
   input {
      position:absolute;
      right: 150px;
   }
   button {
      position: absolute;
      right: 20px;
      top: 13px;
      width: 100px;
      height: 30px;
      border-radius: 5px;
      font-size: .5cm;
   }
`;

export default function SearchBar(props) {
   return (
      <Navbar>
         <input type='search' placeholder='Buscar' />
         <button onClick={() => props.onSearch('un ID')}>Agregar</button> 
      </Navbar>
   );
}
