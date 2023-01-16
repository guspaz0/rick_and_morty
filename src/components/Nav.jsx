import React from "react";
import SearchBar from "./SearchBar";
import styled from 'styled-components';
import { useNavigate, NavLink, Link } from "react-router-dom";

const Search = styled.button`
    
`;

export default function Nav (props) {
    return(
        <div>
            <SearchBar onSearch={props.onSearch}/>
        </div>
        // <ul>
        //     <li>
        //         <NavLink to="/about">
        //             <span>About</span>
        //         </NavLink>
        //     </li>
        //     <li>
        //         <NavLink to="/detail">
        //             <span>Detail</span>
        //         </NavLink>
        //     </li>
        // </ul>
    );
}