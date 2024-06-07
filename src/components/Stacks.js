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
     
        <div className=' mt-60'>
               <div className='text-center space-y-4'>
            <h2 className='text-heading font-bold text-5xl'> Minha Lista de Tecnologias</h2>
            <p className='text-secondary text-[32px]'> Tecnologias com as quais tenho trabalhado recentemente</p>
        </div>
        <div className='flex items-center flex-wrap  justify-center gap-10 mt-32 space-x-10 ' >        
           <div>  <img src={img1} />  </div>
           <div>  <img src={img2} />  </div>
           <div>  <img src={img3} /> </div>
           <div>  <img src={img4} /> </div>
           <div>  <img src={img5} /> </div>
           <div>  <img src={img6} /> </div>
           <div>  <img src={img7} /> </div>
           <div>  <img src={img8} /> </div>
           <div>  <img src={img9} /> </div>
           <div>  <img src={img10} /> </div>
           <div>  <img src={img11} /> </div>
           <div>  <img src={img12} /> </div>


        </div>
        </div>

    );
}

export default Stacks; 