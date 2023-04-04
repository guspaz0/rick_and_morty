import Card from "./Card";
import { connect, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from "styled-components";
import { orderCards, filterCards, orderReset } from "../redux/actions";

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
const DivSelector = styled.div`
   display: flex;
   position: absolute;
   background-color: white;
   align-items: center;
   justify-content: space-around;
   border-radius: 5px;
   top: 100px;
   left: center;
   width: 550px;
   height: 35px;
   
`;

export function Favorites (props) {

const dispatch = useDispatch()

function handleChange(e) {
   if (e.target.name === 'Order') {
      dispatch(orderCards(e.target.value))
   } else {
      dispatch(filterCards(e.target.value))
   }
}

function handleReset() {
   dispatch(orderReset())
}

   return(
   <>
   <DivSelector>
      <label for="order">Ordenar por id:</label>
      <select name="Order" onChange={handleChange}>
         <option value="Ascendente">Ascendente</option>
         <option value="Descendente">Descendente</option>
      </select>
      <label for="Gender">Filtrar por género:</label>
      <select name="Gender" onChange={handleChange}>
         <option value="Male">Male</option>
         <option value="Female">Female</option>
         <option value="Genderless">Genderless</option>
         <option value="unknown">unknown</option>
      </select>
      <button onClick={handleReset}>Reset</button>
   </DivSelector>
      {props.myFavorites.map((x) => 
      <Card1>
            <Link to={`/detail/${x.id}`}> 
            <Img src={x.image} alt="img not found" />
               <P1/>
               <Title>{x.name}</Title>
            <Img/>
         </Link>
         <Specie>Specie:{x.species}</Specie>
         <Gender>Gender:{x.gender}</Gender>
      </Card1>
      )}
   </>
   );
}

export function mapStateToProps(props) {
return {
   myFavorites: props.myFavorites,
   }
}

export default connect(mapStateToProps)(Favorites);