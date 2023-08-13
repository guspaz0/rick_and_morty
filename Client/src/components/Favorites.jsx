import { connect, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import React from 'react';
import { orderCards, filterCards, orderReset } from "../redux/actions";
import {DivSelector, Card1, Img, P1, Title, Specie, Gender} from '../CSS/favorites';


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
      {props.myFavorites?.map(({ id, name, species, image, gender }) => 
      <Card1>
            <Link to={`/detail/${id}`}> 
            <Img src={image} alt="img not found" />
               <P1/>
               <Title>{name}</Title>
            <Img/>
         </Link>
         <Specie>Specie:{species}</Specie>
         <Gender>Gender:{gender}</Gender>
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