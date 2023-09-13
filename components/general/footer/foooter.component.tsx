import { IoLocationOutline } from 'react-icons/io5'
import { FiPhone } from 'react-icons/fi'
import { FiMail } from 'react-icons/fi'
import Link from 'next/link'

export default function Footer() {
  return (
    <>
      <footer>
        <div className="lg:flex xl:flex lg:justify-around mt-8 w-full">

          <div className=" mb-8  mx-auto lg:mx-0 ">
            <div className="flex justify-center items-center">
              <Link href="/" title='inicio'>
                <img
                  className="w-[50%] lg:w-[235px] lg:h-[84px] cursor-pointer"
                  src="/img/logo_juroc.webp"
                  alt="logo-juroc"
                  title="logo juroc"
                />
              </Link>
            </div>
            <div className="text-center lg:text-start lg:pl-10">
              <h1 className="font-PlayfairDisplay not-italic text-white font-semibold mb-3  lg:h-[36px] text-2xl">
                Sobre nosotros
              </h1>
              <p className="font-manrope not-italic h-[48px] mx-auto text-white font-medium lg:mx-0 lg:text-base  lg:h-[84px]">
                Somos una empresa con un personal profesional calificado que
                cuenta con una trayectoria de 20 años en el mercado.
              </p>
              <a title='tratamiento-de-datoss' className="cursor-pointer font-PlayfairDisplay text-white text-lg" target="_blank" href="/Política de tratamiento de datos - JUROC (ok).pdf">
                Politicas de tratamiento de datos
              </a>
            </div>
          </div>

          <div className="mx-auto mb-10 lg:mx-0 ">
            <div>
              <h1 className="text-white text-center font-PlayfairDisplay font-semibold text-3xl">
                Contacto
              </h1>
              <hr className="flex mx-auto bg-white w-20 lg:w-40" />
            </div>
            <div className="">
              <div className="flex justify-center items-center lg:justify-start lg:items-start pt-9">
                <IoLocationOutline className="text-white mr-6 lg:w-[27px] lg:h-[30px]" />
                <p className="text-white lg:text-2xl font-manrope">Cra 66A #6-142</p>
              </div>
              <div className=" flex justify-center items-center lg:justify-start lg:items-start pt-8 ">
                <FiPhone className="text-white mr-6 mt-4 lg:w-[27px] lg:h-[30px]" />
                <p className="w-[120px] text-white lg:text-xl lg:w-[324px] font-manrope">
                  315 8570480 <br/> 315 521 7146
                </p>
              </div>
              <div className="flex justify-center items-center lg:justify-start lg:items-start pt-8">
                <FiMail className="text-white mr-6 lg:w-[27px] lg:h-[30px]" />
                <p className="text-white lg:text-2xl font-manrope">Info@juroc.co</p>
              </div>
            </div>
          </div>

          <div className="mx-auto lg:mx-0 lg:ml-0">
            <div className="mb-9">
              <h1 className="text-white text-center font-semibold text-3xl font-PlayfairDisplay">
                Navegación
              </h1>
              <hr className="flex mx-auto bg-white w-40 lg:w-44" />
            </div>
            <div className="flex justify-center items-center">
              <ul className="text-center">
                <li className="text-white font-semibold text-2xl focus:underline hover:underline font-manrope">
                  <Link href="/">
                    Inicio
                  </Link>
                </li>
                <li className="text-white font-semibold text-2xl pt-4 focus:underline hover:underline font-manrope">
                  <Link href="/servicespage/ingenieria">Servicio</Link>
                </li>
                <li className="text-white font-semibold text-2xl pt-4 focus:underline hover:underline font-manrope">
                  <Link href="/productscontentpage/industrial">Productos</Link>
                </li>
                <li className="text-white font-semibold text-2xl pt-4 focus:underline hover:underline font-manrope">
                  <Link href="/blogpostpage">Blog</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="w-full mt-10 lg:mt-0">
            <div>
              <h1 className="text-center text-white font-semibold text-3xl font-PlayfairDisplay">
                Redes sociales
              </h1>
              <hr className="flex mx-auto bg-white  w-48 lg:w-52" />
            </div>
            <div className="flex justify-center gap-16 pt-7 lg:block lg:pt-5">
              <a
                title="linkedIn"
                href="https://www.linkedin.com/company/juroc/"
                target="_blank"
              >
                <img
                  className="flex mx-auto mb-5"
                  src="/img/footer/icon _linkedin_.png"
                  alt="Linkedin"
                  title="Linkedin"
                />
              </a>
              <a
                title="instagram"
                href="https://instagram.com/juroc.co?igshid=MmIzYWVlNDQ5Yg=="
                target="_blank"
              >
                <img
                  className="flex mx-auto mb-5"
                  src="/img/footer/icon _instagran_.png"
                  alt="instagram"
                  title="instagram"
                />
              </a>
              <a
                title="facebook"
                href="https://www.facebook.com/profile.php?id=100092521384972&mibextid=LQQJ4d"
                target="_blank"
              >
                <img
                  className="flex mx-auto mb-5"
                  src="/img/footer/icon _facebook_.png"
                  alt="facebook"
                  title="facebook"
                />
              </a>
              <a
                title="whatsapp"
                href="https://api.whatsapp.com/send/?phone=573155217146"
                target="_blank"
              >
                <img
                  className="flex mx-auto mb-5"
                  src="/img/footer/icon _whatsapp_.png"
                  alt="whatsapp"
                  title="whatsapp"
                />
              </a>
            </div>
          </div>
          
        </div>
      </footer>
    </>
  )
}
