import React from 'react'
import './About.css'


const About = () => {
  return (
    <div id="about">
      <div className='about_head'>
        <h2>About Us</h2>
      </div>
      <div className="about_desc">
        <div className='left_about'>
          <img src='https://i.ibb.co/1rW3TLp/ttt.jpg'></img>
         {/* <h1 className='transnow'>Translate Now!</h1> */}
         {/* <p className='sub_ab'>Regional Language Translator.</p> */}
        </div>
        <div className='right_about'>
          <p className='para_right'>
          Introducing our cutting-edge language translator app tailored specifically for bridging the linguistic gap between Bundeli, the local dialect of the Bundelkhand region, and Hindi. Meticulously crafted to facilitate seamless communication and comprehension, our app harnesses advanced algorithms to precisely translate spoken and written content between these two languages. Whether navigating casual conversations or engaging in more profound discourse, users can depend on our app to effortlessly facilitate understanding, promoting enhanced connectivity and inclusivity within the rich linguistic tapestry of the region.

          </p>
        </div>
  
      </div>
    </div>
  )
}

export default About;