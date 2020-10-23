import React from "react";
import { useState } from "react";

export default function GuessGame({ cheatProbability }) {
    const [message, setMessage] = useState("Guess a number");
    const newTarget = () => Math.floor(Math.random() * 1000) + 1;
    const [target, setTarget] = useState(newTarget());

    const onInputChange = (e) => {
        const guess = Number(e.target.value);
        const cheat = Math.random() < cheatProbability;
        const msg = guess === target ? "bingo!" :
            (guess > target && !cheat) || (guess < target && cheat) ? "too high" : "too low";
        setMessage(msg);
        setTarget(guess === target ? newTarget() : target);
    }

    return (
      <label><input type="Number" onChange={onInputChange} />{message}</label>
    );
}

GuessGame.defaultProps = {
    cheatProbability: 0.2
}


