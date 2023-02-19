import React, { useEffect } from 'react';

function CountdownTimer({ handleTimeout, timer, setTimer }) {
  useEffect(() => {
    setTimeout(() => {
      if (timer > 0) {
        setTimer(timer - 1);
      } else {
        handleTimeout();
      }
    }, 1000);
  });
  return <div>{timer}</div>;
}

export default CountdownTimer;
