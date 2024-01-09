import React, { useState } from 'react'
import "./navBarStyles.css"
import { downloadService } from '../../service/service'
import { IoMdClose } from "react-icons/io";
import { AiOutlineMenu } from "react-icons/ai";

export const NavBar = () => {
    const [colorChange, setColorChange] = useState(false)
    const [visibility, setVisibility] = useState(false)

    const handleVisibility=(param)=>{
        return setVisibility(param)
    }
    window.addEventListener("scroll", ()=>{
        if(window.scrollY >=350){
            setColorChange(true)
        }
        else{
            setColorChange(false)
        }
        return setColorChange
    })
    return (
        <nav className={
            colorChange ?
            'nav-bar changeColor'
            :
            'nav-bar'
        }>
            <div className="logo-container">
                <a href="#home"><h2>M <span>/</span> A</h2></a>
            </div>

            <div className='items-container'>
                <AiOutlineMenu className='burger-menu' onClick={()=>{handleVisibility(true)}}/>
                <ul className={visibility ? "open" : "close"}>
                    <div className='close-menu-container'>
                        <IoMdClose className="close-menu" onClick={()=>{handleVisibility(false)}}/>
                    </div>
                    <li>
                        <a href="#aboutme" onClick={()=>{handleVisibility(false)}}>Sobre mí</a>
                    </li>
                    <li>
                       <a href="#projects" onClick={()=>{handleVisibility(false)}}>Proyectos</a>
                    </li>
                    <li>
                        <a href="#knowledge" onClick={()=>{handleVisibility(false)}}>Estudios</a>
                    </li>
                    <li>
                        <a href="#contact" onClick={()=>{handleVisibility(false)}}>Contacto</a>
                    </li>
                </ul>
                <button onClick={()=>{
                    downloadService()
                }}>CV</button>
            </div>
        </nav>
    )
}
