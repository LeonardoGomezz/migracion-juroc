import {IoLocationOutline} from 'react-icons/io5'
import {FiPhone} from 'react-icons/fi'
import {FiMail} from 'react-icons/fi'
import Link from 'next/link'

export default function Footer() {
  return (
    <>
      <footer>
        <div className="lg:flex xl:flex lg:justify-around">
          <div className=" mb-8 w-[90%] mx-auto lg:mx-0 lg:ml-20 lg:w-[320px]">
            <div className='flex justify-center items-center'>
              <img className='w-[50%] lg:w-[235px] lg:h-[84px]' src="/img/logo_juroc.png" alt="" />
            </div>
            <div className="text-center lg:text-start lg:pl-10">
              <h1 className="text-white font-semibold mb-3 lg:w-[237px] lg:h-[36px] text-2xl">Sobre nosotros</h1>
              <p className="w-full h-[48px] mx-auto text-white font-medium lg:mx-0 lg:text-base lg:w-[311px] lg:h-[84px]">Somos una empresa con un personal profesional calificado que cuenta con una trayectoria de 20 años en el mercado.</p>
            </div>
          </div>
          <div className='mx-auto mb-10 lg:mx-0 lg:ml-20'>
            <div>
              <h1 className='text-white text-center font-semibold text-3xl'>Contacto</h1>
              <hr className="flex mx-auto bg-white w-20 lg:w-40"/>
            </div>
            <div className='lg:ml-10 lg:w-[330px]'>
              <div className="flex justify-center items-center lg:justify-start lg:items-start pt-9">
                <IoLocationOutline className='text-white mr-6 lg:w-[27px] lg:h-[30px]' />
                <p className='text-white lg:text-2xl'>Cra 66A #6-142</p>
              </div>
              <div className=" flex justify-center items-center lg:justify-start lg:items-start pt-8 ">
                <FiPhone className='text-white mr-6 lg:w-[27px] lg:h-[30px]' />
                <p className='w-[120px] text-white lg:text-xl lg:w-[324px]'>315 8570480 - 315 521 7146</p>
              </div>
              <div className="flex justify-center items-center lg:justify-start lg:items-start pt-8">
                <FiMail className='text-white mr-6 lg:w-[27px] lg:h-[30px]'/>
                <p className='text-white lg:text-2xl'>Info@juroc.co</p>
              </div>
            </div>
          </div>
          <div className='w-[90%] mx-auto lg:mx-0 lg:ml-0 lg:w-[265px]'>
            <div className='mb-9'>
              <h1 className='text-white text-center font-semibold text-3xl'>Navegación</h1>
              <hr className="flex mx-auto bg-white w-40 lg:w-44"/>
            </div>
            <div className='flex justify-center items-center'>
              <ul className="">
                <li className="text-white font-semibold text-2xl focus:underline hover:underline">
                  <Link href="/">
                    <a>Inicio</a>
                  </Link>
                </li>
                <li className="text-white font-semibold text-2xl pt-4 focus:underline hover:underline">
                  <Link href="/">
                  Servicio
                  </Link>
                </li>
                <li className="text-white font-semibold text-2xl pt-4 focus:underline hover:underline">
                  <Link href="/">
                  Productos
                  </Link>
                </li>
                <li className="text-white font-semibold text-2xl pt-4 focus:underline hover:underline">
                  <Link href="/">
                  Blog
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className='w-[90%] ml-5 lg:ml-0 mt-10 lg:mt-0 lg:w-[265px]'>
            <div>
              <h1 className='text-center text-white font-semibold text-3xl'>Redes sociales</h1>
              <hr className="flex mx-auto bg-white  w-48 lg:w-52"/>
            </div>
            <div className='flex pt-7 lg:block lg:pt-5'>
              <img className='flex mx-auto mb-5' src="/img/footer/icon _linkedin_.png" alt="" />
              <img className='flex mx-auto mb-5' src="/img/footer/icon _instagran_.png" alt="" />
              <img className='flex mx-auto mb-5' src="/img/footer/icon _facebook_.png" alt="" />
              <img className='flex mx-auto mb-5' src="/img/footer/icon _whatsapp_.png" alt="" />
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
