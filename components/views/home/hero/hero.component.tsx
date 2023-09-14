

const HeroComponent = () => {
  return (
    <>
      <div className="w-full text-white text-center lg:text-start z-10">
        <div className="flex flex-col-reverse items-center  lg:grid lg:grid-cols-2">
          <div className="lg:mt-10 lg:ml-52">
            <div className=" ">
              <p
                className="font-PlayfairDisplay not-italic font-bold  lg:leading-none  leading-5 text-lg sm:text-3xl lg:text-5xl 
      drop-shadow-[0px_3px_1px_rgba(0,0,0,0.95)] sm:drop-shadow-[0px_5px_1px_rgba(0,0,0,0.95)] mx-14 lg:mx-0"
                data-aos="fade-right"
              >
                Juroc es el respaldo que necesitas para la protección contra
                incendios y seguridad industrial.
              </p>
            </div>

            <div className="my-4 flex justify-center   lg:justify-start lg:my-8 ">
              <div className="">
                <p
                  className="flex font-manrope not-italic lg:font-medium leading-4 sm:leading-8 text-xs font-semibold sm:text-2xl relative"
                  data-aos="fade-right"
                >
                  En Juroc protegemos tu vida
                  <br />
                  y tus propiedades.
                  <img
                    className=" w-7 h-7 sm:w-11 sm:h-10 absolute top-3 left-[135px] sm:top-7 sm:left-72 lg:top-7 lg:left-52"
                    src="/img/home/hero/fuego.webp"
                    alt="fuego"
                    title="fire-icon"
                  />
                </p>
              </div>
            </div>

            <div data-aos="fade-right">
              <button
                className="group relative rounded-md bg-[#495098] w-auto h-10  sm:h-16 sm:w-auto px-2 
       overflow-hidden font-PlayfairDisplay font-bold not-italic text-base sm:text-2xl sm:font-bold 
       shadow-[0px_4px_20px_0px_#47AF83] hover:scale-125 transform transition"
              >
                <a title="agendar-cita" className="mx-4" href="#AgendaInicio">
                  Agenda una cita
                </a>
              </button>
            </div>
          </div>

          <div className="lg:mr-28 sm:mt-1 mt-4 lg:mt-11 z-20">
            <img
              className="bg-cover "
              src="/img/home/hero/Home-Hero.webp"
              alt="cabecera-inicio"
              title="cabecera-inicio"
              data-aos="fade-down"
            />
          </div>
        </div>
      </div>
    </>
  )
}
export default HeroComponent
