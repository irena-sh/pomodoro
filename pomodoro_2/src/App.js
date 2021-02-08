import React, {useState} from 'react';
import Form from './components/Form';
import Timer from './components/Timer';
import Finished from './components/Finished';
import styled from 'styled-components';

const Title = styled.div`
  display: flex;
  justify-content: center;
  font-size: 60px;
  padding-top: 50px;
  padding-bottom: 50px;
  background-color: #FFA6E9;
  color: #FDFDFD;
  text-shadow: 2px 2px #7A7A7A;
  margin-bottom: 20px;
`;

function App() {
  const [timeLeft, setTimeLeft] = useState(0);
  const [isPaused, setIsPaused] =  useState(true);
  
  return (
    <>
    
    <Title>Pomodoro App</Title>
    <Form setTimeLeft={setTimeLeft} setIsPaused={setIsPaused}/>
      {timeLeft <0 ?
        <Finished setTimeLeft={setTimeLeft} setIsPaused={setIsPaused}/> : 
        <Timer timeLeft={timeLeft} setTimeLeft={setTimeLeft} setIsPaused={setIsPaused} isPaused={isPaused}/>
      }
    </>
  );
}

export default App;
