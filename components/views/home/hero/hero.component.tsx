const HeroComponent = () => {
  return (
    <>
      <div className="w-full text-white text-center lg:text-start z-10 ">
        <div className="w-full flex flex-col-reverse lg:flex lg:flex-row">
          <div className="lg:w-[50%] flex flex-col items-center">
            <p
              className="font-PlayfairDisplay not-italic font-bold  lg:leading-none  leading-5 text-lg sm:text-3xl lg:text-5xl flex mx-auto 
              drop-shadow-[0px_3px_1px_rgba(0,0,0,0.95)] sm:drop-shadow-[0px_5px_1px_rgba(0,0,0,0.95)] w-[237px] h-[80px] sm:w-[537px] sm:h-[140px] 
              lg:w-[550px] lg:h-[230px] xl:w-[722px] xl:h-[300px] lg:pt-16 lg:pl-20 xl:pl-64"
              data-aos="fade-right"
            >
              Juroc es el respaldo que necesitas para la protección contra
              incendios y seguridad industrial.
            </p>
            <div className="lg:w-[722px]">
              <p
                className="font-manrope not-italic lg:font-medium leading-4 sm:leading-8 text-xs font-semibold sm:text-2xl lg:w-[500px] xl:w-[570px] 
                pt-4 lg:pt-40 xl:pt-20 lg:pl-48 xl:pl-64"
                data-aos="fade-right"
              >
                En Juroc protegemos tu vida y tus propiedades.
              </p>
              <img
                className=" sm:mt-[-39px] sm:ml-[659px] lg:ml-[380px] xl:ml-[460px] lg:mt-[-38px] w-[20px] h-[20px]  sm:w-[42px] sm:h-[40px]"
                src="/home/hero/fuego.webp"
                alt="fuego"
                title="fire-icon"
              />
            </div>

            <button
              className="lg:ml-[-130px] xl:ml-[6px] lg:mt-[41px] sm:mt-6 rounded-md bg-[#495098] w-auto h-10  sm:h-16 sm:w-auto px-2 
              overflow-hidden font-PlayfairDisplay font-bold not-italic text-base sm:text-2xl sm:font-bold 
              shadow-[0px_4px_20px_0px_#47AF83] hover:scale-125 transform transition"
            >
              <a title="agendar-cita" className="mx-4" href="#">
                Agenda una cita
              </a>
            </button>
          </div>

          <div className="lg:w-[50%]">
            <img
              className="bg-cover w-full lg:w-[641px] lg:h-[640px] xl:w-[741px] xl:h-[740px] lg:mt-[-55px] xl:mt-[-64px]"
              src="/home/hero/Home-Hero.webp"
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
