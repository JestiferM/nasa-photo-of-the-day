import React, { useState, useEffect} from "react";
import axios from 'axios';

import Photo from './Components/Photos';
import "./App.css";

const localDate = (date) => {
  return new Date(+date - date.getTimezoneOffset() * 60 * 1000).toISOString().split(/[TZ]/).slice(0, 1)[0]
}


function App() { 
   const [toggle, setToggle] = useState(false)

   const [date, setDate] = useState(localDate(new Date()))

   const [data, setData] = useState({
});
const toggler = () => {
  setToggle(!toggle)
}

const changeDate = (e) => {
  console.log(e.target.value)
  setDate(e.target.value)
}

   useEffect(()=>{
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=HHt0hNh7x1lURzLEtk5lplBbbEOfkXITFXp2bXhq&date=${date}`)
    .then((res) =>{
      console.log(res.data)
      setData(res.data)
    })
    .catch(err => {
      console.error(err);
    })
  },[date])
  
  return (
    <div className="App">
      <h1> NASA Photos </h1>
      <p>
         <span role="img" aria-label='go!'>🚀</span>!
      </p>
      <div className='Img-container'>
      {toggle && <Photo data={data}/>}
      <input onChange={changeDate} type="date" name="newDate" value={date}/>
      <button onClick = {toggler}>{toggle ? 'Hide' : 'Show'}</button>
      </div>
    </div>
  );
}

export default App;
