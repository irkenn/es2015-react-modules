import React, { useState } from "react";
import ReactDOM  from "react-dom/client";
// import  ReactDOM  from "react-dom";

// import reportWebVitals from './reportWebVitals';
import Array from "./foods";
import { choice, remove } from "./helpers";


// const randomFruit = <Choice items={Array}/>;
// console.log('randomFrquit', randomFruit);

function App(){   
    const [randomFruit, setFruit] = useState(choice(Array)); 
    const [newArray, setNewArray] = useState(remove(Array, randomFruit));
    return (
        <div>
            <h2>I'd like one {randomFruit}, please</h2>
            <h2>I'd like the same {randomFruit}, please</h2>
            <h2>Delicious! May I have another?</h2>
            <h2>I'm sorry, we're all out. we have { newArray.length } left </h2>
        </div>
    );
}; 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
    <App />
  </React.StrictMode>
);

export default App;