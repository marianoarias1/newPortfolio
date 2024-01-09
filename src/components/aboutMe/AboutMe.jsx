import React from 'react'
import "./aboutMe.css"
import { techs } from '../../techs'
import { TechCard } from '../techCard/TechCard'
export const AboutMe = () => {
    return (
        <section className='section-about' id='aboutme'>
            <div className='card-about'>
                <div className='text-about-container'>
                    <div className='title-aboutme-container'>
                        <h3>SOBRE MI</h3>
                    </div>
                    <div className='description-aboutme-container'>
                        <p>Mis proyectos se enfocan en obtener la mejor experiencia del usuario posible, utilizando herramientas como frameworks y librerias para ahorrar tiempo y obtener una aplicación web que sea dinámica.</p>

                        <p>Podrás encontrar algunos de mis trabajos personales abajo y explorarlos tu mismo/a, también encontrarás el link a su repositorio.</p>

                        <p>Soy un joven programador apasionado por aprender y crecer en este mundo, por eso actualmente me encuentro cursando un bootcamp de desarrollo de aplicaiones móviles (React Native) y, a su vez, aprendiendo backend (Stack MERN) por cuenta porpia, pronto habrá mas proyectos aplicando los nuevos conocimientos.</p>
                    </div>

                </div>
                <div className='images-about-container'>
                    <div className='title-tech-container'>
                        <h3>TECNOLOGÍAS</h3>
                    </div>
                    <div className='techs-image-container'>
                        {techs.map((e)=>{
                            return(
                                <TechCard key={e.id} src={e.src} name={e.name}/>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}
