import React from 'react';
import { useParams } from 'react-router-dom';

const Game = () => {
  const { pos, level } = useParams();

  return (
    <>
      <h1>{pos} | Level {level}</h1>
    </>
  );
};

export default Game;
