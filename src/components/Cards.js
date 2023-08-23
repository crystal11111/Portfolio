import React from 'react'
import Carditem from './Carditem'
import './Cards.css'

function Cards() {
  return (
    <div className='cards'>
        <h1> Check out my resume!</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards_item'>
                    <Carditem 
                    src='/img-2.jpg'
                    text='Check out my extracurricular activites'
                    label='Activity'
                    path='/projects'
                    />
                    <Carditem
                    src='/img-2.jpg'
                    text='Check out my projects'
                    label='Projects'
                    path='/projects'
                    />
                </ul>
            </div>
        </div>

    </div>
  )
}

export default Cards