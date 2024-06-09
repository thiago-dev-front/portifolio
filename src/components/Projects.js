import Card from './Card';


function Projects() {
    return (
        <section >
            <div className='text-center space-y-4 mt-32 mx-3 md:mx-0'>
                <h2 className='text-heading font-bold text-5xl' >Projetos</h2>
                <p className='text-secondary text-[32px]'>Alguns projetos que construí até o momento</p>
            </div>

            <div className='mt-20 flex justify-center flex-wrap gap-8 mx-5 md:mx-0'>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </section>

    );
}

export default Projects; 