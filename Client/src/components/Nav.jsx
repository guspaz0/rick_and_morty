import React from "react";
import SearchBar from "./SearchBar";
import { NavLink} from "react-router-dom";
import { DetailStyle, FavStyle,AboutStyle2  } from '../CSS';


export function Nav (props) {

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
            <FavStyle>Favoritos</FavStyle>
         </NavLink>
      </div>
   );
}