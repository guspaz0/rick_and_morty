import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import React from 'react';
import { useState, useEffect } from "react";
import userActions from "../redux/user/actions.ts";
import {Button1, Card1, Img, Specie, Title, Gender, Fav, P1 } from '../CSS/index.ts'
import { GlobalState } from "../interfaces/globalState.ts";
import { Character } from "../interfaces/Character.ts";

interface Props {
   character: Character
   onClose: React.MouseEventHandler<HTMLButtonElement>
}

export default function Card({character, onClose}: Props) {

   const dispatch = useDispatch()
   const myFavorites = useSelector(({user}: GlobalState) => user.favorites)
   const User = useSelector(({user}: GlobalState) => user.user)

   useEffect(() => {
      //myFavorites.lenght > 1 &&
      if (myFavorites.some((e) => e.id === character.id)) {
         setIsFav(true);
      }
   }, [character, myFavorites]);

   const [isFav,setIsFav] = useState(false);

   function handleFavorite() {
      if (isFav) {
         setIsFav(false)
         dispatch(userActions.addOrRemoveFav({...character, user: User}))
         //props.removeFav(props.id)
      } 
      if(!isFav) {
         setIsFav(true);
         dispatch(userActions.addOrRemoveFav({...character, user: User}))
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
         <Button1 id={character.id} onClick={onClose}>X</Button1>
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