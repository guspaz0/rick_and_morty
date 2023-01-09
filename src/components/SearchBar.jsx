import './SearchBar.css';

export default function SearchBar(props) {
   return (
      <div className="input">
         <input type='search' placeholder='Buscar' />
      <button onClick={() => props.onSearch('un ID')}>Agregar</button> 
      </div>
   );
}
