import React, { useState, useEffect } from 'react';

const Timer = ({ initialSeconds = 0 }) => {
  const [seconds, setSeconds] = useState(initialSeconds);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let intervalId;

    if (isActive) {
      intervalId = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isActive]);

  const startTimer = () => {
    setIsActive(true);
  };

  const stopTimer = () => {
    setIsActive(false);
  };

  const resetTimer = () => {
    setIsActive(false);
    setSeconds(initialSeconds);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Time : {seconds} seconds</h2>
      <div style={{ fontSize: '30%' }}>
        <button onClick={startTimer} style={{ color: 'white', backgroundColor: 'green', marginRight: '30px', padding: '20px 40px' }} disabled={isActive}>
          Start
        </button>
        <button onClick={stopTimer} style={{ color: 'white', backgroundColor: 'red', marginRight: '30px', padding: '20px 40px' }} disabled={!isActive}>
          Stop
        </button>
        <button onClick={resetTimer} style={{ color: 'white', backgroundColor: 'blue', padding: '20px 40px' }}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Timer;
