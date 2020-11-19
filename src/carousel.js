import React, {useState, useEffect, useRef, useLayoutEffect} from "react";
import "./styles.css";


function useTimer(interval, operation) {
    const [pauseTime, setPauseTime] = useState(0);
    const timer = useRef(0);

    const onInterval = () => {
        if (pauseTime > 0) {
            clearInterval(timer.current);
            setPauseTime(0);
        } else {
            operation();
        }
    }

    function pause(pauseTime, pauseCallback) {
        setPauseTime(0);
    }

    const cancel = useEffect(() => {
        const timeout = pauseTime > 0 ? pauseTime : interval;
        timer.current = setInterval(() => onInterval(), timeout);
        return () => clearInterval(timer.current);
    }, [pauseTime, operation]);

    return { pause, cancel };
}

export default function Carousel(props) {
    const [buttonsDisabled, setButtonsDisabled] = useState(false);
    const {transitionTimeout} = props;
    const [displayedImage, setDisplayedImage] = useState(0);
    const lastDisplayedImage = useRef(0);
    const numOfImages = React.Children.count(props.children);
    const carouselDivRef = useRef();
    const imageContainer = useRef();
    const carouselItems = useRef(Array(numOfImages).fill("").map(() => React.createRef()));

    useLayoutEffect(() => {
        //debugger;
        const width =  carouselDivRef.current.offsetWidth;
        const height =  carouselDivRef.current.offsetHeight;
        imageContainer.current.style.width = `${width * numOfImages}px`;
        imageContainer.current.style.height = `${height}px`;
        carouselItems.current.forEach((item, index) => setImageStyle(index, width, height, item.current.style));
    }, [displayedImage]);

    const timer = useTimer(transitionTimeout, () => nextImage(1));

    function setImageStyle(imageIndex, width, height, style) {
        const prevImage = displayedImage === 0 ? numOfImages - 1 : displayedImage - 1;
        const nextImage = (displayedImage + 1) % numOfImages;
        const left = imageIndex === prevImage ? -width
            : imageIndex === nextImage ? width
            : imageIndex === displayedImage ? 0
            : width * 2;

        style.top = "0px";
        style.width = `${width}px`;
        style.height = `${height}px`;
        style.left = `${left}px`;
        style.zIndex = imageIndex === displayedImage || imageIndex === lastDisplayedImage.current ? "2" : "0";
    }

    useEffect(() => {
        const timer = setTimeout(() => setButtonsDisabled(false), 2000);
        return () => clearTimeout(timer);
    }, [buttonsDisabled]);

    function getDisplayedImage() {
        return (
            <div ref={imageContainer} className="carousel-images-container">
                {React.Children.toArray(props.children)
                    .map((img, index) =>
                        <div ref={carouselItems.current[index]} className="carousel-image-container" style={{}}>{img}</div>)};
            </div>
        );
    }

    function nextImage(delta) {
        const nextImageIndex = displayedImage + delta < 0 ? numOfImages - 1 : (displayedImage + delta) % numOfImages;
        lastDisplayedImage.current = displayedImage;
        console.log(`nextImage: delta=${delta} displayedImage=${displayedImage} nextImageIndex=${nextImageIndex}`);
        setDisplayedImage(nextImageIndex);
    }

    function onButtonClick(delta) {
        setButtonsDisabled(true);
        nextImage(delta);
    }

    return (
        <div ref={carouselDivRef} className="my-carousel">
            {getDisplayedImage()}
            <button disabled={buttonsDisabled} className="left-button" onClick={() => onButtonClick(-1)}>&#10094;</button>
            <button disabled={buttonsDisabled} className="right-button" onClick={() => onButtonClick(1)}>&#10095;</button>
        </div>
    );
}

Carousel.defaultProps = {
    transitionTimeout: 3000
}