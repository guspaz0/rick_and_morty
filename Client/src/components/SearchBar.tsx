import React, { useState } from 'react';
import { CharacterName } from '../interfaces/Character';

interface Props {
   onSearch: React.FormEventHandler<HTMLFormElement>
}

export default function SearchBar({onSearch}: Props) {
   const [search, setSearch] = useState<CharacterName>({name: ""});

   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const {value} = e.target;
      setSearch({name: value})
   }
   
   return (
      <form onSubmit={onSearch}>
         <input type='search' 
            placeholder='Buscar' 
            name="name" 
            value={search.name} 
            onChange={handleChange}/>
         <input className="nav-btn" type="submit" value="Buscar"/>
      </form>
   );
}