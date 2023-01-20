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
`
const Titulo = styled.h1`
   position: absolute;
   left: 300px;
   top: -18px;
   font-size: 1cm;
   height: 50px;
   width: 500px;
   color: white;
   padding: 5px;
   border-radius: 5px;
   display: flex;
   justify-content: top;
   align-items: top;
   /* background-image: linear-gradient(315deg, #cdb436 0%, #454545 74%); */
   transition: 500ms;
   
`;

export default function Nav (props) {

   return(
      <div>
         
         <SearchBar onSearch={props.onSearch}/>
         <Titulo> Rick & Morty Cards App!</Titulo>
         <NavLink to='/about'>
            <AboutStyle>About</AboutStyle>
         </NavLink>
         <NavLink to='/home'>
            <DetailStyle>Home</DetailStyle>
         </NavLink>
      </div>
   );
}