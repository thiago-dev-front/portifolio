import CardEducation from "../components/CardEducation"
import CardExperience from "../components/CardExperience"

function SobreMim() {
    return (
       
        <section className="mt-20 p-4 md:p-0"> 
            <div>
                <h2 className='text-secondary text-[42px] font-bold mb-6'>About Me</h2>
                <p className='text-[18px] font-normal text-white max-w-[708px]'>The Generator App is an online tool that helps you to export ready-made templates ready to work as your future website. It helps you to combine slides, panels and other components and export it as a set of static files: HTML/CSS/JS.</p>
            </div>
            <div className="my-6">
                <h2 className='text-secondary text-[42px] font-bold '>Work Experience</h2>
                <CardExperience/>

            </div>
            <div>
                <h2 className='text-secondary text-[42px] font-bold'>Education</h2>
                <CardEducation/>

            </div>
        </section>
    )
}
export default SobreMim