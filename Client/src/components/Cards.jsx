import React from 'react';
import { StyledCard } from '../CSS';


export function Cards(props) {
  const { characters } = props;
  return (
    <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
      {characters.map(character => (
        <StyledCard
          key={character.name}
          name={character.name}
          species={character.species}
          gender={character.gender}
          image={character.image}
          origin={character.origin}
          status={character.status}
          id={character.id}
          onClose={props.onClose}
        />
      ))}
    </div>
  );
    
}
