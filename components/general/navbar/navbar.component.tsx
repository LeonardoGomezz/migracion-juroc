import Link from 'next/link'
import { useState } from 'react'
import { AiOutlineMenu} from 'react-icons/ai'
import { AiOutlineClose } from 'react-icons/ai'
import menu from '../../../pages/api/menu.json'

function DropdownMenu({ item }) {
  return (
    <div className="relative group">
      <a href={item.ruta} className="group">
        {item.title}
      </a>
      {item.submenu.length > 0 && (
        <ul className="hidden absolute left-0 mt-2 space-y-2 bg-black bg-opacity-50 text-white group-hover:block">
          {item.submenu.map((subitem, subindex) => (
            <li key={subindex}>
              {subitem.submenu.length > 0 ? (
                <SubDropdownMenu subitem={subitem} />
              ) : (
                <Link href={subitem.ruta}>
                  <a className="block px-4 py-2 hover:bg-gray-200">{subitem.title}</a>
                </Link>
              )}
              <hr />
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
function SubDropdownMenu({ subitem }) {
  return (
    <div className="relative group">
      <a href={subitem.ruta} className="group">
        {subitem.title}
      </a>
      {subitem.submenu.length > 0 && (
        <ul className="hidden absolute left-full top-0 mt-0 ml-4 space-y-2  bg-black bg-opacity-50 text-white group-hover:block">
          {subitem.submenu.map((subsubmenu, subsubindex) => (
            <li key={subsubindex}>
              <Link href={subsubmenu.ruta}>
                <a className="block px-4 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100">{subsubmenu.title}</a>
              </Link>
              <hr />
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

const Navbar = () => {
  const [navbar, setNavbar] = useState(false)
  
  return (
    <div>
      <div className="flex w-full xl:w-full bg-gradient-to-b from-[#47AF83] via-rgba(71, 175, 131, 0.00) to-rgba(71, 175, 131, 0.00) lg:w-[1920px] lg:h-[100px]">
        <h1 className="w-[90%] text-white text-[15px] font-semibold mx-auto pt-8 pb-10  lg:text-2xl lg:w-[1028px] lg:h-[32px]">En Juroc trabajamos con Productos, Equipos Certificados UL, Aprobados FM y Nacionales.</h1>
      </div>
      <nav className="w-full top-0 left-0 right-0 z-10 bg-gradient-to-b from-[rgba(73,80,152,0.50)] via-transparent to-[rgba(71,175,131,0.14)] lg:h-[100px]">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              {/* LOGO */}
              <Link href="#">
                <img className='w-[135px]' src="/img/logo_juroc.png" alt="" />
              </Link>
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden">
                <button
                  className="p-2"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <AiOutlineClose
                      onClick={() => setNavbar(!navbar)}
                      className="text-white tex
                  t-2xl"
                    />
  
                  ) : (
                    <AiOutlineMenu
                      onClick={() => setNavbar(!navbar)}
                      className="text-white text-2xl"
                    />

                  )}                  
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? 'p-12 md:p-0 block' : 'hidden'
              }`}
            >
              <ul className="h-screen md:h-auto items-center justify-center md:flex ">
                {menu.map((item, index) => (
                  <li key={index} className="text-white font-semibold lg:text-2xl    pb-6 text-xl py-2 md:px-6 text-center border-b-2 md:border-b-0 focus:underline hover:underline">
                    {item.submenu.length > 0 ? (
                      <DropdownMenu item={item} />
                    ): (
                      <Link href="/" onClick={() => setNavbar(!navbar)}>
                        <a>{item.title}</a>
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar