//Import dependencies
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
//Import components
import Hearts from '../Hearts';
import CountdownTimer from '../CountdownTimer/CountdownTimer';
import Input from '../Input';
//Import Data
import { QuestionData } from '../../constants';

function Game() {
  const [lives, setLives] = React.useState([1, 2, 3]);
  const [timer, setTimer] = React.useState(15);
  const [stage, setStage] = React.useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (lives.length === 0) {
      navigate('/lose');
    }
  });

  function handleTimeout() {
    setLives(lives.slice(0, -1));
    setTimer(15);
  }

  return (
    <div>
      <p>Ghost</p>
      <div>{QuestionData[stage].Question}</div>
      {lives.map(index => (
        <Hearts key={index}></Hearts>
      ))}
      {/* Position the Rabbit in one of 5 positions, these can be a prop that is related to stage */}
      <p>Rabbit</p>
      <button onClick={() => setLives(lives.slice(0, -1))}>
        Lose a Life
      </button>
      {/* <CountdownTimer
        handleTimeout={handleTimeout}
        timer={timer}
        setTimer={setTimer}
      ></CountdownTimer> */}
      <Input
        stage={stage}
        setStage={setStage}
        question={QuestionData[stage]}
      ></Input>
    </div>
  );
}

export default Game;
