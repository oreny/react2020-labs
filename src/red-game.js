import React from "react";
import { useState } from "react";

function ScoreBoard(props) {
    const { score } = props;

    return (
        <div style={{marginBottom: "10px", marginTop: "10px"}}>
            <label style={{fontSize: "32px"}}>Score: {score}</label>
        </div>
    )
}

function BoardArea(props) {
    const { setScore } = props;

    const redDiv = Math.floor(Math.random() * 10);

    const divBaseStyle = {
        height: "100%",
        width: "10%",
        borderStyle: "groove",
        borderWidth: "medium",
        borderColor: "black",
        margin: "2px",
        overflow: "auto"
    }

    const redStyle = {backgroundColor: "red", ...divBaseStyle};
    const grayStyle = {backgroundColor: "grey", ...divBaseStyle}

    return (
        <div style={{width: "400px", height: "100%", display: "flex"}}>
            {Array(10).fill("")
                .map((x, i) => <div
                    onClick={i === redDiv ? () => setScore(x => x + 10) : () => setScore(x => x -5)}
                    style={i === redDiv ? redStyle : grayStyle}/>)}
        </div>
    )
}

export default function RedGame() {
    const [ score, setScore ] = useState(0)

    const buttonStyle = {
        fontSize: "18px",
        fontColor: "green",
        borderCRadius: "8px"
    };

    return (
        <div>
            <div>
                <button style={buttonStyle} onClick={() => setScore(0)}>Start Gane</button>
                <ScoreBoard score={score}/>
            </div>
            <div style={{height: "80px"}}>
                <BoardArea setScore={setScore}/>
            </div>
        </div>
    );
}
