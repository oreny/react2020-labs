import React from 'react';
import {useState} from "react";
import ReactDOM from 'react-dom';
import MultiInput from "./multi-input";
import TimerInput from "./timer-input";
import GuessGame from "./guess-game";
import Monochromater from "./Monochromater";


const App = () => {
  const [color, setColor] = useState("#0000FF");

  return (
    <div>
        <h2>Question 1:</h2><MultiInput count={8} />
        <h2>Question 2:</h2><TimerInput />
        <h2>Question 3:</h2><GuessGame cheatProbability={0.1}/>
        <div>
            <h2>Question 4 & 5:</h2>
            <div><input type="Color" value={color} onChange={(e) => setColor(e.target.value)} /> </div>
            <div style={ {overflow: false, height: "100px", width: "200px", backgroundColor: color }}/>
            <Monochromater color={color}/>
        </div>
    </div>
  )
};


// main.js
const root = document.querySelector('main');
ReactDOM.render(<App />, root);
