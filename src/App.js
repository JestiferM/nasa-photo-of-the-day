import React, { useState, useEffect} from "react";
import axios from 'axios';

import "./App.css";

useEffect(()=>{
  axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
  .then(res =>{
    console.log(res.data);
  })
  .catch(err => {
    console.error(err);
  })
},[])

function App() {
  return (
    <div className="App">
      <h1> NASA as I develope it </h1>
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
      <div className='Img-container'>

      </div>
    </div>
  );
}

export default App;
