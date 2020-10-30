import React from 'react';
import ReactDOM from 'react-dom';
import Squares from "./squares";
import RegistrationForm from "./registration-form";
import "./style.css";

const App = () => {

  return (
    <div>
        <div style={{height: "100px"}}>
          <Squares count={8}/>
        </div>
        <div style={{display: "block", height: "70%"}}>
          <RegistrationForm />
        </div>
    </div>
  )
};


// main.js
const root = document.querySelector('main');
ReactDOM.render(<App />, root);
