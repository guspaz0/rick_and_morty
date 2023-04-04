import React from "react";
import SearchBar from "./SearchBar";
import styled from 'styled-components';
import { useNavigate, NavLink, Link } from "react-router-dom";
import Cards from './Cards';

const Search = styled.button`
    
`;
const AboutStyle = styled.span`
   background-color: green;
   color: white;
   position: absolute;
   display: flex;
   justify-content: center;
   left: 20px;
   top: 18px;
   width: 80px;
   height: 25px;
   padding: 5px;
   border-radius: 5px;
   font-size: .5cm;
   border-color: black;
   border-width: 1px;
   border-style: solid;
   :hover{
         background-color: yellow;
         color: black;
      }
`;
const DetailStyle = styled.span`
   background-color: green;
   color: white;
   position: absolute;
   display: flex;
   justify-content: center;
   left: 150px;
   top: 18px;
   width: 80px;
   height: 25px;
   padding: 5px;
   border-radius: 5px;
   font-size: .5cm;
   border-color: black;
   border-width: 1px;
   border-style: solid;
   :hover{
         background-color: yellow;
         color: black;
      }
`;
const FavStyle = styled.span`
   background-color: green;
   color: white;
   position: absolute;
   display: flex;
   justify-content: center;
   right: 430px;
   top: 18px;
   width: 80px;
   height: 25px;
   padding: 5px;
   border-radius: 5px;
   font-size: .5cm;
   border-color: black;
   border-width: 1px;
   border-style: solid;
   :hover{
         background-color: yellow;
         color: black;
      }
`

export default function Nav (props) {

   return(
      <div>
         
         <SearchBar onSearch={props.onSearch}/>
         
         <NavLink to='/about'>
            <AboutStyle>About</AboutStyle>
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