import React, {useState, useRef} from "react";
import "./style.css";

function Square({index, notifyOnKeyPressed, refs}) {
    const [text, setText] = useState("");

    function onKeyPress(e, index) {
        setText(e.key);
        notifyOnKeyPressed(index);
    }

    return (
        <div className="square" ref={refs[index]} tabIndex={index + 1} onKeyPress={(e) => onKeyPress(e, index)} >
            {text}
        </div>
    );
}

export default function Squares({count}) {
    const refs = useRef(Array.from({length: count}).map(() => React.createRef()));

    function notifyOnKeyPressed(squareIndex) {
        const nextSquareIndex = squareIndex < refs.current.length - 1 ? squareIndex + 1 : squareIndex;
        refs.current[nextSquareIndex].current.focus();
    }

    return (
        <div>
            {Array.from({length: count})
                .map((ignore, index) => <Square key={index} index={index} refs={refs.current} notifyOnKeyPressed={notifyOnKeyPressed} />)}
        </div>
    );
}

Squares.defaultProps = {
    count: 4
}