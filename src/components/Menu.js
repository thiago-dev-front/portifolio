import React, { useState } from 'react';
import { List, X } from 'phosphor-react';  // Ícones da Phosphor
import logo from '../assets/logo-tmg.svg';
import github from '../assets/github.svg';
import twitter from '../assets/twitter.svg';
import linkedin from '../assets/linkedin.svg';

function Menu() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="bg-primary h-[60px] mt-8">
            <div className='flex items-center justify-between px-5'>
                <div className='flex-1'>
                    <img src={logo} alt="logo" />
                </div>
                <div className='hidden md:block mr-28'>
                    <ul className='flex items-center gap-10 h-[60px]'>
                        <li>
                            <a className='text-secondary text-gradient text-xl' href='/'>Inicio</a>
                        </li>
                        <li>
                            <a className='text-secondary text-gradient text-xl' href='/'>Sobre Mim</a>
                        </li>
                        <li>
                            <a className='text-secondary text-gradient text-xl' href='/'>Tecnologias</a>
                        </li>
                        <li>
                            <a className='text-secondary text-gradient text-xl' href='/'>Projetos</a>
                        </li>
                        <li>
                            <a className='text-secondary text-gradient text-xl' href='/'>Contato</a>
                        </li>
                    </ul>
                </div>
                <div className='hidden md:block'>
                    <div className='flex items-center gap-6 '>
                        <a href='/'>
                            <img src={github} alt="github" />
                        </a>
                        <a href='/'>
                            <img src={twitter} alt="twitter" />
                        </a>
                        <a href='/'>
                            <img src={linkedin} alt="linkedin" />
                        </a>
                    </div>
                </div>
                <div className='md:hidden flex items-center'>
                    <button onClick={toggleMenu} className="text-secondary">
                        {isMenuOpen ? <X size={28} /> : <List size={28} />}
                    </button>
                </div>
            </div>
            {isMenuOpen && (
                <>
                    <div className='relative z-10 bg-primary pb-6'>
                        <div className='md:hidden'>
                            <ul className='flex flex-col items-center gap-6 mt-4'>
                                <li className='text-secondary text-xl'>Início</li>
                                <li className='text-secondary text-xl'>Sobre Mim</li>
                                <li className='text-secondary text-xl'>Tecnologias</li>
                                <li className='text-secondary text-xl'>Projetos</li>
                                <li className='text-secondary text-xl'>Contato</li>
                            </ul>
                        </div>
                        <div className='md:hidden'>
                            <div className='flex flex-col items-center gap-6 mt-6 '>
                                <a href='/'>
                                    <img src={github} alt="github" />
                                </a>
                                <a href='/'>
                                    <img src={twitter} alt="twitter" />
                                </a>
                                <a href='/'>
                                    <img src={linkedin} alt="linkedin" />
                                </a>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </header>
    );
}

export default Menu;
