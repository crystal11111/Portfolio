import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  const scrollToSection = () => {
    const section = document.getElementById('cards-scroll'); 
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth', // adds smooth scrolling animation
      });
    }
  };

  return (
    <div className='hero-container'>
        <video src='/video-1.mp4' autoPlay loop muted />
        <h1>Welcome to my website!</h1>
        <p>What are you looking for?</p>
        <div className="hero-btns">
            <Button className='btns--start' buttonStyle='btn--outline' buttonSize='btn--large' onClick={scrollToSection}>
                Get Started
            </Button>
        </div>
    </div>
  )
}

export default HeroSection;