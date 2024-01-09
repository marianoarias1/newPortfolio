import React from 'react'
import { projects } from '../../projects'
import { ProjectCard } from '../projectCard/ProjectCard'
import "./projectsStyles.css"

export const Projects = () => {
  return (
    <main className='main'>
        <h1 id='projects'>Proyectos</h1>
        <div className='card-project-container'>
            {
                projects.map((project)=>{
                    return(
                        <ProjectCard key={project.id} project={project}/>
                    )
                })
            }
        </div>
    </main>
  )
}
