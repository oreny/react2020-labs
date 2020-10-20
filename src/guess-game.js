import React from "react";
import { useState } from "react";

export default function GuessGame(props) {
    const { cheatProbability } = props;
    const [guess, setGuess] = useState(0);
    const targetNumber = Math.floor(Math.random() * 1000) + 1;
    const [target] = useState(targetNumber);
    const [cheat] = useState(Math.random);

    const onInputChange = (e) => setGuess(Number(e.target.value));

    function message() {
        const cheat = Math.random() < cheatProbability;
        return guess === target ? "bingo!" :
            (guess > target && !cheat) || (guess < target && cheat) ? "too high" : "too low";
    }

    return (
      <div>
          { <label><input type="Number" value={guess} onChange={onInputChange} />{message()}</label> }
      </div>
    );
}

GuessGame.defaultProps = {
    cheatProbability: 0.2
}


