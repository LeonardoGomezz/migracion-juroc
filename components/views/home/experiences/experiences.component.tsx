const Experiences = () => {
  return (
    <>
      <div className="text-white mt-16 lg:mt-24 flex-col flex items-center">
        <h2
          className="mx-2 text-center font-PlayfairDisplay text-3xl sm:text-5xl leading-8 lg:text-6xl not-italic font-bold lg:font-semibold"
          data-aos="fade-down"
        >
          Nuestra experiencia en el mercado
        </h2>

        <div className="mx-8 mt-16">
          <div
            className="w-full px-4 lg:px-8 py-8 lg:w-fit rounded-3xl shadow-[0px_4px_20px_0px_#5EC398] border-4 sm:border-8 border-emerald-400 
            flex flex-col-reverse lg:flex-row lg:justify-between items-center gap-8"
          >
            <div className="flex flex-col items-center lg:items-start lg:w-1/2">
              <div className="w-full lg:w-96">
                <h2 className="font-PlayfairDisplay not-italic sm:font-bold sm:leading-9 sm:text-3xl text-center lg:text-start">
                  Seguridad industrial
                  <br /> con sentido
                </h2>
              </div>

              <div className="bg-gradient-to-r from-indigo-800 to-emerald-400 my-5 w-1/4 lg:w-48 h-1 lg:h-2" />

              <div className="w-full lg:w-96">
                <p className="font-manrope not-italic sm:font-normal sm:leading-7 text-xs sm:text-xl text-center lg:text-start">
                  Tenemos un equipo de expertos comprometidos con tu bienestar,
                  capaces, entusiastas y disciplinados que pueden apoyarte en
                  tener toda tu línea de seguridad industrial, redes contra
                  incendio, extintores, señalización, redes hidráulicas,
                  dotaciones para el cuidado personal, planes de emergencia,
                  planes de evacuación, sistemas de gestión en la seguridad y
                  salud en el trabajo y mucho más.
                </p>
              </div>
            </div>

            <div className="flex items-center lg:mr-8">
              <img
                className="w-32 h-32 sm:w-[200px] sm:h-[200px] lg:w-[400px] lg:h-[400px]  bg-cover"
                src="/img/home/Experiencia.webp"
                alt="años-experiencia"
                title="años-experiencia"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Experiences
