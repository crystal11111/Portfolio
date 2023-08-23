import React from 'react'
import { Button } from './Button'
import './Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='footer-container'>
        <section className='footer-subscription'>
            <p className='footer-subscription-heading'>
                Contact me
            </p>
            <p className='footer-subscirition-text'>
                If you want to get to know more about me!
            </p>
            <div className='input-areas'>
                <form>
                    <input
                        type='email'
                        name='email'
                        placeholder='Your email'
                        className='footer-input'
                    />
                    <Button
                    buttonStyle='btn--outline'>
                        Send
                    </Button>
                </form>
            </div>
        </section>
        <div className='footer-links'>
            <div className='footer-link-wrapper'>
                <div class='footer-link-items'>
                    <h2> About Me </h2>
                    <Link to='/sign-up'>Resume</Link>
                    <Link to='/'>Projects</Link>
                    <Link to='/'>Extracurricular Activities</Link>
                </div>
                <div class='footer-link-items'>
                    <h2> Contact Me </h2>
                    <Link to='/sign-up'>How it works</Link>
                    <Link to='/'>Testimonials</Link>
                    <Link to='/'>Careers</Link>
                </div>
            </div>
            <div className='footer-link-wrapper'>
                <div class='footer-link-items'>
                    <h2>Videos</h2>
                    <Link to='/'>Submit Video</Link>
                    <Link to='/'>Ambassadors</Link>
                    <Link to='/'>Agency</Link>
                </div>
            </div>
        </div>
        <section class='social-media'>
            <div class='social-media-wrap'>
                <div class='footer-logo'>
                    <Link to='/' className='social-logo'>
                    Crystal (Soojeong) Cho
                    </Link>
                </div>
            <small class='website-rights'>crystal031230@gmail.com</small>
            <div class='social-icons'>
                <Link class='social-icon-link facebook'
                to='/'
                target='_blank'
                aria-label='Facebook'
                >
                <i class='fab fa-facebook-f' />
                </Link>
                <Link class='social-icon-link instagram'
                to='/'
                target='_blank'
                aria-label='Instagram'
                >
                <i class='fab fa-instagram' />
                </Link>
                <Link class='social-icon-link linkedin'
                to="https://www.linkedin.com/in/soojeong-cho-441827181"
                target='_blank'
                aria-label='LinkedIn'
                >
                <i class='fab fa-linkedin' />
                </Link>
            </div>
            </div>
      </section>
    </div>
  );
}

export default Footer