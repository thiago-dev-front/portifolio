import Badge from "./Badge";


function CardProject({ title, link, logoHeading, logoGit, text, technologies }) {
    return (
        <>
            <a href={link} target="_blank" className="flex-1" rel="noreferrer">
                <div className="bg-white min-w-[50%] min-h-[120px]  p-4 rounded-lg space-y-3">
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center gap-3'>
                            {logoHeading}
                            <span className="font-medium">{title}</span>
                        </div>
                        <div>
                            {logoGit}
                        </div>
                    </div>
                    <div >
                        <p> {text}</p>
                    </div>
                    <div className='flex items-center gap-3'>
                        {technologies.map((tech, index) => (
                            <Badge key={index} text={tech} />
                        ))}
                    </div>
                </div>
            </a>
        </>
    )

}

export default CardProject