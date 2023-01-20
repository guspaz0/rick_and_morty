import styled from "styled-components";
import styles from "./Card.module.css";
import { Link } from "react-router-dom";

const Img = styled.img`
   border-radius: 50%;
   box-shadow: 2px -6px 10px #fff;
`;

const Title = styled.h1`
   color: beige;
   font-weight: bold;
   display: flex;
   justify-content: center;
`;

const Text = styled.h2`
   color: #efe;
   font-size: 1.2rem;
   font-weight: 400;
   display: flex;
   justify-content: center;
`;
const Button1 = styled.button` 
background-color: rgb(200 0 0);
font-weight:bold;
color: white;
border 1px solid white;
border-radius: 5px
`; // aqui estuvo Jorge Diaz jeje
export default function Card(props) {
   return (
      <div className={styles.container}>
         <div className={styles.buttonContainer}>
            <Button1 onClick={() => props.onClose(props.id)}>X</Button1>
         </div>
         <Link to={`/detail/${props.id}`} style={{textDecoration: 'none'}}><Title>{props.name}</Title></Link>
         <Img  src={props.image} alt="img not found" />
         <div className={styles.textContainer}>
            <Text>{props.species}</Text>
            <Text>{props.gender}</Text>
         </div>
      </div>
   );
}
