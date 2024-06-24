import React from 'react';
import CardProject from './CardProject';
import { Bookmarks, ArrowSquareIn, GitBranch } from 'phosphor-react';  // Ícones da Phosphor

function Projects() {
    const projectData = [
        {
            link: 'https://dotz.com.br/',
            title: 'Dotz',
            logoHeading: <Bookmarks size={32} />,
            logoGit: <ArrowSquareIn size={32} />,
            text: '- Trabalhei na implementação do site Dotz',
            technologies: ['HTML', 'CSS', 'JavaScript', 'Angular', 'Jenkins',]
        },
        {
            link: 'https://www.netshoes.com.br/',
            title: 'Netshoes',
            logoHeading: <Bookmarks size={32} />,
            logoGit: <ArrowSquareIn size={32} />,
            text: '- Participei do desenvolvimento do e-commerce Netshoes',
            technologies: ['HTML', 'CSS', 'JavaScript', 'ATG', 'Endeca', 'GTM']
        },
        {
            link: 'https://www.zattini.com.br/',
            title: 'Zattini',
            logoHeading: <Bookmarks size={32} />,
            logoGit: <ArrowSquareIn size={32} />,
            text: '-Participei do desenvolvimento do e-commerce Zattini',
            technologies: ['HTML', 'CSS', 'JavaScript', 'ATG', 'Endeca', 'GTM']
        },
        {
            link: 'https://chromewebstore.google.com/detail/lembrador-dotz/lonploobmehcmigeofihblfobnhkahhf?hl=pt-BR&utm_source=site-gdo&utm_medium=pagina-lembrador&pli=1',
            title: 'Lembrador Dotz',
            logoHeading: <Bookmarks size={32} />,
            logoGit: <ArrowSquareIn size={32} />,
            text: 'Atuei na construção da extensão "Lembrador" Dotz',
            technologies: ['HTML', 'CSS', 'JavaScript']
        },
        {
            link: 'https://github.com/thiago-dev-front/dtmoney',
            title: 'dtmoney',
            logoHeading: <Bookmarks size={32} />,
            logoGit: <GitBranch size={32} />,
            text: '- Nesse repositório foi criado um APP de finanças',
            technologies: ['HTML', 'CSS', 'JavaScript', 'React']
        },
        {
            link: 'https://github.com/thiago-dev-front/ignite-timer',
            title: 'api-rest-node-js',
            logoHeading: <Bookmarks size={32} />,
            logoGit: <GitBranch size={32} />,
            text: '- Nesse repositório foi criado uma API em Node + Banco de dados',
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
