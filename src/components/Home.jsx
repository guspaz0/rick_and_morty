import React from 'react';
import Cards from "./Cards.jsx";
import characters from '../data.js';

export default function Home() {

  return (
    <div>
      <Cards character={characters} />
    </div>
  );
}
