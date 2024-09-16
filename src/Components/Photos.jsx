import React from 'react'



const Photo = (props) => {
    return (
        <div className='app'>
          <h2>{props.data.title}</h2>
          <img src={props.data.url} alt={props.data.title} />
          <p>{props.data.explanation}</p>
        </div>
      );
}

export default Photo