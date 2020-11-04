import React, { useState, useCallback } from "react";
import ReactDOM from "react-dom";


const Header = React.memo(function Header(props) {
    console.count("Header.render");
    return <h1>My Counter Demo</h1>;
});

const DisplayValue = React.memo(
    function DisplayValue(props) {
        console.count("DisplayValue.render");
        const { val } = props;
        return <p>Value: {val}</p>;
    },
    (prevProps, nextProps) => prevProps.val === nextProps.val
);

const DisplayMod5 = React.memo(
    function DisplayMod5(props) {
        console.count("DisplayMod5.render");

        const { val } = props;
        const text =
            val % 5 === 0 ? "Value is divisible by 5" : "Value does not divide by 5";

        return <p>{text}</p>;
    },
    function (prevProps, nextProps) {
        return (prevProps.val % 5 === 0) === (nextProps.val % 5 === 0);
    }
);

const MyButton = React.memo(function MyButton(props) {
    console.count("MyButton.render");
    return <button onClick={props.onClick}>Click Me</button>;
});

export default function Counter() {
    console.count("Counter.render");

    const [count, setCount] = useState(0);
    const [delta, setDelta] = useState(1);

    const inc = useCallback(
        function inc() {
            setCount((val) => val + delta);
        },
        [delta]
    );

    return (
        <>
            <Header />
            <label>
                Increase by:
                <input
                    type="number"
                    value={delta}
                    onChange={(e) => setDelta(Number(e.target.value))}
                />
            </label>
            <DisplayValue val={count} />
            <DisplayMod5 val={count} />
            <MyButton onClick={inc} />
        </>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Counter />, rootElement);
