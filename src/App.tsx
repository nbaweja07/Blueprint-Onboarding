import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        
        <div>
          <h1>Nishka Baweja</h1>
          <h3>
            Blueprint Developer: Shared Adventures
          </h3>
          <p> Mission: Developing a highly accessible mobile app to handle event </p>
          <p> registrations, notifications, and beach wheelchair rentals. </p>
        </div>
      </section>

      <section id="about-me">
        <div id="docs">
          <h2>About Me</h2>
          <p>I'm a second year computer science major, currently working on building a robotic cat!
            I have experience working with Java, C, C++, JavaScript, Python, C#, HTML, CSS, SQL, and
            Arduino. I am a member of Slugbotics - Rover Team, and last year I worked with ROS to 
            develop an algorithm for an autonomous lunar rover. I'm passionate about space and
            my ultimate goal is to develop embedded software to assist with flight navigation!
          </p>
          <p></p>
        </div>
        <div id="social">
          <h2>Connect with me</h2>
          <p>Links:</p>
          <ul>
            <li>
              <a href="https://github.com/nex-i" target="_blank">
                GitHub
              </a>
            </li>
            
            <li>
              <a href="www.linkedin.com/in/nishka-baweja" target="_blank">
                
                Linkedin
              </a>
            </li>
            
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
