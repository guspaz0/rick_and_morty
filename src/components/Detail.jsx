import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link,useNavigate } from "react-router-dom";
import styled from "styled-components";

const Card1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  height: 500px;
  background-color: white;
  border-radius: 5px;
  box-shadow: 2px -6px 10px black;
  position: relative;
  /* left: 650px;
  top: 100px; */
`;

const Img = styled.img`
   border-radius: 5%;
   box-shadow: 2px -6px 10px black;
   width: 230px;
   position: relative;
   top: 50px;
`;
const P1 = styled.p`
   position: absolute;
   background-color: black;
   border-radius: 5px;
   top: 220px;
   left: 90px;
   width: 220px;
   height: 35px;
   opacity: .5;
`;
const Name = styled.h1`
   color: white;
   font-weight: bold;
   font-size: 1.2rem;
   position: absolute;
   left: 95px;
   top: 227px;
   opacity: 1;
`;

const Status = styled.h1`
  color: black;
  font-size: 1.2rem;
  font-weight: 400;
  position: absolute;
  top: 270px;
  left: 20px;
`;

const Specie = styled.h2`
  color: black;
  font-size: 1.2rem;
  font-weight: 400;
  position: absolute;
  top: 295px;
  left: 20px;
`;

const Gender = styled.h2`
   color: black;
   font-size: 1.2rem;
   font-weight: 400;
   position: absolute;
   top: 325px;
   left: 20px;
`;
const Origen = styled.h2`
   color: black;
   font-size: 1.2rem;
   font-weight: 400;
   position: absolute;
   top: 355px;
   left: 20px;
`;
const Locacion = styled.h2`
   color: black;
   font-size: 1.2rem;
   font-weight: 400;
   position: absolute;
   top: 385px;
   left: 20px;
`;
const Button1 = styled.button` 
background-color: rgb(200 0 0);
font-weight:bold;
position: absolute;
width: 50px;
color: white;
left: 200px;
top: 5px;


:hover {
  background-color: yellow;
  color: black;
}
`;


export default function Detail(props) {
    const [character, setCharacter] = useState({})

    const { detailId } = useParams();

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
          .then((response) => response.json())
          .then((char) => {
            if (char.name) {
                console.log(char)
              setCharacter(char);
            } else {
              window.alert("No hay personajes con ese ID");
            }
          })
          .catch((err) => {
            window.alert("No hay personajes con ese ID");
          });
        return setCharacter({});
      }, [detailId]);
      
  const onClose = (id) => {
    setCharacter(character.filter(char => char.id !== id))
  } 
  const navigate = useNavigate();
  const GoBack = () => {
    navigate('/home')
  };
    return(
        <Card1>
            
            <Img src={character.image} alt='not found'/>
              <P1/>
              <Name>{character.name}</Name>
            <Img/>
            <Status>Status: {character.status}</Status>
            <Gender>Gender: {character.gender}</Gender>
            <Specie>Specie: {character.species}</Specie>
            <Origen>Origen: {character.origin?.name}</Origen>
            <Locacion>Locacion: {character.location?.name}</Locacion>
            <Button1><a onClick={GoBack}>volver</a></Button1>
          </Card1> 
    )
}