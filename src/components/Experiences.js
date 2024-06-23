
import logoDotz from '../assets/dotz_logo.jpg'
import 'react-vertical-timeline-component/style.min.css';
import Badge from "./Badge";

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';

function Experiences() {
    return (

        <div className='mt-[80px] md:mt-50'>
            <div className='text-center mb-10'>
                <h2 className='text-heading font-bold text-5xl'>Minhas Experiências</h2>
            </div>

            <div>
                <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work text-white "
                        contentStyle={{ background: '#fff', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                        date="2021 - até o momento"
                        iconStyle={{
                            background: 'linear-gradient(to right, #E70FAA, #00C0FD)',
                            color: '#fff',
                        }}
                        icon={<s />}
                    >
                        <div className="text-primary">
                            <div className="flex items-center gap-4">
                                <img className="max-w-[48px]" src={logoDotz} alt="Dotz" />
                                <h3 className="vertical-timeline-element-title  font-medium">Front-End Developer</h3>
                            </div>
                            <span className="block font-normal my-3">
                                Participei ativamente do desenvolvimento do GDO (Ganhe Online Dotz) e do novo site da Dotz. A Dotz é um programa de fidelidade no modelo de coalizão, onde os usuários acumulam pontos Dotz em diversos parceiros e podem trocá-los por uma variedade de produtos e serviços disponíveis no catálogo Dotz. Meu trabalho focou na criação de soluções inovadoras e eficientes para melhorar significativamente a experiência do usuário e aumentar a eficácia das plataformas digitais da empresa.
                            </span>

                            <div className="flex items-center flex-wrap gap-[10px]">
                                <span className="block font-medium">Tecnologias:</span>
                                <Badge text='Angular' />
                                <Badge text='Prismic' />
                                <Badge text='Metodologias Ágeis' />
                                <Badge text='Scrum' />
                                <Badge text='Kanban' />
                                <Badge text='Cloud' />
                                <Badge text='GCP' />
                                <Badge text='AWS' />
                                <Badge text='Azure' />
                                <Badge text='Angular 9+' />
                                <Badge text='TypeScript' />
                                <Badge text='HTML' />
                                <Badge text='CSS' />
                                <Badge text='JavaScript' />
                                <Badge text='SASS' />
                                <Badge text='Git' />
                                <Badge text='Node.js' />
                                <Badge text='Design System' />
                                <Badge text='Swagger' />
                                <Badge text='Web Components' />
                                <Badge text='Jenkins' />
                            </div>

                        </div>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work text-white "
                        contentStyle={{ background: '#fff', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                        date="2021 - até o momento"
                        iconStyle={{
                            background: 'linear-gradient(to right, #E70FAA, #00C0FD)',
                            color: '#fff',
                        }}
                        icon={<s />}
                    >
                        <div className="text-primary">
                            <div className="flex items-center gap-4">
                                <img className="max-w-[48px]" src={logoDotz} alt="Dotz" />
                                <h3 className="vertical-timeline-element-title  font-medium">Front-End Developer</h3>
                            </div>
                            <span className="block font-normal my-3">
                                Participei ativamente do desenvolvimento do GDO (Ganhe Online Dotz) e do novo site da Dotz. A Dotz é um programa de fidelidade no modelo de coalizão, onde os usuários acumulam pontos Dotz em diversos parceiros e podem trocá-los por uma variedade de produtos e serviços disponíveis no catálogo Dotz. Meu trabalho focou na criação de soluções inovadoras e eficientes para melhorar significativamente a experiência do usuário e aumentar a eficácia das plataformas digitais da empresa.
                            </span>

                            <div className="flex items-center flex-wrap gap-[10px]">
                                <span className="block font-medium">Tecnologias:</span>
                                <Badge text='Angular' />
                                <Badge text='Prismic' />
                                <Badge text='Metodologias Ágeis' />
                                <Badge text='Scrum' />
                                <Badge text='Kanban' />
                                <Badge text='Cloud' />
                                <Badge text='GCP' />
                                <Badge text='AWS' />
                                <Badge text='Azure' />
                                <Badge text='Angular 9+' />
                                <Badge text='TypeScript' />
                                <Badge text='HTML' />
                                <Badge text='CSS' />
                                <Badge text='JavaScript' />
                                <Badge text='SASS' />
                                <Badge text='Git' />
                                <Badge text='Node.js' />
                                <Badge text='Design System' />
                                <Badge text='Swagger' />
                                <Badge text='Web Components' />
                                <Badge text='Jenkins' />
                            </div>

                        </div>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work text-white "
                        contentStyle={{ background: '#fff', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                        date="2021 - até o momento"
                        iconStyle={{
                            background: 'linear-gradient(to right, #E70FAA, #00C0FD)',
                            color: '#fff',
                        }}
                        icon={<s />}
                    >
                        <div className="text-primary">
                            <div className="flex items-center gap-4">
                                <img className="max-w-[48px]" src={logoDotz} alt="Dotz" />
                                <h3 className="vertical-timeline-element-title  font-medium">Front-End Developer</h3>
                            </div>
                            <span className="block font-normal my-3">
                                Participei ativamente do desenvolvimento do GDO (Ganhe Online Dotz) e do novo site da Dotz. A Dotz é um programa de fidelidade no modelo de coalizão, onde os usuários acumulam pontos Dotz em diversos parceiros e podem trocá-los por uma variedade de produtos e serviços disponíveis no catálogo Dotz. Meu trabalho focou na criação de soluções inovadoras e eficientes para melhorar significativamente a experiência do usuário e aumentar a eficácia das plataformas digitais da empresa.
                            </span>

                            <div className="flex items-center flex-wrap gap-[10px]">
                                <span className="block font-medium">Tecnologias:</span>
                                <Badge text='Angular' />
                                <Badge text='Prismic' />
                                <Badge text='Metodologias Ágeis' />
                                <Badge text='Scrum' />
                                <Badge text='Kanban' />
                                <Badge text='Cloud' />
                                <Badge text='GCP' />
                                <Badge text='AWS' />
                                <Badge text='Azure' />
                                <Badge text='Angular 9+' />
                                <Badge text='TypeScript' />
                                <Badge text='HTML' />
                                <Badge text='CSS' />
                                <Badge text='JavaScript' />
                                <Badge text='SASS' />
                                <Badge text='Git' />
                                <Badge text='Node.js' />
                                <Badge text='Design System' />
                                <Badge text='Swagger' />
                                <Badge text='Web Components' />
                                <Badge text='Jenkins' />
                            </div>

                        </div>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work text-white "
                        contentStyle={{ background: '#fff', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                        date="2021 - até o momento"
                        iconStyle={{
                            background: 'linear-gradient(to right, #E70FAA, #00C0FD)',
                            color: '#fff',
                        }}
                        icon={<s />}
                    >
                        <div className="text-primary">
                            <div className="flex items-center gap-4">
                                <img className="max-w-[48px]" src={logoDotz} alt="Dotz" />
                                <h3 className="vertical-timeline-element-title  font-medium">Front-End Developer</h3>
                            </div>
                            <span className="block font-normal my-3">
                                Participei ativamente do desenvolvimento do GDO (Ganhe Online Dotz) e do novo site da Dotz. A Dotz é um programa de fidelidade no modelo de coalizão, onde os usuários acumulam pontos Dotz em diversos parceiros e podem trocá-los por uma variedade de produtos e serviços disponíveis no catálogo Dotz. Meu trabalho focou na criação de soluções inovadoras e eficientes para melhorar significativamente a experiência do usuário e aumentar a eficácia das plataformas digitais da empresa.
                            </span>

                            <div className="flex items-center flex-wrap gap-[10px]">
                                <span className="block font-medium">Tecnologias:</span>
                                <Badge text='Angular' />
                                <Badge text='Prismic' />
                                <Badge text='Metodologias Ágeis' />
                                <Badge text='Scrum' />
                                <Badge text='Kanban' />
                                <Badge text='Cloud' />
                                <Badge text='GCP' />
                                <Badge text='AWS' />
                                <Badge text='Azure' />
                                <Badge text='Angular 9+' />
                                <Badge text='TypeScript' />
                                <Badge text='HTML' />
                                <Badge text='CSS' />
                                <Badge text='JavaScript' />
                                <Badge text='SASS' />
                                <Badge text='Git' />
                                <Badge text='Node.js' />
                                <Badge text='Design System' />
                                <Badge text='Swagger' />
                                <Badge text='Web Components' />
                                <Badge text='Jenkins' />
                            </div>

                        </div>
                    </VerticalTimelineElement>

                </VerticalTimeline>
            </div>

        </div>

    );
}

export default Experiences; 