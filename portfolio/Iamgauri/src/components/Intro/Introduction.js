import React from 'react'
import './Introduction.css';
import { Link } from 'react-scroll';
import hireme from '../../assets/hireme.png'

const Introduction = () => {
  return (
    <section id='Intro'>
    <div className='introcontent'>
        <span className='hello'>Hello,</span>
        <span className='introtext'>I'm <span className='introname'>Gauri</span><br/>Website Designer</span>
        <p className='intropara'>I am a sophomore student pursuing bachelors in Computer Science.<br/> I am tech enthusiast with passion for web designing</p>
        <Link><button className='btn'><img src={hireme} alt="" className='btnimg'/>Hire Me</button></Link>
    </div>
    <img src='' alt='' className='bg'/>
    </section>
  )
}

export default Introduction
