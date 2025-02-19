import styled from "styled-components";
import Card from '../Card';

export const StyledCard = styled(Card)`
   &:hover {
      transform: scale(1.05);
      transition: transform 0.5s;
      transition-delay: 0.5s;
   }
`;