import './App.css'
import Card from './components/Card.jsx'
import Cards from './components/Cards.jsx'
import SearchBar from './components/SearchBar.jsx'
import styled from 'styled-components'
import characters, { Rick } from './data.js'
const Estrellas=styled.div`
background-image:url(https://static.vecteezy.com/system/resources/thumbnails/001/806/801/small/glowing-stars-background-loop-free-video.jpg); backgound-size:100%`;
function App () {
  return (
    <Estrellas>
    <div className='App' style={{ padding: '25px' }}>
      <div>
        <Card
          name={Rick.name}
          species={Rick.species}
          gender={Rick.gender}
          image={Rick.image}
          onClose={() => window.alert('Emulamos que se cierra la card')}
        />
      </div>
      <hr />
      <div>
        <Cards
          characters={characters}
        />
      </div>
      <hr />
      <div>
        <SearchBar
          onSearch={(characterID) => window.alert(characterID)}
        />
      </div>
    </div>
    </Estrellas>
  )
}

export default App
