//Import dependencies
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
//Import components
import Hearts from '../Hearts';
import CountdownTimer from '../CountdownTimer/CountdownTimer';
import Questions from '../Questions/Questions';
import Input from '../Input';
//Import Data
import { QuestionData } from '../../constants';

function Game() {
  const [lives, setLives] = React.useState([1, 2, 3]);
  const [timer, setTimer] = React.useState(15);
  const [stage, setStage] = React.useState(0);
  const [question, setQuestion] = React.useState('');
  const navigate = useNavigate();
  console.log(question);

  useEffect(() => {
    if (lives.length === 0) {
      navigate('/lose');
    }
  });

  function handleTimeout() {
    setLives(lives.slice(0, -1));
    setTimer(15);
  }

  function validateGuess(guess) {
    console.log(guess);
    console.log(QuestionData[stage]);
    if (guess === QuestionData[stage].Answer) {
      alert('correct');
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    validateGuess(event.target[0].value);
  }

  return (
    <div>
      <p>Ghost</p>
      <Questions question={question.question}></Questions>
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
        setStage={setStage}
        handleSubmit={handleSubmit}
      ></Input>
    </div>
  );
}

export default Game;
