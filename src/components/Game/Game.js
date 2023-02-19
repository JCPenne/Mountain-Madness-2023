//Import dependencies
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
//Import components
import Hearts from '../Hearts';
import CountdownTimer from '../CountdownTimer/CountdownTimer';
import Questions from '../Questions/Questions';
import Audio from "../../Audio/3min-taylor-swift-all-too-well.mp3";

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
      
      <audio src={Audio} autoplay loop controls></audio>
      <p>Countdown Timer</p>
      <p>Ghost</p>
      <Questions stage={stage}></Questions>
      {lives.map(e => (
        <Hearts></Hearts>
      ))}
      <p>Rabbit</p>
      <p>Guess Box</p>
      <button onClick={() => setLives(lives.slice(0, -1))}>
        Lose a Life
      </button>
      <CountdownTimer
        handleTimeout={handleTimeout}
        timer={timer}
        setTimer={setTimer}
      ></CountdownTimer>
    </div>
  );
}

export default Game;
