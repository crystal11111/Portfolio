import React from 'react';
import './Myresume.css';


function Myresume() {
    return (
        <div className='resume_container'>
            <object className='resume_img' data='/resume (5).pdf' type='application/pdf'>
                <p>Your browser doesn't support PDF embedding. You can download the PDF <a href="/resume (5).pdf">here</a>.</p>
            </object>
        </div>
    );
}


export default Myresume;