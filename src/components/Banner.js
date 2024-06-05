import perfil from "../assets/perfil.png"
function Banner() {
    return (
        <div className="flex flex-col-reverse md:flex-row justify-between px-5 my-16 md:my-28" >
           <div className="mt-4 md:mt-0"> 
            <h1 className="text-heading font-bold text-[32px] md:text-[58px]"> Olá 👋, <br className="hidden md:block"/>
            meu nome é <br className="hidden md:block"/>
          Bárbara <br className="hidden md:block"/>
            Eu ❤️ codar </h1>
           </div>
           <div>
            <img src={perfil} />
           </div>
        </div>

    );
}

export default Banner;