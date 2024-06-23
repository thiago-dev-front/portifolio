
import logoDotz from '../assets/dotz_logo.jpg'
import logoCompasso from '../assets/compasso.jpg'
import logoNetshoes from '../assets/netshoes.jpg'
import 'react-vertical-timeline-component/style.min.css';
import Badge from "./Badge";

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';

function Experiences() {
    return (

        <div className='mt-[80px] md:mt-50'>
            <div className='text-center mb-10'>
                <h2 className='text-secondary font-bold text-5xl'>Minhas Experiências</h2>
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
                                <h3 className="vertical-timeline-element-title font-medium">Front-End Developer</h3>
                            </div>
                            <span className="block font-normal my-3">
                                A <span className='font-medium'>Dotz</span> é um programa de fidelidade no modelo de coalizão, onde os usuários acumulam pontos Dotz em diversos parceiros e podem trocá-los por uma variedade de produtos e serviços disponíveis no catálogo Dotz.
                                Participei ativamente do desenvolvimento do GDO (Ganhe Online Dotz) e do novo site da Dotz.  Meu trabalho focou na criação de soluções inovadoras e eficientes para melhorar significativamente a experiência do usuário e aumentar a eficácia das plataformas digitais da empresa.
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
                        date="2018 - 2021"
                        iconStyle={{
                            background: 'linear-gradient(to right, #E70FAA, #00C0FD)',
                            color: '#fff',
                        }}
                        icon={<s />}
                    >
                        <div className="text-primary">
                            <div className="flex items-center gap-4">
                                <img className="max-w-[48px]" src={logoCompasso} alt="Dotz" />
                                <h3 className="vertical-timeline-element-title  font-medium">Front-End Developer  </h3>
                            </div>
                            <span className="block font-normal my-3">
                                A <span className='font-medium'>Compasso</span> é uma empresa de tecnologia que oferece soluções digitais inovadoras, especializada em transformação digital, desenvolvimento de software, e consultoria em TI. Atuei no desenvolvimento de importantes projetos na Livelo, uma plataforma de fidelidade onde os usuários acumulam pontos em diversos parceiros e podem trocá-los por uma ampla variedade de produtos e serviços disponíveis no catálogo da Livelo. Meu trabalho focou na criação de soluções inovadoras e eficientes para melhorar significativamente a experiência do usuário e aumentar a eficácia das plataformas digitais da empresa.
                            </span>

                            <div className="flex items-center flex-wrap gap-[10px]">
                                <span className="block font-medium">Tecnologias:</span>
                                <Badge text='Knockout js' />
                                <Badge text='Kanban' />
                                <Badge text='AWS' />
                                <Badge text='Azure' />
                                <Badge text='TypeScript' />
                                <Badge text='HTML' />
                                <Badge text='CSS' />
                                <Badge text='JavaScript' />
                                <Badge text='SASS' />
                                <Badge text='Git' />
                                <Badge text='Node.js' />
                                <Badge text='Design System' />
                            </div>

                        </div>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work text-white "
                        contentStyle={{ background: '#fff', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                        date="2012 - 2018"
                        iconStyle={{
                            background: 'linear-gradient(to right, #E70FAA, #00C0FD)',
                            color: '#fff',
                        }}
                        icon={<s />}
                    >
                        <div className="text-primary">
                            <div className="flex items-center gap-4">
                                <img className="max-w-[48px]" src={logoNetshoes} alt="Dotz" />
                                <h3 className="vertical-timeline-element-title  font-medium">Analista de Operações de e-Commerce Pleno</h3>
                            </div>
                            <span className="block font-normal my-3">
                                A <span className='font-medium'>Netshoes</span> é uma das maiores plataformas de comércio eletrônico de artigos esportivos da América Latina.
                                Com uma experiência robusta em programação de campanhas de marketing, incluindo Black Friday, Natal, e novas lojas como Zattini, atuei na monitoração dos ambientes de homologação e produção em colaboração com equipes de suporte nos EUA e na Índia. Focava em ações preventivas para melhorar a performance, usabilidade e experiência do cliente. Além disso, ofereci suporte e programei mecânicas, campanhas e cupons promocionais na plataforma Oracle Commerce (ATG). Minha função também incluía a atualização de conteúdos do site, criação de páginas especiais e segmentação na plataforma Endeca, bem como a gestão de tags através do Google Tag Manager.
                            </span>

                            <div className="flex items-center flex-wrap gap-[10px]">
                                <span className="block font-medium">Tecnologias:</span>
                                <Badge text='Oracle ATG' />
                                <Badge text='Freedom' />
                                <Badge text='Kanban' />
                                <Badge text='AWS' />
                                <Badge text='HTML' />
                                <Badge text='CSS' />
                                <Badge text='JavaScript' />
                                <Badge text='GTM' />

                            </div>

                        </div>
                    </VerticalTimelineElement>


                </VerticalTimeline>
            </div>

        </div>

    );
}

export default Experiences; 