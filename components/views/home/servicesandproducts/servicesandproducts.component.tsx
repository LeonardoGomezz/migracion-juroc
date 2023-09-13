import Link from 'next/link'

const ServiceAndProducts = () => {
  return (
    <>
      <div className="text-white text-center mt-20 sm:mt-40 flex flex-col items-center">
        <div className="mx-1">
          <h2
            className="font-PlayfairDisplay text-center not-italic leading-7 font-semibold text-3xl sm:text-6xl"
            data-aos="fade-down"
          >
            Servicios y productos principales
          </h2>
        </div>

        <div className="my-2 mx-3">
          <h3
            className="font-manrope text-center not-italic font-medium leading-4 sm:leading-9 text-xs sm:text-3xl"
            data-aos="fade-down"
          >
            Servicios y productos avalados y certificados por entidades
          </h3>
        </div>

        <div className="grid gap-4 mt-4 grid-cols-1 sm:grid sm:grid-cols-2 mx-4">
          <div
            className="bg-neutral-700 bg-opacity-50 shadow-[0px_10px_20px_0px_#495098] brightness-75  
  border-4 hover:bg-transparent hover:duration-500 hover:filter-none  border-indigo-800 rounded-[20px]"
          >
            <Link title="productos" href="/productos/industrial#products">
              <div className="flex justify-center relative">
                <img
                  className="bg-cover w-[144.07px] h-[308.96px]"
                  src="/img/home/ServicesAndProducts/EXTINTOR.webp"
                  alt="extintores"
                  title="extintores"
                />
                <div className=" w-auto absolute bottom-4">
                  <h3 className="font-PlayfairDisplay px-8 not-italic font-semibold leading-4 sm:leading-8 text-base sm:text-2xl">
                    Venta y recarga
                    <br /> de extintores
                  </h3>
                </div>
              </div>
            </Link>
          </div>

          <div
            className="bg-neutral-700 bg-opacity-50  shadow-[0px_10px_20px_0px_#495098] brightness-75  
  border-4 hover:duration-500 hover:bg-transparent hover:filter-none  border-indigo-800 rounded-[20px] "
          >
            <Link title="servicios" href="#">
              <div className="flex justify-center relative  bottom-10">
                <img
                  className="bg-cover w-[244.36px] h-[308.96px]  flex justify-center"
                  src="/img/home/ServicesAndProducts/maquina -01 1.webp"
                  alt="redes-hidraulicas"
                  title="redes-hidraulicas"
                />
                <div className=" w-auto absolute bottom-[-5px] sm:bottom-[-30px]">
                  <h3 className=" font-PlayfairDisplay px-8 not-italic font-semibold leading-4 sm:leading-8 text-base sm:text-2xl">
                    Instalación de redes hidráulicas
                  </h3>
                </div>
              </div>
            </Link>
          </div>

          <div
            className="bg-neutral-700 bg-opacity-50 shadow-[0px_10px_20px_0px_#495098] brightness-75
   border-4 hover:duration-500 hover:bg-transparent hover:filter-none  border-indigo-800 rounded-[20px]"
          >
            <Link title="productos" href="#">
              <div className="flex justify-center relative py-12 sm:top-[-37px]">
                <img
                  className="bg-cover w-[200.36px] h-[259.33px]  flex justify-center"
                  src="/img/home/ServicesAndProducts/Group 51.webp"
                  alt="equipos-seguridad"
                  title="equipos-seguridad"
                />
                <div className=" w-auto absolute bottom-3 sm:bottom-[-27px] ">
                  <h3 className="font-PlayfairDisplay not-italic font-semibold leading-4 sm:leading-8 text-base sm:text-2xl ">
                    Equipos de
                    <br />
                    seguridad industrial
                  </h3>
                </div>
              </div>
            </Link>
          </div>

          <div
            className="bg-neutral-700 bg-opacity-50 shadow-[0px_10px_20px_0px_#495098] brightness-75 border-4  
  hover:duration-500 hover:bg-transparent hover:filter-none border-indigo-800 rounded-[20px]  "
          >
            <Link title="servicios" href="#">
              <div className="flex justify-center relative py-12 sm:bottom-4">
                <img
                  className="bg-cover w-[221.36px] h-[259.33px]  flex justify-center"
                  src="/img/home/ServicesAndProducts/gabiente.webp"
                  alt="gabinete-hidraulicas"
                  title="gabinete-hidraulicas"
                />
                <div className=" w-auto absolute bottom-3 sm:bottom-[-3px] ">
                  <h3 className="font-PlayfairDisplay not-italic font-semibold leading-4 sm:leading-8 text-base sm:text-2xl">
                    gabinetes de
                    <br />
                    redes hidraulicas
                  </h3>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
export default ServiceAndProducts
