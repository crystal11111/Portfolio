import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
        <video src='/video-1.mp4' autoPlay loop muted />
        <h1>Welcome to my website!</h1>
        <p>What are you looking for?</p>
        <div className="hero-btns">
            <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                Get Started
            </Button>
            <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
                WATCH <i className='far fa-play-circle'/>
            </Button>
        </div>
    </div>
  )
}

export default HeroSection;