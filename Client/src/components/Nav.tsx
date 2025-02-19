import React from "react";
import SearchBar from "./SearchBar";
import { NavLink} from "react-router-dom";
import { Navbar  } from '../CSS/index.ts';
import userActions from "../redux/characters/actions.ts";
import { useDispatch, useSelector } from "react-redux";
import { TAppState } from "../redux/store.ts";

interface Props {
   onSearch: React.FormEventHandler<HTMLFormElement>
}

export function Nav({onSearch}: Props) {

   const User = useSelector(({user}: TAppState) => user.user)

   return(
      <Navbar>
         <ul>
            <li>
               <button className="nav-btn">
                  <NavLink to='/about'>About</NavLink>
               </button>
            </li>
            <li>
               <button className="nav-btn">
                  <NavLink to='/home'>Home</NavLink>
               </button>
            </li>
         </ul>
         <SearchBar onSearch={onSearch}/>
         <div className="user-info">
            {User.access && <b>Hola, {User.name}</b>}
            <button className="nav-btn">
               <NavLink to='/favorites'>
                  Favoritos
               </NavLink>
            </button>
         </div>
      </Navbar>
   );
}