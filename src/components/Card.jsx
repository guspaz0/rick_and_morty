import styled from "styled-components";

const Card1 = styled.div`
   width: 260px;
   height: 350px;
   background-color: white;
   border-radius: 5%;
   box-shadow: 2px -6px 10px black;
   position:relative;
`;

const Img = styled.img`
   border-radius: 5%;
   box-shadow: 2px -6px 10px black;
   width: 200px;
   position: relative;
   top: 50px;
`;

const Title = styled.h1`
   color: white;
   background-color: black;
   font-weight: bold;
   font-size: 1.2rem;
   position: absolute;
   left: 40px;
   bottom: 100px;
`;

const Text = styled.h2`
   color: black;
   font-size: 1.2rem;
   font-weight: 400;
   position: absolute;
   top: 250px;
   left: 50px;

`;
const Button1 = styled.button` 
background-color: rgb(200 0 0);
font-weight:bold;
position: absolute;
left: 220px;
top: 10px;
`;

export default function Card(props) {
   return (
      <Card1>
         <Button1 onClick={() => props.onClose()}>X</Button1>
         <Img  src={props.image} alt="img not found" />
            <Title>{props.name}</Title>
         <Img/>
         <Text>{props.species}      {props.gender} </Text>
      </Card1>
   );
}
