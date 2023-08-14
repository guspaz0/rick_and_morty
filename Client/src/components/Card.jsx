import { Link } from "react-router-dom";
import { connect, useDispatch, useSelector } from "react-redux";
import React from 'react';
import { useState, useEffect } from "react";
import { addFav, removeFav } from "../redux/actions";
import {Button1, Card1, Img, Specie, Title, Gender, Fav, P1 } from '../CSS'


export default function Card(props) {

   const dispatch = useDispatch()
   const myFavorites = useSelector(state => state.myFavorites)
   const User = useSelector(state => state.User)

   useEffect(() => {
      //myFavorites.lenght > 1 &&
      myFavorites.some((e) => e.id === props.id) &&
      setIsFav(true);
   }, [myFavorites]);
   //eslint-disable-next-line react-hooks/exhaustive-deps

   const [isFav,setIsFav] = useState(false);

   function handleFavorite() {
      if (isFav) {
         setIsFav(false)
         dispatch(removeFav(props.id))
         //props.removeFav(props.id)
      } 
      if(!isFav) {
         setIsFav(true);
         dispatch(addFav({...props, user: User}))
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
         <Button1 onClick={() => props.onClose(props.id)}>X</Button1>
         {/* onClick={() => props.onClose(props.id)} */}
         <Link to={`/detail/${props.id}`}> 
            <Img src={props.image} alt="img not found" />
               <P1/>
               <Title>{props.name}</Title>
            <Img/>
         </Link>
         <Specie>Specie:{props.species}</Specie>
         <Gender>Gender:{props.gender}</Gender>
      </Card1>
      )
}

// export function mapStateToProps(props) {
//    return {
//       myFavorites: props.myFavorites,
//    }
// }

// export function mapDispatchToProps(dispatch) {
//    return {
//       addFav: function (props) {
//          dispatch(addFav(props))
//       },
//       removeFav: function (props) {
//          dispatch(removeFav(props))
//       }
//    }

// }

// export default connect(mapStateToProps, mapDispatchToProps)(Card);