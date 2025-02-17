import React from "react";
import SearchBar from "./SearchBar";
import { NavLink} from "react-router-dom";
import { DetailStyle, FavStyle,AboutStyle2  } from '../CSS';
import { getUserFavs } from "../redux/characters/actions.ts";
import { useDispatch, useSelector } from "react-redux";


export function Nav (props) {

   const dispatch = useDispatch()
   const User = useSelector(state => state.User)
   function handleClick() {
      dispatch(getUserFavs(User))
   }

   return(
      <div>
         <SearchBar onSearch={props.onSearch}/>
         <NavLink to='/about'>
            <AboutStyle2>About</AboutStyle2>
         </NavLink>
         <NavLink to='/home'>
            <DetailStyle>Home</DetailStyle>
         </NavLink>
         <NavLink to='/favorites'>
            <FavStyle onClick={handleClick}>Favoritos</FavStyle>
         </NavLink>
      </div>
   );
}