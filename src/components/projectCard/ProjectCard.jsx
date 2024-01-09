import React from 'react'
import "./projectCardStyles.css"

export const ProjectCard = ({ project }) => {
    return (
        <article className='project-card'>
            {
                project.id % 2 === 0 ?
                    <>
                        <main className='main-project'>
                            <header className='title-project-container'>
                                <h2>
                                    {project.name}
                                </h2>
                                <a href={project.url} target='_blank'>
                                    <img src="../../../images/icon/link_4155136.png" alt="" />
                                </a>

                            </header>
                            <section className='desc-project-container'>
                                <p>{project.desc}</p>
                            </section>

                            <section className='deploy-container'>
                                <a href={project.code} target='_blank'><button>{`<CODE/>`}</button></a>
                            </section>
                        </main>

                        <section className='image-project-container' data-aos="zoom-in">
                            <img src={project.img} alt="" />
                        </section>
                    </>

                    :

                    <>
                        <section className='image-project-container' data-aos="zoom-in">
                            <img src={project.img} alt="" />
                        </section>

                        <main className='main-project'>
                            <header className='title-project-container'>
                                <h2>
                                    {project.name}
                                </h2>
                                <a href={project.url} target='_blank'>
                                    <img src="../../../images/icon/link_4155136.png" alt="" />
                                </a>
                            </header>
                            <section className='desc-project-container'>
                                <p>{project.desc}</p>
                            </section>
                            <section className='deploy-container'>
                                <a href={project.code} target='_blank'><button>{`<CODE/>`}</button></a>
                            </section>
                        </main>
                    </>
            }


        </article>
    )
}
