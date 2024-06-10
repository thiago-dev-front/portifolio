import logoFooter from '../assets/logo-footer.svg'
import github from '../assets/github.svg';
import twitter from '../assets/twitter.svg';
import linkedin from '../assets/linkedin.svg';

function Footer() {
    return (
        <footer className='mt-40 mb-10 overflow-hidden'>
            <div className='flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 '>
                <div className='flex-1'>
                    <img src={logoFooter} alt='Footer' />
                </div>
                <div className='space-x-10 mr-0 md:mr-20 text-center flex-col md:flex'>
                    <span className='text-secondary text-xl block'>(11) 96809-8975</span>
                    <span className='text-secondary text-xl block'>thiagodiogenes@yahoo.com.br</span>
                </div>

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

            <hr className="border-t border-darkMode my-8" />

            <div className='flex flex-col md:flex-row items-center justify-between'>
                <nav>
                    <ul className='flex  flex-col md:flex-row items-center gap-5'>
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
                </nav>
                <div>
                    <p className='text-secondary text-xl max-w-[280px] md:max-w-full mt-6 md:mt-0'>Desenvolvido e construído por <span className='text-white'>Thiago Gonçalves</span> com <span className='text-white'>Amor</span> & <span className='text-white'>Café</span></p>
                </div>
            </div>
        </footer>

    );
}

export default Footer; 