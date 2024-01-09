import React from 'react'
import "./footerStyles.css"
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer-text-container'>
                <span>Todos los derechos reservados ©2024</span>
            </div>

            <div className='icons-footer-container'>
                <a href="https://github.com/marianoarias1" target='_blank' rel='noreferrer'><FaGithub /></a>
                <a href="https://www.linkedin.com/in/mariano-arias1/" target='_blank' rel='noreferrer'><FaLinkedin/></a>
                <a href="mailto:marianoarias123@hotmail.com" target='_blank' rel='noreferrer'><FaEnvelope/></a>
            </div>
        </footer>
    )
}
