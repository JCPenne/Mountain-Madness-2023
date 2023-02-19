import React from 'react';

function Input({
  stage,
  setStage,
  question,
  setLives,
  handleTimer,
  lives,
}) {
  const [guess, setGuess] = React.useState('');

  function validateGuess(guess, question) {
    if (guess !== question.Answer) {
      alert('incorrect');
      handleIncorrect();
      setGuess('');
    }
    if (guess === question.Answer) {
      alert('correct');
      setStage(stage + 1);
      setGuess('');
    }
  }

  function handleIncorrect() {
    setLives(lives.slice(0, -1));
    handleTimer();
  }

  function handleSubmit(event) {
    event.preventDefault();
    validateGuess(event.target[0].value, question);
  }

  return (
    <>
      <form onSubmit={e => handleSubmit(e)}>
        <label htmlFor='user-input'></label>
        <input
          id='user-input'
          value={guess}
          onChange={e => setGuess(e.target.value)}
          minLength={4}
          maxLength={8}
          autoFocus={true}
        />
      </form>
    </>
  );
}

export default Input;
