import './App.css'
import Card from './components/Card.jsx'
import Cards from './components/Cards.jsx'
import SearchBar from './components/SearchBar.jsx'
import characters, { Rick } from './data.js'
import styles from './components/Card.module.css'

function App () {
  return (
    /*<img src="https://img.freepik.com/foto-gratis/hermosas-estrellas-brillantes-cielo-nocturno_181624-622.jpg" alt>*/
    <div className='App' style={{ padding: '25px' }} >
      <div className={styles.listItem}>
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
  )
}

export default App
