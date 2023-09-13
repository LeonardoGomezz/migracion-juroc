import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Link from "next/link";
import { ProductsTarjets } from "../../../../DataInfo/data.component";

const HeroProducts = () => {
  const { query, asPath } = useRouter();
  const { productscontent } = query;
  const [service, setSetvice] = useState("");

  useEffect(() => {
    setSetvice(productscontent as string);
  }, [asPath]);

  const tarjetFilter = ProductsTarjets.filter(
    (tarjets) => service === tarjets.categorie
  );
  // console.log(tarjetFilter)

  return (
    <>
      <div>
        <div className="flex flex-col items-center justify-center gap-8">
          <div data-aos="fade-down">
            <img
              className="hidden sm:block"
              src={
                service == "bomberil"
                  ? "/productos/bomberil/HeroBomberil.webp"
                  : "/productos/industrial/HeroIndustrial.webp"
              }
              alt={`Hero de ${service}`}
              title={`Hero de ${service}`}
            />
            <img
              className="sm:hidden block mt-8"
              src={
                service == "bomberil"
                  ? "/productos/bomberil/Cabecera-Bomberil-Movil.webp"
                  : "/productos/industrial/Cabecera-Industrial-Movil.webp"
              }
              alt={`Hero de ${service}`}
              title={`Hero de ${service}`}
            />
          </div>
          <div data-aos="fade-down">
            <h1 className="text-center font-PlayfairDisplay not-italic lg:leading-[95px] lg:text-7xl font-bold text-2xl sm:text-4xl leading-8">
              Productos de linea {productscontent}
            </h1>

            <p className="text-center font-PlayfairDisplay not-italic lg:leading-10 lg:font-bold lg:text-4xl text-lg  sm:text-2xl font-semibold leading-6">
              Conoce nuestros productos de linea {productscontent}
            </p>
          </div>

          <button
            data-aos="fade-down"
            className="mt-8 group relative rounded-md bg-[#495098] w-auto h-12  sm:h-16 sm:w-auto  px-8 py-4 
            overflow-hidden font-PlayfairDisplay font-bold not-italic text-xl sm:text-2xl sm:font-bold 
            shadow-[0px_4px_20px_0px_#47AF83] hover:scale-125 transform transition"
          >
            <Link
              title="asesoria"
              className="px-4 sm:px-8"
              href="/#AgendaInicio"
            >
              Agenda una asesoría
            </Link>
          </button>

          <div>
            <h2
              data-aos="fade-down"
              className="text-start mb-4 ml-8 not-italic font-manrope text-base sm:text-2xl font-semibold leading-4 sm:leading-8"
            >
              Sobre nuestro servicio
            </h2>

            <div className="mx-5 sm:mx-8" id="products">
              {tarjetFilter.map((item) => (
                <div key={item.categorie}>
                  <div
                    className="w-full px-4 lg:px-8 py-8 lg:w-fit rounded-3xl shadow-[0px_4px_20px_0px_#5EC398] border-4 sm:border-8 border-emerald-400 
       flex flex-col-reverse lg:flex-row lg:justify-between items-center gap-8"
                    key={item.content.tarjetTitle}
                  >
                    <div className="flex flex-col items-center lg:items-start lg:w-1/2">
                      <div className="w-full sm:w-[500px] lg:w-96">
                        <h2 className="font-PlayfairDisplay not-italic font-bold sm:leading-9 text-xl sm:text-3xl text-center lg:text-start">
                          {item.content.tarjetTitle}
                        </h2>
                      </div>

                      <div className="bg-gradient-to-r from-indigo-800 to-emerald-400  my-5 w-48 sm:w-96  h-1 lg:h-2" />

                      <div className="w-full lg:w-96">
                        <p className="font-manrope not-italic sm:font-normal sm:leading-7 text-base sm:text-xl text-center lg:text-start">
                          {item.content.text}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center lg:mr-8">
                      <img
                        className="bg-cover"
                        src={item.content.img}
                        alt={item.content.alt}
                        title={item.content.title}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default HeroProducts;
