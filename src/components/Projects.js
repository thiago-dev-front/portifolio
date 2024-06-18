import React from 'react';
import Slider from 'react-slick';
import Card from './Card';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import logo from '../assets/icon-portifolio.png'
import preview from '../assets/icon-preview.svg'
import github from '../assets/icon-github.svg'


function Projects() {
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

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
        // autoplay: true,
        // autoplaySpeed: 4000,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2.5,
                    slidesToScroll: 2.5,
                },
            },
            {
                breakpoint: 980,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1.2,
                    slidesToScroll: 1.2,
                },
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 360,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 280,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <section className='mb-12'>
            <div className='text-center space-y-4 mt-32 mx-3 md:mx-0 mb-12'>
                <h2 className='text-heading font-bold text-5xl'>Projetos</h2>
                <p className='text-secondary text-[32px]'>Alguns projetos que construí até o momento</p>
            </div>

            <div className='mx-6 md:mx-0 '>
                <Slider {...settings}>
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
                </Slider>
            </div>
        </section>
    );
}



export default Projects;
