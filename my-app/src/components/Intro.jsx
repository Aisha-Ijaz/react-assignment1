import React from 'react'
import './App.css';

let name = "Aisha";
let age =  20;
let city = "Karachi";
let professionOrStudy = "Web Development";
let hobby = "designing and coding";
let goal =  "a professional Front-End Developer";


const Intro = () => {
  return (
    <div className='intro-box'>
        <h2>My Introduction</h2>
        
        <p>Hello! <br /> My name is {name}. I am {age} years old and I live in {city}.</p>

        <p>I am currently learning {professionOrStudy}, and I really enjoy learning and improving myself every day.</p>

        <p>In my free time, I love {hobby}, as it helps me stay creative and motivated.</p>

        <p>I am passionate about growing my skills and working towards my goal of becoming {goal}.</p>
    </div>
  )
}

export default Intro
