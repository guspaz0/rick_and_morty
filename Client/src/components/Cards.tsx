import React from 'react';
import { StyledCard } from './styles/StyledCard';
import {Character, PaginationInfo} from '../interfaces/Character'
import Pagination from './Pagination';

interface Props{
  characters: Character[],
  pageInfo: PaginationInfo,
  onClose: React.MouseEventHandler<HTMLButtonElement>
}

export const Cards: React.FC<Props>= ({characters, onClose, pageInfo}) => {

  return (<>
    {pageInfo.count? <Pagination perPage={characters.length} pageInfo={pageInfo}/>: <></>}
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
          key={character.id}
          character={character} 
          onClose={onClose}
        />
      ))}
    </div>
    </>
  );
    
}

export default Cards