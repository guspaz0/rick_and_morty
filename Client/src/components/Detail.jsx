import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Button1, Card1, Img, Specie, Name, Gender, Status, Origen, Locacion, P1 } from '../CSS/detail'


export function Detail(props) {
    const [character, setCharacter] = useState({})

    const { detailId } = useParams();

    useEffect(() => {
        fetch(`http://localhost:3002/rickandmorty/character/${detailId}`)
          .then((response) => response.json())
          .then((char) => {
            if (char.name) {
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
      <Origen>Origen: {character.origin? character.origin.name: 'none'}</Origen>
      <Locacion>Locacion: {character.location? character.location.name: 'none'}</Locacion>
      <Button1 onClick={GoBack}>Volver</Button1>
    </Card1> 
  )
}