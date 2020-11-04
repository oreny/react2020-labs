import React, {useState, useEffect, useRef} from "react";

function useTimer(interval) {
    const [ticks, setTicks] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => setTicks((ticks) => ticks + 1), interval);
        return function abort() {
            clearInterval(timer);
        }
    }, []);

    return ticks;
}

export default function Carousel(props) {
    const [displayedImage, setDisplayedImage] = useState(0);
    const numOfImages = React.Children.count(props.children);
    const lastTick = useRef(0);

    const nextTick = useTimer(3000);
    if (lastTick.current < nextTick) {
        nextImage(1);
        lastTick.current = nextTick;
    }

    function getDisplayedImage() {
        return React.Children.toArray(props.children)[displayedImage % numOfImages];
    }

    function nextImage(delta) {
        const nextImageIndex = displayedImage + delta < 0 ? numOfImages - 1 : (displayedImage + delta) % numOfImages;
        setDisplayedImage(nextImageIndex);
    }

    return (
        <>
            <div>
                <button onClick={() => nextImage(-1)}>{"<<"}</button>
                <button onClick={() => nextImage(1)}>{">>"}</button>
            </div>
            <div>
                {getDisplayedImage()}
            </div>
        </>
    );


}