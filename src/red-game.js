import React, { useState } from "react";
import "./style.css";

function ScoreBoard({ score }) {

    return (
        <div style={{marginBottom: "10px", marginTop: "10px"}}>
            <label style={{fontSize: "32px"}}>Score: {score}</label>
        </div>
    )
}

function BoardArea({ setScore }) {
    const redDiv = Math.floor(Math.random() * 10);
    const setScoreOnGreyClick = () => setScore(x => x - 10);
    const setScoreOnRedClick = () => setScore(x => x + 10);

    return (
        <div className="game-board">
            {Array(10).fill("")
                .map((x, i) => <div
                    onClick={i === redDiv ? setScoreOnRedClick : setScoreOnGreyClick}
                    className={i === redDiv ? "game-box-red" : "game-box-grey"}/>)}
        </div>
    )
}

export default function RedGame() {
    const [ score, setScore ] = useState(0)

    return (
        <div>
            <div>
                <button className="start-game-button" onClick={() => setScore(0)}>Start Gane</button>
                <ScoreBoard score={score}/>
            </div>
            <div style={{height: "80px"}}>
                <BoardArea setScore={setScore}/>
            </div>
        </div>
    );
}
