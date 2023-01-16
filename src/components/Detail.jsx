import styled from 'styled-components';
import React from 'react';
import { useNavigate,UseParams } from 'react-router-dom';

const detailcard = styled.div`
    color: white;
    font-size: 1cm;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
`

export default function Home(props) {

    return(
        <div style={detailcard}> este es el Home</div>
    );
}