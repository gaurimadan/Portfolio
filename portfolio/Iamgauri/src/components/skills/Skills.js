import React from 'react'
import './skills.css';
import webDesign from '../../assets/ui-design.png'
import CV from '../../assets/cv.jpg'
import blender from '../../assets/blender.png'
const Skills = () => {
  return (
   <section id='skills'>
    <span className='skillTitle'>What I do</span>
    <span className='skilldesc'>I am a skilled designer equiped with knowledge of technologies like React.js </span>
    <div className='skillbar'>
        <div className='skillbar'>
            <img src={webDesign} alt="webdesign" className='skillbarimg'/>
            <div className='skillbartext'>
                <h2>UI Design</h2>
                <p>
                </p>
            </div>
        </div>
        <div className='skillbar'>
            <img src={CV} alt="webdesign" className='skillbarimg'/>
            <div className='skillbartext'>
                <h2>OpenCV</h2>
                <p>
                </p>
            </div>
        </div>
        <div className='skillbar'>
            <img src={blender} alt="webdesign" className='skillbarimg'/>
            <div className='skillbartext'>
                <h2>Blender</h2>
                <p>
                </p>
            </div>
        </div>
    </div>
   </section>
  )
}

export default Skills
