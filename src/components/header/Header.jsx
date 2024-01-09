import React from 'react'
import "./headerStyles.css"
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'

export const Header = () => {
    return (
        <header className='header' id='home'>
            <div className='text-container'>
                <div className='title-container'>
                    <h1>MARIANO ARIAS</h1>
                    <h2>Programador web Front<span>End</span></h2>
                    <div className='icons-social-container'>
                    <a href="https://github.com/marianoarias1" target='_blank' rel='noreferrer'><FaGithub/></a>
                    <a href="https://www.linkedin.com/in/mariano-arias1/" target='_blank' rel='noreferrer'><FaLinkedin/></a>
                    <a href="https://www.instagram.com/mariano_arias1/" target='_blank' rel='noreferrer'><FaInstagram/></a>
                    </div>
                </div>
                <div className='description-container'>
                    <p>Me enfoco en las buenas practicas, posicionamiento SEO y una interfaz que garantice al usuario una buena experiencia.
                    </p>
                </div>
            </div>

            <div className='image-container'>
                <img src="../../../images/avatar/avatar.jpg" alt="avatar de mariano arias" />
            </div>
        </header>
    )
}
