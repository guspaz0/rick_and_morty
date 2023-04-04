import Card from './Card';
import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const StyledCard = styled(Card)`
&:hover {
   transform: scale(1.05);
   transition: transform 0.5s;
   transition-delay: 0.5s;
}
`;

export default function Cards(props) {
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
            id={character.id}
            onClose={props.onClose}
          />
        ))}
      </div>
    );
    
}
