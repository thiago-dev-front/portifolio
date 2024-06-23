import React from 'react';
import iconGit from '../assets/icon-git.png'
import iconProject from '../assets/icon-project.png'
import CardProject from './CardProject';



function Projects() {
    const projectData = [
        {
            link: 'https://github.com/thiago-dev-front/ignite-timer',
            title: 'ignite-timer',
            logoHeading: iconProject,
            logoGit: iconGit,
            text: '- Nesse repositório foi criado um gerenciador de tarefas',
            technologies: ['HTML', 'CSS', 'JavaScript', 'React']
        },
        {
            link: 'https://github.com/thiago-dev-front/ignite-timer',
            title: 'ignite-timer',
            logoHeading: iconProject,
            logoGit: iconGit,
            text: '- Nesse repositório foi criado um gerenciador de tarefas',
            technologies: ['HTML', 'CSS', 'JavaScript', 'React']
        },
        {
            link: 'https://github.com/thiago-dev-front/ignite-timer',
            title: 'ignite-timer',
            logoHeading: iconProject,
            logoGit: iconGit,
            text: '- Nesse repositório foi criado um gerenciador de tarefas',
            technologies: ['HTML', 'CSS', 'JavaScript', 'React']
        },
        {
            link: 'https://github.com/thiago-dev-front/ignite-timer',
            title: 'ignite-timer',
            logoHeading: iconProject,
            logoGit: iconGit,
            text: '- Nesse repositório foi criado um gerenciador de tarefas',
            technologies: ['HTML', 'CSS', 'JavaScript', 'React']
        },
        {
            link: 'https://github.com/thiago-dev-front/ignite-timer',
            title: 'ignite-timer',
            logoHeading: iconProject,
            logoGit: iconGit,
            text: '- Nesse repositório foi criado um gerenciador de tarefas',
            technologies: ['HTML', 'CSS', 'JavaScript', 'React']
        },
        {
            link: 'https://github.com/thiago-dev-front/ignite-timer',
            title: 'ignite-timer',
            logoHeading: iconProject,
            logoGit: iconGit,
            text: '- Nesse repositório foi criado um gerenciador de tarefas',
            technologies: ['HTML', 'CSS', 'JavaScript', 'React']
        },
    ];


    return (
        <section className='mb-12'>
            <div className='text-center space-y-4 mt-32 mx-3 md:mx-0 mb-12'>
                <h2 className='text-secondary font-bold text-5xl'>Projetos</h2>
                {/* <p className='text-secondary text-[32px]'>Alguns projetos que construí até o momento</p> */}
            </div>


            <div className='flex flex-wrap px-5 gap-10'>
                {projectData.map((project, index) => (
                    <CardProject
                        key={index}
                        title={project.title}
                        link={project.link}
                        logoHeading={project.logoHeading}
                        logoGit={project.logoGit}
                        text={project.text}
                        technologies={project.technologies}
                    />
                ))}
            </div>

        </section>
    );
}



export default Projects;
