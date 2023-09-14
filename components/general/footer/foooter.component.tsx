// import { IoLocationOutline } from 'react-icons/io5'
// import { FiPhone } from 'react-icons/fi'
// import { FiMail } from 'react-icons/fi'
import Link from 'next/link'

export default function Footer() {
  return (
    <>
      <footer>
        <div className="">
          <div className="text-white mt-8 bg-[url('/img/footer.webp')] bg-cover bg-no-repeat pb-8">
            <div className="pt-60 sm:pt-24 lg:pt-28 flex flex-col justify-center items-center sm:items-start sm:flex-row  sm:justify-around gap-8 sm:mx-8 ">
              <div className="flex flex-col items-center justify-center gap-3">
                <div>
                  <Link title="inicio" href="/">
                    <img
                      className="bg-cover cursor-pointer  w-36 h-12 sm:w-60 sm:h-20 lg:-ml-11"
                      src="/img/logo_juroc.webp"
                      alt="logo-juroc"
                      title="logo-juroc"
                    />
                  </Link>
                </div>
                <div className="flex flex-col justify-center align-baseline">
                  <div className="flex flex-col sm:pl-8 sm:gap-2 gap-2">
                    <h2 className="font-PlayfairDisplay not-italic text-center sm:text-start font-bold sm:font-semibold sm:leading-9 text-base sm:text-2xl">
                      Sobre nosotros
                    </h2>
                    <p className="font-manrope not-italic text-center sm:text-start font-normal sm:font-medium leading-normal sm:leading-5 text-xs sm:text-base">
                      Somos una empresa con un personal
                      <br /> profesional calificado que cuenta con
                      <br /> una trayectoria de 20 años en el mercado.
                    </p>
                  </div>

                  <div className="mt-8 pb-8 lg:mt-4 sm:pl-8">
                    <a
                      title="tratamiento-de-datoss"
                      className="cursor-pointer font-PlayfairDisplay text-lg"
                      target="_blank"
                      href="/Política de tratamiento de datos - JUROC (ok).pdf"
                    >
                      Politicas de tratamiento de datos
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center sm:mt-4 gap-6">
                <div className="sm:items-center">
                  <p className="text-center font-PlayfairDisplay not-italic font-bold text-sm sm:text-xl ">
                    Contacto
                  </p>
                  <hr className="w-full border-2" />
                </div>
                <div className="flex gap-2">
                  <img
                    className="pr-2 sm:w-7"
                    src="/img/🦆 icon _location_.svg"
                    alt="icono-ubicacion"
                    title="icono-ubicacion"
                  />
                  <p className="font-manrope not-italic font-semibold leading-normal sm:text-base">
                    Carrera 66A#6-142
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <img
                    className="pr-2 sm:w-7 "
                    src="/img/🦆 icon _call_.svg"
                    alt="icono-contacto"
                    title="icono-contacto"
                  />
                  <p className="font-manrope text-center not-italic font-semibold leading-normal sm:text-base">
                    +57 3158570480
                    <br />
                    3155217146
                  </p>
                </div>
                <div className="flex gap-2">
                  <img
                    className="pr-2 sm:w-8"
                    src="/img/🦆 icon _sms_.svg"
                    alt="icono-correo"
                    title="icono-correo"
                  />
                  <p className="font-manrope not-italic font-semibold leading-normal sm:text-base ">
                    Info@juroc.co
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:mt-4 items-center  gap-4">
                <div>
                  <p className="text-center font-PlayfairDisplay not-italic font-bold text-sm sm:text-xl">
                    Navegacion
                  </p>
                  <hr className="w-auto border-2" />
                </div>
                <div className="flex justify-center">
                  <ul
                    className="flex flex-col text-center  font-manrope not-italic font-semibold leading-normal text-xs
            sm:text-base gap-10 sm:gap-3"
                  >
                    <li className="hover:underline">
                      <Link title="inicio" href="/">
                        <a title="inicio">Inicio</a>
                      </Link>
                    </li>
                    <li className="hover:underline">
                      <Link title="servicios" href="/servicespage/ingenieria">
                        <a title="servicios">Servicios</a>
                      </Link>
                    </li>
                    <li className="hover:underline">
                      <Link title="productos" href="/productscontentpage/industrial">
                        <a title="productos">Productos</a>
                      </Link>
                    </li>
                    <li className="hover:underline">
                      <Link title="blog" href="/blogpostpage">
                        <a title="blog">Blog</a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-col sm:mt-4 items-center gap-10 sm:gap-5">
                <div>
                  <p className="font-PlayfairDisplay not-italic leading-normal font-bold text-sm sm:text-xl text-center">
                    Redes sociales
                  </p>
                  <hr className="border-2" />
                </div>
                <div className="flex justify-center items-center  sm:flex sm:flex-col gap-12 sm:gap-4">
                  <div>
                    <a
                      title="linkedIn"
                      href="https://www.linkedin.com/company/juroc/"
                      target="_blank"
                    >
                      <img
                        className="sm:w-10 sm:h-10"
                        src="/img/🦆 icon _linkedin_.svg"
                        alt="linkedIn"
                        title="LinkedIn"
                      />
                    </a>
                  </div>
                  <div>
                    <a
                      title="facebook"
                      href="https://www.facebook.com/profile.php?id=100092521384972&mibextid=LQQJ4d"
                      target="_blank"
                    >
                      <img
                        className="sm:w-10 sm:h-10"
                        src="/img/footer/icon _facebook_.png"
                        alt="facebook"
                        title="facebook"
                      />
                    </a>
                  </div>
                  <div>
                    <a
                      title="instagram"
                      href="https://instagram.com/juroc.co?igshid=MmIzYWVlNDQ5Yg=="
                      target="_blank"
                    >
                      <img
                        className="sm:w-10 sm:h-10"
                        src="/img/footer/icon _instagran_.png"
                        alt="instagram"
                        title="instagram"
                      />
                    </a>
                  </div>
                  <div>
                    <a
                      title="whatsapp"
                      href="https://api.whatsapp.com/send/?phone=573155217146"
                      target="_blank"
                    >
                      <img
                        className="sm:w-10 sm:h-10 "
                        src="/img/🦆 icon _whatsapp_.svg"
                        alt="contacto-whatsapp"
                        title="contacto-whatsapp"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
