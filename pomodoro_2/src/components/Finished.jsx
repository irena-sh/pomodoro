import React, {useEffect} from 'react';
import Confetti from 'react-confetti';
import useSound from 'use-sound';
import DADAA from '../sound/DADAA.mp3';
import styled from 'styled-components';

const Text = styled.h1`
  margin-top: 20px;
`;

const Button = styled.button`
  font-size: 20px;
`;

const Finished = ({setTimeLeft, setIsPaused}) => {
  let width = window.innerWidth;

  const [play] = useSound(DADAA, {volume : .25});

  useEffect(() => {
    play();
  }, [play])

  return (
    <div align="center">
      <Confetti width = {width}/>
      <h1>Congratulations! You finished your pomodoro. Go ahead and take a little brake!</h1>
      <Button onClick={() => {
        setTimeLeft(0);
        setIsPaused(true);
      }}>Reset</Button>
    </div>
  )
}

export default Finished
