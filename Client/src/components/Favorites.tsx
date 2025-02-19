import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import React, { useEffect } from 'react';
import characterActions  from "../redux/characters/actions.ts";
import userActions from '../redux/user/actions.ts';
import { FilterStyles, Card1, Img, P1, Title, SpecieStyle, GenderStyle, FavoritesStyle} from '../CSS/favorites.ts';
import { Species, Status, Gender } from '../interfaces/Character.ts';
import { TAppState, TDispatch } from '../redux/store.ts';


export default function Favorites() {

   const dispatch = useDispatch<TDispatch>()

   const Favorites = useSelector(({user}: TAppState) => user.favorites)
   const User = useSelector(({user}: TAppState) => user.user)

   function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
      const {name, value} = e.target
      if (name === 'Order') {
         dispatch(characterActions.orderCards(value))
      } else {
         dispatch(characterActions.filterCards({[name]: value}))
      }
   }

   useEffect(() => {
      if (Favorites.length === 0) {
         dispatch(userActions.getUserFavs(User.id))
      }
   },[dispatch, User, Favorites])

   function handleReset() {
      dispatch(characterActions.orderReset())
   }

   return(
   <FavoritesStyle>
      <FilterStyles>
         <label htmlFor="order">Ordenar por id:
            <select name="Order" onChange={handleChange}>
               <option value="Ascendente">Ascendente</option>
               <option value="Descendente">Descendente</option>
            </select>
         </label>
         <label htmlFor="Gender">Género:
            <select name="Gender" onChange={handleChange}>
               {Object.entries(Gender).map(([key, value]) => 
                  <option key={key} value={value}>{value}</option>
               )}
            </select>
         </label>
         <label htmlFor="Species">Especie:
            <select name="Species" onChange={handleChange}>
               {Object.entries(Species).map(([key, value]) => 
                  <option key={key} value={value}>{value}</option>
               )}
            </select>
         </label>
         <label htmlFor="Status">Estado:
            <select name="Status" onChange={handleChange}>
               {Object.entries(Status).map(([key, value]) => 
                  <option key={key} value={value}>{value}</option>
               )}
            </select>
         </label>
         <button onClick={handleReset}>Reset</button>
      </FilterStyles>
      <div className='card-container'>
         {Favorites?.map(({ id, name, image }) => 
         <Card1 key={id}>
            <Link to={`/detail/${id}`}> 
               <Img src={image} alt={name}/>
               <Title>{name}</Title>
            </Link>
         </Card1>
         )}
      </div>
   </FavoritesStyle>
   );
}