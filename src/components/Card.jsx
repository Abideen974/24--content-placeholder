import React from 'react'
import './card.css'
import image1 from './picture/c.jpg'
import image2 from './picture/a.jpg'

function Card() {
  return (
    <>
        <div className="card-header animated-bg" id="header">
            <img src={image1}/>
        </div>
        <div className="card-content">
            <h3 className="card-title animated-bg animated-bg-text" id='title'>
                Lorem ipsum dolor sit amet.
            </h3>
            <p className="card-excerpt" id="excerpt">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, ullam!
                <span className="animated-bg animated-bg-text">
                    &nbsp;
                </span>
                <span className="animated-bg animated-bg-text">
                    &nbsp;
                </span>
                <span className="animated-bg animated-bg-text">
                    &nbsp;
                </span>
            </p>
            <div className="author">
                <div className="profile-img animated-bg" id="profile_img">
                    <img src={image2} alt="" />
                </div>
                <div className="author-info">
                     <strong className="animated-bg animated-bg-text" id='name'>
                            john doe
                     </strong>
                     <small className="animated-bg animated-bg-text" id="date">
                         Oct 08, 2022 
                     </small>
                </div>
            </div>
        </div>
    </>
  )
}

export default Card