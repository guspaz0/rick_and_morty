import './App.css'
import Card from './components/Card.jsx'
import Cards from './components/Cards.jsx'
import SearchBar from './components/SearchBar.jsx'
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
  return (
    <Estrellas>
      <div>
        <SearchBar
          onSearch={(characterID) => window.alert(characterID)}/>
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
