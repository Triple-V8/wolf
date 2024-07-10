import React from 'react';

const About = (props) => {
  return (
    <div id="about">
        <div className='about-image'>
            <img src={props.image} alt="" srcset="" />
        </div>
        <div className='about-text'>
            <h2> {props.title} </h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis nam aut temporibus facilis distinctio! Impedit iure ratione a perferendis culpa fuga et, dicta, ex eos maiores, voluptatum soluta tenetur rerum?</p>
            <button>{props.button}</button>
        </div>
        
    </div>
  )
}

export default About;