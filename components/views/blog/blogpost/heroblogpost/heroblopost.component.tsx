const HeroBlogPost = () =>{
  return(
    <>
    <div className="text-white">
      <div className="">
        <div className="justify-center items-center mx-16 hidden sm:block">
          <img className="bg-cover" src="/blog/blogpost/cabeceraBlog.webp" data-aos="fade-down" alt="cabecera-tarjetas" title="cabecera-tarjetas"  />
        </div>

        <div className="flex justify-center items-center sm:hidden">
          <img className="" src="/blog/blogpost/cabeceramovil.webp" alt="cabecera-tarjetas" title="cabecera-tarjetas" />
        </div>

        <div className="flex flex-col justify-center items-center text-center gap-2 mt-8 sm:mt-0 sm:gap-4">
          <div className="">
            <h2 className="font-PlayfairDisplay not-italic font-bold text-lg sm:text-6xl" data-aos="fade-down">Nuestro blog</h2>
          </div>

          <div data-aos="fade-down">
            <p className="text-[#47AF83] font-PlayfairDisplay not-italic font-bold leading-10 text-sm sm:text-3xl"
            >
              ¡Bienvenidos al blog de juroc!
            </p>
          </div>

          <div className="sm:w-7/12 lg:w-4/12" data-aos="fade-down">
            <p className="font-manrope not-italic font-medium leading-4 sm:leading-6 text-xs mx-4 sm:mx-0 sm:text-xl" data-aos="fade-down">
              En este blog, encontrarás información valiosa, consejos prácticos
              y las últimas novedades relacionadas con la prevención,
              detección y extinción de incendios.
            </p>
          </div>
        </div>

        <div className="flex justify-center sm:hidden mt-8" data-aos="fade-right">
          <button className="group relative rounded-md bg-[#495098] w-auto h-10  sm:h-16 sm:w-auto px-2 
             overflow-hidden font-PlayfairDisplay font-bold not-italic text-base sm:text-2xl sm:font-bold 
             shadow-[0px_4px_20px_0px_#47AF83] hover:scale-125 transform transition" >
            Agenda una cita
          </button>
        </div>
      </div>
    </div>
    </>
  )
}
export default HeroBlogPost