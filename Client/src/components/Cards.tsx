import React from 'react';
import { StyledCard } from '../CSS';
import {Character} from '../interfaces/Character'


export function Cards({characters}: Character[]) {

  return (
    <div style={{
        position: "relative",
        display: 'flex',
        justifyContent: 'space-evenly',
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
        margin: "0px",
        gap: "10px"
      }}>
      {characters.map(character => (
        <StyledCard
          key={character.name}
          character={character} 
          onClose={props.onClose}
        />
      ))}
    </div>
  );
    
}
