import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { ServicesTarjets } from '../../../../DataInfo/data.component'
import Link from 'next/link'

const HeroServices = () => {
  const { query, asPath } = useRouter()
  const { servicescontent } = query
  const [service, setSetvice] = useState('')

  // console.log('rutas dinamicas =>', typeof(id))

  useEffect(() => {
    setSetvice(servicescontent as string)
  }, [asPath, servicescontent])

  return (
    <>
      <div className="flex flex-col justify-center items-center mx-8 text-center">
        <img
          data-aos="fade-down"
          className="bg-cover w-[600px] h-[500px] sm:w-[1000px] sm:h-[550px] hidden sm:block"
          src="/servicios/ingenieria/Cabecera-Ingenieria.webp"
          alt="cabecera-ingenieria"
          title="portada ingenieria"
        />
        <img
          data-aos="fade-down"
          className="block sm:hidden"
          src="/servicios/ingenieria/Cabecera-Ingenieria-Movil.webp"
          alt="cabecera-ingenieria-movil"
          title="portada ingenieria"
        />
        <h2
          data-aos="fade-down"
          className=" font-PlayfairDisplay not-italic text-3xl sm:text-5xl lg:text-7xl leading-10 sm:leading-[50px] lg:leading-[90px] font-bold"
        >
          Diseño e instalacion de redes contra incendios
        </h2>

        <h2
          data-aos="fade-down"
          className="mt-11 font-PlayfairDisplay not-italic font-semibold lg:font-bold lg:leading-10 text-2xl sm:text-4xl"
        >
          Conoce nuestros servicios de la linea hidraulica
        </h2>

        <button
          data-aos="fade-down"
          className="mt-8 group relative rounded-md bg-[#495098] w-auto h-12  sm:h-16 sm:w-auto  px-8 py-4 
             overflow-hidden font-PlayfairDisplay font-bold not-italic text-xl sm:text-2xl sm:font-bold 
             shadow-[0px_4px_20px_0px_#47AF83] hover:scale-125 transform transition"
        >
          <Link className="px-4 sm:px-8" title="agendar-cita" href="#">
            Agenda una cita
          </Link>
        </button>

        <div className="mt-20 lg:mt-36">
          <h2
            data-aos="fade-down"
            className="text-start mb-4 ml-4 not-italic font-manrope text-lg sm:text-2xl font-semibold leading-4 sm:leading-8"
          >
            Sobre nuestro servicio
          </h2>

          <div id="servicios">
            {service === 'ingenieria'
              ? ServicesTarjets.map((item) => (
                <div key={item.categorie}>
                  {item.content.map((tarjetItem) => (
                    <div
                      className="w-full px-4 lg:px-8 py-8 lg:w-fit rounded-3xl shadow-[0px_4px_20px_0px_#5EC398] border-4 sm:border-8 border-emerald-400 
                  flex flex-col-reverse lg:flex-row lg:justify-between items-center gap-8"
                      key={tarjetItem.tarjetTitle}
                    >
                      <div className="flex flex-col items-center lg:items-start lg:w-1/2">
                        <div className="w-full sm:w-[500px] lg:w-96">
                          <h2 className="font-PlayfairDisplay not-italic sm:font-bold sm:leading-9 text-xl sm:text-3xl text-center lg:text-start">
                            {tarjetItem.tarjetTitle}
                          </h2>
                        </div>

                        <div className="bg-gradient-to-r from-indigo-800 to-emerald-400  my-5 w-48 sm:w-96  h-1 lg:h-2" />

                        <div className="w-full lg:w-96">
                          <p className="font-manrope not-italic sm:font-normal sm:leading-7 text-base sm:text-xl text-center lg:text-start">
                            {tarjetItem.text}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center lg:mr-8">
                        <img
                          className="bg-cover"
                          src={tarjetItem.img}
                          alt={tarjetItem.alt}
                          title={tarjetItem.title}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              ))
              : ''}
          </div>
        </div>
      </div>
    </>
  )
}
export default HeroServices
