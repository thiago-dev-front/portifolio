import perfil from "../assets/avatar.jpeg"
function Banner() {
  return (
    <div className="flex flex-col-reverse md:flex-row justify-between px-5 my-16 md:my-28" >
      <div className="mt-4 md:mt-0">
        <h1 className="text-heading font-bold text-[32px] md:text-[58px]"> Olá 👋, <br className="hidden md:block" />
          meu nome é <br className="hidden md:block" />
          Thiago <br className="hidden md:block" />
          Eu ❤️ codar </h1>
      </div>
      <div className="  bg-gradient-to-r from-[#E70FAA] to-[#00C0FD] rounded-full ">
        <div className="  p-1 rounded-full">
          <img src={perfil} alt="Thiago" className="rounded-full md:max-w-[349px] " />
        </div>
      </div>
    </div>

  );
}

export default Banner;