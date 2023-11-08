import React from 'react';
import { StyledCard } from '../CSS';


export function Cards(props) {
  const { characters } = props;
  return (
    <div style={{
        position: "relative",
        display: 'flex',
        justifyContent: 'space-evenly',
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        margin: "0px",
        gap: "10px"
      }}>
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
