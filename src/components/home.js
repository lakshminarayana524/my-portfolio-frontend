import React, { useEffect } from 'react'
import About from './about';
import Projects from './projects';
import Contact from './contact'
import AOS from 'aos'
import './styles/home.css'
import 'aos/dist/aos.css';
import profile from './images/profile.png';
import { useTypewriter, Cursor } from 'react-simple-typewriter'

const Home = () => {

  const [text] = useTypewriter({
    words: ['Student', ' Developer'],
    loop: {},
    onLoopDone: () => console.log(`loop completed after 3 runs.`)
  })

  useEffect(()=>{
    AOS.init();
  })

  return (
    <div className='home-container'>
          
        <div className='content'>
          <div className="content-head" data-aos='zoom-in-up'>
          <div className="text-container">
            <h1 className="head">Hi, I am Lakshmi Narayana G</h1>
            <h2 className="typeanimate">I am a {' '}
            <h2></h2>
              <span style={{ fontWeight: 'bold', color: '#a5f57d',width:'auto-fit' }}>{text}</span>
              <span style={{color:"#67c2a2"}}>
                <Cursor />
              </span>
            </h2>
          </div>
          <div className="image-container" data-aos='zoom-in-up'>
             <img src={profile} alt="profile_pic" />
          </div>
        </div>
          <div className='about'>
            <About/>
          </div>
          <div className='projects' >
            <Projects/>
          </div>
          <div className='contact'>
            <Contact/>
          </div>
        <div className="footer">
          <p>&#9993;lakshminarayana52004@gmail.com</p>
          <p>&#xe0cd; 6303074568</p>
          <p>&#9993;2100031943cseh@gmail.com</p>
        </div>
        </div>
    </div>
  )
}

export default Home
