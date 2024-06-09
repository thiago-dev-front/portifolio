import img1 from "../assets/img1.png"
import img2 from "../assets/img2.png"
import img3 from "../assets/img3.png"
import img4 from "../assets/img4.png"
import img5 from "../assets/img5.png"
import img6 from "../assets/img6.png"
import img7 from "../assets/img7.png"
import img8 from "../assets/img8.png"
import img9 from "../assets/img9.png"
import img10 from "../assets/img10.png"
import img11 from "../assets/img11.png"
import img12 from "../assets/img12.png"
function Stacks() {
    return (

        <div className='mt-[80px] md:mt-50'>
            <div className='text-center space-y-4 mx-4 md:mx-0'>
                <h2 className='text-heading font-bold text-5xl'>Tecnologias</h2>
                <p className='text-secondary text-[32px]'> Tecnologias com as quais tenho trabalhado recentemente</p>
            </div>
            <div className='flex items-center justify-center flex-wrap gap-14 xl:gap-20 mt-20 md:mt-32' >
                <div className="md:min-w-[120px]">  <img src={img1} alt="HTML 5" />  </div>
                <div className="md:min-w-[120px]" >  <img src={img2} alt="CSS 3" />  </div>
                <div className="md:min-w-[120px]">  <img src={img3} alt="JavaScript" /> </div>
                <div className="md:min-w-[120px]">  <img src={img4} alt="React" /> </div>
                <div className="md:min-w-[120px]">  <img src={img5} alt="React Native" /> </div>
                <div className="md:min-w-[120px]">  <img src={img6} alt="Bootstrap" /> </div>
                <div className="md:min-w-[120px]">  <img src={img7} alt="Tailwind CSS" /> </div>
                <div className="md:min-w-[120px]">  <img src={img8} alt="Sass" /> </div>
                <div className="md:min-w-[120px]">  <img src={img9} alt="Git" /> </div>
                <div className="md:min-w-[120px]">  <img src={img10} alt="Git" /> </div>
                <div className="md:min-w-[120px]">  <img src={img11} alt="Visual Studio" /> </div>
                <div className="md:min-w-[120px]">  <img src={img12} alt="Git Hub" /> </div>


            </div>
        </div>

    );
}

export default Stacks; 