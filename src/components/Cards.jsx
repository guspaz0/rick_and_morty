import Card from './Card';
import React from 'react';
import styled from 'styled-components' 

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
      <div style={{display: 'flex', justifyContent: 'space-around'}}>
        {characters.map(character => (
          <StyledCard
            key={character.name}
            name={character.name}
            species={character.species}
            gender={character.gender}
            image={character.image}
            onClose={() => window.alert('Emulamos que se cierra la card')}
          />
        ))}
      </div>
    );
    
}
