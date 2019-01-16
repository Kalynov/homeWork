import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//ReactDOM.render( <App/> , document.getElementById('root'));
//serviceWorker.unregister();
function tic(){
    let date = new Date().toLocaleTimeString();
    const element =(
        <div>
            <h1>Hello</h1>
            <h2>Time is {date}</h2>
        </div>
    );
    console.log("!")
    ReactDOM.render(element,document.getElementById('root')); 
}
setInterval(tic,1000)