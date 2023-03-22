import { Link } from "react-router-dom";
import styled from "styled-components";
import { connect } from "react-redux";
import { useState, useEffect } from "react";
import { addFavorite, deleteFavorite } from "../redux/actions";

const Card1 = styled.div`
   display: flex;
   flex-wrap: wrap;
   flex-direction: row;
   justify-content: center;
   position:relative;
   margin-right: 20px;
   width: 260px;
   height: 350px;
   background-color: white;
   border-radius: 5%;
   box-shadow: 2px -6px 10px black;
   top: 0px;
`;

const Img = styled.img`
   border-radius: 5%;
   box-shadow: 2px -6px 10px black;
   width: 230px;
   position: relative;
   top: 50px;
   left: 15px;
`;

const Title = styled.h1`
   color: white;
   font-weight: bold;
   font-size: 1.2rem;
   position: absolute;
   left: 40px;
   bottom: 70px;
   opacity: 1;
`;

const Specie = styled.h2`
   color: black;
   font-size: 1.2rem;
   font-weight: 400;
   position: absolute;
   top: 270px;
   left: 30px;
`;

const Gender = styled.h2`
   color: black;
   font-size: 1.2rem;
   font-weight: 400;
   position: absolute;
   top: 300px;
   left: 30px;
`;
const Button1 = styled.button` 
background-color: rgb(200 0 0);
font-weight:bold;
width: 25px;
height: 25px;
color: white;
position: absolute;
left: 220px;
top: 10px;
border-radius: 5px;
:hover {
   background-color: yellow;
   color: black;
} `;
const Fav = styled.a` 
background-color: white;
width: 25px;
height: 25px;
color: white;
position: absolute;
left: 10px;
top: 10px;
`;

const P1 = styled.p`
   position: absolute;
   background-color: black;
   border-radius: 5px;
   bottom: 60px;
   left: 30px;
   width: 200px;
   height: 35px;
   opacity: .5;
   
`;


export function Card(props) {

   useEffect(() => {
      props.myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [props.myFavorites]);
   // eslint-disable-next-line react-hooks/exhaustive-deps

   const [isFav,setIsFav] = useState(false);

   function handleFavorite() {
      if (isFav) {
         setIsFav(false)
         props.deleteFavorite(props.id)
      } 
      if(!isFav) {
         setIsFav(true);
         props.addFavorite(props)
      }
   }

   return ( 

      <Card1>
         {
            isFav ? (
               <Fav><button onClick={handleFavorite}>❤️</button></Fav>
            ) : (
               <Fav><button onClick={handleFavorite}>🤍</button></Fav>
            )
         }
         <Button1> <a onClick={() => props.onClose(props.id)}> X</a></Button1>
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

export function mapStateToProps(props) {
   return {
      myFavorites: props.myFavorites,
   }
}

export function mapDispatchToProps(dispatch) {
   return {
      addFavorite: function (props) {
         dispatch(addFavorite(props))
      },
      deleteFavorite: function (props) {
         dispatch(deleteFavorite(props))
      }
   }

}

export default connect(mapStateToProps, mapDispatchToProps)(Card);