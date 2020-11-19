import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from "./carousel";
import StarwarsCharacter from "./remote-data";

const App = () => {
  return (

    <div>
        <div style={{width: "500px", height: "300px", float: "left"}}>
        <Carousel>
            <img src="https://visualhunt.com/photos/2/portrait-of-beautiful-cat-with-blue-eyes.jpg?s=s"  alt=""/>
            <img src="https://visualhunt.com/photos/2/cat-feline-cute-domestic-young-looking-curious.jpg?s=l" alt=""/>
            <img src="https://visualhunt.com/photos/1/portrait-of-white-cat-with-green-eyes.jpg?s=l" alt="" />
        </Carousel>
        </div>
        <StarwarsCharacter id={1}/>
    </div>

  )
};


// main.js
const root = document.querySelector('main');
ReactDOM.render(<App />, root);
