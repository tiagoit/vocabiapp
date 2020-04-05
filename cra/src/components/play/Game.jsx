import React from 'react';
import { useParams } from 'react-router-dom';
import GameAPI from '../../api/GameAPI';
import GameStepper from './GameStepper';

const Game = () => {
  const { pos, level } = useParams();
  const [state, setState] = React.useState({ roundWords: [] });

  const buildRoundWords = (levelWords, max) => {
    const aux = [];
    const randomIndexes = new Set();
    while(randomIndexes.size < 10) randomIndexes.add(parseInt(Math.random() * max));
    for (let i of randomIndexes) aux.push(levelWords[i]);
    return aux;
  }

  const getRoundWords = (pos, level) => {
    GameAPI.get(pos, level)
    .then(function(querySnapshot) {
      const levelWords = [];
      querySnapshot.forEach(doc => levelWords.push(doc.data()));
      setState({ ...state, roundWords: buildRoundWords(levelWords, querySnapshot.size) });
    })
    .catch(err => console.log({err}));
  }
  
  if(state.roundWords.length === 0) getRoundWords(pos, level);

  console.log('return');
  return (
    <>
      <h1>{pos} | Level {level}</h1>
      {/* {state.roundWords && state.roundWords.map(w => (
        <div>{w.en}</div>
      ))} */}
      <GameStepper />
    </>
  );
};

export default Game;
