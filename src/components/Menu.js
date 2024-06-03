import logo from '../assets/logo-tmg.svg'
import github from '../assets/github.svg'
import twitter from '../assets/twitter.svg'
import linkedin from '../assets/linkedin.svg'

function Menu() {
    return (
        <header className="bg-primary max-w-[1193px] h-[60px] mx-auto mt-8">
            <div className='flex justify-center'>
                <div className='flex-1'>
                    <img src={logo} alt="logo" />
                </div>
                <div className='mr-28'>
                    <ul className='flex items-center gap-10  h-[60px] '>
                        <li className='text-secondary text-xl' >Home</li>
                        <li className='text-secondary text-xl'>About</li>
                        <li className='text-secondary text-xl'>Tech Stack</li>
                        <li className='text-secondary text-xl'>Projects</li>
                        <li className='text-secondary text-xl'>Contact</li>
                    </ul>
                </div>
                <div className='flex items-center gap-6'>
                    <img src={github} alt="github" />
                    <img src={twitter} alt="twitter" />
                    <img src={linkedin} alt="linkedin" />
                </div>
            </div>
        </header>
    );
}

export default Menu;
