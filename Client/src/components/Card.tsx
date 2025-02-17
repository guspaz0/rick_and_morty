import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import React from 'react';
import { useState, useEffect } from "react";
import characterAction from "../redux/characters/actions.ts";
import {Button1, Card1, Img, Specie, Title, Gender, Fav, P1 } from '../CSS'
import { GlobalState } from "../interfaces/globalState.ts";
import { Character } from "../interfaces/Character.ts";

interface Props {
   character: Character
   onClose: Function
}

export default function Card({character, onClose}: Props) {

   const dispatch = useDispatch()
   const myFavorites = useSelector((state: GlobalState) => state.user.favorites)
   const User = useSelector((state: GlobalState) => state.user)

   useEffect(() => {
      //myFavorites.lenght > 1 &&
      if (myFavorites.some((e) => e.id === id)) {
         setIsFav(true);
      }
   }, [myFavorites]);

   const [isFav,setIsFav] = useState(false);

   function handleFavorite() {
      if (isFav) {
         setIsFav(false)
         dispatch(characterAction.removeFav(props.id))
         //props.removeFav(props.id)
      } 
      if(!isFav) {
         setIsFav(true);
         dispatch(characterAction.addFav({...props, user: User}))
         //props.addFav(props)
      }
   }

   return (
      <Card1>
         {
            isFav?
               <Fav onClick={handleFavorite}>❤️</Fav>
            :
               <Fav onClick={handleFavorite}>🤍</Fav>
         }
         <Button1 onClick={() => onClose(character.id)}>X</Button1>
         {/* onClick={() => props.onClose(props.id)} */}
         <Link to={`/detail/${character.id}`}> 
            <Img src={character.image} alt="img not found" />
               <P1/>
               <Title>{character.name}</Title>
            <Img/>
         </Link>
         <Specie>Specie:{character.species}</Specie>
         <Gender>Gender:{character.gender}</Gender>
      </Card1>
      )
}