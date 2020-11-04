import React, {useRef} from 'react';
import ReactDOM from 'react-dom';
import Carousel from "./carousel";
import { HashLink as Link } from "react-router-hash-link";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  return (

    <div>
        <Carousel>
            <img src="https://visualhunt.com/photos/2/portrait-of-beautiful-cat-with-blue-eyes.jpg?s=s"  alt=""/>
            <img src="https://visualhunt.com/photos/2/cat-feline-cute-domestic-young-looking-curious.jpg?s=l" alt=""/>
            <img src="https://visualhunt.com/photos/1/portrait-of-white-cat-with-green-eyes.jpg?s=l" alt="" />
        </Carousel>
        <Router>
        <div id="aaa" className="carousel slide" data-ride="carousel" >
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="d-block w-100" src="https://visualhunt.com/photos/2/portrait-of-beautiful-cat-with-blue-eyes.jpg?s=s" alt=""/>
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src="https://visualhunt.com/photos/2/cat-feline-cute-domestic-young-looking-curious.jpg?s=l" alt=""/>
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src="https://visualhunt.com/photos/1/portrait-of-white-cat-with-green-eyes.jpg?s=l" alt=""/>
                </div>
            </div>
            <Link className="carousel-control-prev" to="#aaa" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"/>
                <span className="sr-only">Previous</span>
            </Link>
            <Link className="carousel-control-next" to="#aaa" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"/>
                <span className="sr-only">Next</span>
            </Link>
        </div>
        </Router>
    </div>

  )
};


// main.js
const root = document.querySelector('main');
ReactDOM.render(<App />, root);
