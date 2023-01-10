import styled from "styled-components";

const Card1 = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   width: 260px;
   height: 350px;
   background-color: white;
   border-radius: 5%;
   box-shadow: 2px -6px 10px black;
   position:relative;
   top: 100px;
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
   font-weight: bold;
   font-size: 1.2rem;
   position: absolute;
   left: 40px;
   bottom: 100px;
   opacity: 1;
`;

const Specie = styled.h2`
   color: black;
   font-size: 1.2rem;
   font-weight: 400;
   position: absolute;
   top: 260px;
   left: 50px;
`;

const Gender = styled.h2`
   color: black;
   font-size: 1.2rem;
   font-weight: 400;
   position: absolute;
   top: 260px;
   left: 150px;
`;
const Button1 = styled.button` 
background-color: rgb(200 0 0);
font-weight:bold;
position: absolute;
left: 220px;
top: 10px;
`;
const P1 = styled.p`
   position: absolute;
   background-color: black;
   border-radius: 5px;
   bottom: 95px;
   left: 35px;
   width: 150px;
   height: 30px;
   opacity: .5;
`;

export default function Card(props) {
   return (
      <Card1>
         <Button1 onClick={() => props.onClose()}>X</Button1>
         <Img  src={props.image} alt="img not found" />
            <P1/>
            <Title>{props.name}</Title>
         <Img/>
         <Specie>{props.species}</Specie>
         <Gender>{props.gender}</Gender>
      </Card1>
   );
}
