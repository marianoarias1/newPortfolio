import React from 'react'
import "./techCard.css"

export const TechCard = ({src, name}) => {
  return (
    <article className='tech-card'>
        <header className='image-tech-container'>
            <img src={src} alt={`icono de ${name}`} />
        </header>
        <footer className='name-container'>
            <h4>{name}</h4>
        </footer>
    </article>
  )
}
