import React from 'react';
import background from '../../Images/background.png';

import '../../styles.css';

import { useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();

  return (
    <div>
      <p className='start-game'>Ghost Babble: The Mountain Escape</p>
      <img
        className={'homeBackground'}
        src={background}
        alt={'a hand drawn mountain and clouds and sun'}
      />
      <button
        className='Button'
        onClick={() => navigate('/landing')}
      >
        Play!
      </button>
    </div>
  );
}

export default App;
