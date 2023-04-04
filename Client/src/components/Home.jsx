import React from 'react';
import styled from 'styled-components';

const Titulo = styled.h1`
      display: flex;
      align-content: top;
      justify-content: top;
      align-items: top;
      height: 100px;

   // position: relative;
   // left: 0px;
   // top: -250px;
   // font-size: 1cm;
   // height: 50px;
   // width: 500px;
   // color: white;
   // padding: 5px;
   // border-radius: 5px;
   // display: flex;
   // justify-content: top;
   // align-items: top;
   // /* background-image: linear-gradient(315deg, #cdb436 0%, #454545 74%); */
   // transition: 500ms;
  `

export default function Home() {
  return (
  <div>
    <Titulo><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/938px-Rick_and_Morty.svg.png' ></img></Titulo>
  </div>
  );
}
