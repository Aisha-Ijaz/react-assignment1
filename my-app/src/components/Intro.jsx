import React from 'react'

let name = prompt("Enter your name: ");
let age = prompt("Enter your Age: ");
let city = prompt("Enter your city: ");
let professionOrStudy = prompt("What are you currently studying or your profession?: ");
let hobby = prompt("What is your hobby?: ");
let goal = prompt("What is your future goal?: ")


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