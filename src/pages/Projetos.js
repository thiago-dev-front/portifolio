import Card from "../components/Card"
import logo from '../assets/icon-portifolio.png'
import preview from '../assets/icon-preview.svg'
import github from '../assets/icon-github.svg'

function Projetos() {
    const data = [
        {
            logo: logo,
            title: 'Project 1',
            description: 'Description for project 1',
            techStack: ['HTML', 'JavaScript', 'SASS', 'React'],
            preview: preview,
            github: github,
        },
        {
            logo: logo,
            title: 'Project 1',
            description: 'Description for project 1',
            techStack: ['HTML', 'JavaScript', 'SASS', 'React'],
            preview: preview,
            github: github,
        },
        {
            logo: logo,
            title: 'Project 1',
            description: 'Description for project 1',
            techStack: ['HTML', 'JavaScript', 'SASS', 'React'],
            preview: preview,
            github: github,
        },
        {
            logo: logo,
            title: 'Project 1',
            description: 'Description for project 1',
            techStack: ['HTML', 'JavaScript', 'SASS', 'React'],
            preview: preview,
            github: github,
        },
        {
            logo: logo,
            title: 'Project 1',
            description: 'Description for project 1',
            techStack: ['HTML', 'JavaScript', 'SASS', 'React'],
            preview: preview,
            github: github,
        },
        {
            logo: logo,
            title: 'Project 1',
            description: 'Description for project 1',
            techStack: ['HTML', 'JavaScript', 'SASS', 'React'],
            preview: preview,
            github: github,
        },

    ];

    return (
        <div>
            {data.map((card, index) => (
                <Card
                    key={index}
                    logo={card.logo}
                    title={card.title}
                    description={card.description}
                    techStack={card.techStack}
                    preview={card.preview}
                    github={card.github}
                />
            ))}
        </div>
    )
}
export default Projetos