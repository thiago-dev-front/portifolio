import icone1 from '../assets/icone1.png'
import icone3 from '../assets/icone3.png'

function CardEducation() {
    return (
        <div>
         <div className="flex items-center justify-between max-w-[704px] my-3">
                <div>
                    <h3 className="text-white text-[20px] font-medium">Bachelor in Electronics & Communication</h3>
                </div>
                <div className="w-[84px] h-[24px] bg-[#D7FFE0] flex items-center justify-center rounded-[100px]">
                    <strong className="text-[#018C0F] font-semibold text-xs">Full Time</strong>
                </div>
            </div>
            <div className='flex items-center justify-between max-w-[704px]'>
                    <div className='flex  items-center gap-2'>
                        <img src={icone1} alt='icone1' />
                        <p className='text-white text-[12px] font-medium' >Bangalore Instutute of Technology</p>
                    </div>
                    <div className="flex  items-center gap-2 ">
                        <img src={icone3} alt='icone3' />
                        <p className='text-white text-[12px] font-normal'>Aug 2015 - Dec 2020</p>
                    </div>

           
                </div>
                <hr className='max-w-[704px] mt-4' />
        </div>

    )
}
export default CardEducation