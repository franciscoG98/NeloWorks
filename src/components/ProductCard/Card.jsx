import React from 'react'
import './cardStyles.scss'

const Card = ({  title, description, image, alt}) => {
  return (
    <div className='card_container'>
        <img className='card_img' src={image} alt={alt} />
        <h2>{title}</h2>
        <p>{description}</p>
    </div>
  )
}

export default Card