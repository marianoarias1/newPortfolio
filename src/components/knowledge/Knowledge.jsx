import React from 'react'
import "./knowledgeStyles.css"

export const Knowledge = () => {
    return (
        <section className='knowledge-container'>
            <div className='main-title-container'>
                <h1 id='knowledge'>ESTUDIOS</h1>
            </div>
            <div className='card-knowledge-container'>
                <div className='title-knowledge-container'>
                    <h2>CODERHOUSE </h2>
                    <img src="../../../images/certificateLogo/certificateColor.png" alt="" />
                </div>
                <div className='certificates-container'>
                    <div className='card-certification'>
                        <img src="../../../images/certificates/frontEndCoder.jpg" alt="" />
                        <div className='text-knowledge-container'>
                            <p>Realicé un bootcamp de desarrollo <span>FrontEnd</span> donde aprendí conceptos de buenas prácticas, posicionamiento SEO y diversas herramientas como SASS, AOS, BOOSTRAP, entre otras.</p>

                            <p>Se presentaron nuevos desafíos como la utilización de custom hooks para realizar ciertas tareas, el uso de useContext para poder acceder a componentes desde cualquier parte de la aplicación y aprendí a utilizar firebase as a service para emular un servicio de backend donde se almacenen productos.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='card-knowledge-container'>
                <div className='title-knowledge-container'>
                    <h2>NUCBA</h2>
                    <img src="../../../images/certificateLogo/certificateColor.png" alt="" />
                </div>
                <div className='certificates-container'>
                    <div className='card-certification'>
                        <img src="../../../images/certificates/frontEndNucba.png" alt="" />
                        <div className='text-knowledge-container'>
                            <p>Comencé mi recorrido dentro del mundo de la programación web, aquí aprendí a maquetear usando solo <span className='html'>HTML</span> y <span className='css'>CSS</span>, también aprendí a realizar una web responsiva para distintos dispositivos utilizando Media Queries.</p>

                            <p>Aquí conocí por primera vez <span className='js'>JS</span> y comenzó mi instrucción dentro de este lenguaje, posteriormente aprendí a utlizar React para culminar mi cursada en el bootcamp de FrontEnd.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
