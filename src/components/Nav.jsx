import React from "react";
import SearchBar from "./SearchBar";
import styled from 'styled-components';

const Search = styled.button`
    
`;

export default function Nav (props){
    return(
        <div>
            <SearchBar onSearch={props.onSearch}/>
        </div>
    );
}