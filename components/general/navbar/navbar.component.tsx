import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { AiOutlineMenu } from 'react-icons/ai'
import { AiOutlineClose } from 'react-icons/ai'
// import menu from '../../../pages/api/menu.json'
import {
  productos,
  productosCategorias,
  servicios,
  serviciosCategorias,
  submenu,
} from '../../../DataInfo/data.component'
import styles from './styles.module.css'
import Accordion from './acordeon.component'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  // const [isSubMenuOpen, setIsSubMenuOpen] = useState(Array(submenu.length).fill(false))
  const [isServiciosOpen, setIsServiciosOpen] = useState(
    Array(servicios.length).fill(false)
  )
  const [isSubServiciosOpen, setIsSubServiciosOpen] = useState(
    Array(serviciosCategorias.length).fill(false)
  )
  const [isProductosOpen, setIsProductosOpen] = useState(
    Array(productos.length).fill(false)
  )
  const [isSubProductosOpen, setIsSubProductosOpen] = useState(
    Array(productosCategorias.length).fill(false)
  )
  const [showSubMenu, setShowSubMenu] = useState(styles.productosSubMenu)
  const [showSubMenuServicios, setShowSubMenuServicios] = useState(
    styles.serviciosSubMenu
  )

  const [openAccordionIndex, setOpenAccordionIndex] = useState(null)

  const handleAccordionClick = (index) => {
    setOpenAccordionIndex((prevIndex) => (prevIndex === index ? null : index))
  }

  const toggleSserviciosMenu = (index, submenuType, isOpen) => {
    if (submenuType === 'servicios') {
      const updatedState = [...isServiciosOpen]
      updatedState[index] =
        isOpen !== undefined ? isOpen : !updatedState[index]
      setIsServiciosOpen(updatedState)
    } else if (submenuType === 'serviciosCategorias') {
      const updatedState = [...isSubServiciosOpen]
      updatedState[index] =
        isOpen !== undefined ? isOpen : !updatedState[index]
      setIsSubServiciosOpen(updatedState)
    }
  }

  const toggleProductosMenu = (index, submenuType, isOpen) => {
    if (submenuType === 'productos') {
      const updatedState = [...isProductosOpen]
      updatedState[index] =
        isOpen !== undefined ? isOpen : !updatedState[index]
      setIsProductosOpen(updatedState)
    } else if (submenuType === 'productosCategorias') {
      const updatedState = [...isSubProductosOpen]
      updatedState[index] =
        isOpen !== undefined ? isOpen : !updatedState[index]
      setIsSubProductosOpen(updatedState)
    }
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const router = useRouter()

  const isRouteActive = (pathname) => {
    return router.pathname === pathname
  }

  // const toggleSubmenu = (index) => {
  //   setIsSubMenuOpen(isSubMenuOpen === index ? null : index)
  // }

  const displaySubMenuProductos = (index) => {
    if (index === 1) {
      setShowSubMenu(styles.productosSubMenuActive)
    } else {
      setShowSubMenu(styles.productosSubMenu)
    }
  }

  const displaySubMenuServicios = (index) => {
    if (index === 1) {
      setShowSubMenuServicios(styles.serviciosSubMenuActive)
    } else {
      setShowSubMenuServicios(styles.serviciosSubMenu)
    }
  }

  return (
    <div className="text-white relative z-50">
      <div className="w-full  bg-gradient-to-b from-[#47AF83] via-rgba(71, 175, 131, 0.00) to-rgba(71, 175, 131, 0.00)  lg:h-[100px] hidden sm:block">
        <h1 className=" text-white text-[15px] text-center font-semibold mx-auto pt-8 pb-10  lg:text-2xl  lg:h-[32px] font-manrope">
          En Juroc trabajamos con Productos, Equipos Certificados UL, Aprobados
          FM y Nacionales.
        </h1>
      </div>
      <nav className="w-full top-0 left-0 right-0 z-50 bg-gradient-to-b from-[rgba(73,80,152,0.50)] via-transparent to-[rgba(71,175,131,0.14)] lg:h-[100px]">
        <div className=" sm:flex sm:items-baseline sm:justify-between sm:mx-28 lg:mx-60 sm:h-36 sm:shrink-0 ">
          <div className="flex mx-4 sm:mx-0 justify-between items-center">
            <Link title="inicio" href="/">
              <img
                className="bg-cover cursor-pointer"
                src="/img/logoJuroc.webp"
                alt="logo-juroc"
                title="logo-juroc"
              />
            </Link>

            <div className="sm:hidden">
              {isMenuOpen ? (
                <AiOutlineClose
                  onClick={toggleMenu}
                  className="text-white tex
                t-2xl"
                />
              ) : (
                <AiOutlineMenu
                  onClick={toggleMenu}
                  className="text-white text-2xl"
                />
              )}
            </div>
          </div>

          <ul
            className={`sm:text-2xl  text-xl font-PlayfairDisplay text-center not-italic font-meduim leading-8 sm:flex sm:items-center sm:static 
           w-full left-0 z-[-1] sm:z-auto sm:w-auto sm:py-0 py-4 sm:pl-0 pl-7 sm:opacity-100  top-[-400px] transition-all
           ease-in duration-500 drop-shadow-[0px_3px_1px_rgba(0,0,0,0.95)] sm:drop-shadow-[0px_5px_1px_rgba(0,0,0,0.95)] ${
    isMenuOpen ? 'block' : 'hidden'
    }`}
          >
            <li className="mx-8 sm:mx-4 my-6 sm:my-0 sm:transform sm:transition  sm:hover:scale-125 hover:underline">
              <Link href="/">
                <a
                  title="inicio"
                  className={`${isRouteActive('/') ? 'underline' : ''}`}
                >
                  Inicio
                </a>
              </Link>
            </li>

            <li className="mx-8 sm:mx-4 my-6 sm:my-0 hidden sm:block">
              <div className="flex flex-col sm:flex sm:flex-row gap-8">
                {servicios.map((item, index) => (
                  <div
                    className="relative"
                    key={item.title}
                    onMouseEnter={() =>
                      toggleSserviciosMenu(index, 'servicios', true)
                    }
                    onMouseLeave={() =>
                      toggleSserviciosMenu(index, 'servicios', false)
                    }
                  >
                    <a>{item.title}</a>

                    {isServiciosOpen[index] && (
                      <div className="absolute block ">
                        <div className="flex">
                          <div className="mt-4">
                            {item.content.map((item) => (
                              <div className="flex flex-col" key={item.title}>
                                <div className="bg-opacity-30 bg-black w-32">
                                  <Link title="servicios" href={item.url}>
                                    <a
                                      className="font-PlayfairDisplay text-base font-semibold text-center "
                                      onMouseEnter={() =>
                                        displaySubMenuServicios(item.id)
                                      }
                                    >
                                      {item.title}
                                    </a>
                                  </Link>
                                </div>
                              </div>
                            ))}
                          </div>
                          <div
                            className={showSubMenuServicios + ' mt-[90px] ml-1'}
                          >
                            {serviciosCategorias.map((categoria) => (
                              <div key={categoria.id} className="">
                                <div className="flex flex-col w-36 bg-opacity-25 bg-black">
                                  <Link title="servicios" href={categoria.url}>
                                    <a className="font-PlayfairDisplay text-base font-bold text-center">
                                      {categoria.title}
                                    </a>
                                  </Link>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </li>

            <li className="mx-8 sm:mx-4 my-6 sm:my-0 hidden sm:block">
              <div className="flex flex-col sm:flex sm:flex-row gap-8">
                {productos.map((item, index) => (
                  <div
                    className="relative"
                    key={item.title}
                    onMouseEnter={() =>
                      toggleProductosMenu(index, 'productos', true)
                    }
                    onMouseLeave={() =>
                      toggleProductosMenu(index, 'productos', false)
                    }
                  >
                    <a title="productos">{item.title}</a>

                    {isProductosOpen[index] && (
                      <div className="absolute block ">
                        <div className="flex">
                          <div className="mt-4">
                            {item.content.map((item) => (
                              <div className="flex flex-col" key={item.title}>
                                <div className="bg-opacity-30 bg-black w-32">
                                  <Link title="productos" href={item.url}>
                                    <a
                                      title="productos"
                                      className="font-PlayfairDisplay text-base font-semibold text-center "
                                      onMouseEnter={() =>
                                        displaySubMenuProductos(item.id)
                                      }
                                    >
                                      {item.title}
                                    </a>
                                  </Link>
                                </div>
                              </div>
                            ))}
                          </div>
                          <div className={showSubMenu + ' mt-[90px] ml-1'}>
                            {productosCategorias.map((categoria) => (
                              <div key={categoria.id} className="">
                                <div className="flex flex-col w-32 bg-opacity-25 bg-black">
                                  <Link
                                    title="productos-categorias"
                                    href={categoria.url}
                                  >
                                    <a
                                      title="productos-categorias"
                                      className="font-PlayfairDisplay text-base font-semibold text-center"
                                    >
                                      {categoria.title}
                                    </a>
                                  </Link>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </li>

            <li className="block sm:hidden">
              {submenu.map((item) => (
                <Accordion
                  key={item.id}
                  title={item.title}
                  isOpen={openAccordionIndex === item.id}
                  onAccordionClick={() => handleAccordionClick(item.id)}
                >
                  <a className="text-[#47AF83]" title="linea-hidraulica">
                    {item.subtitle}
                  </a>
                  <a title="sub-categorias" href={item.url}>
                    {item.categorie}
                  </a>
                  <a title="sub categorias" href={item.url2}>
                    {item.categorie2}
                  </a>
                </Accordion>
              ))}
            </li>
            <li className="mx-8 sm:mx-4 my-6 sm:my-0 sm:transform sm:transition  sm:hover:scale-125 hover:underline">
              <Link title="entradas-blog" href="/blogpostpage">
                <a
                  title="entradas-blog"
                  className={`${
                    isRouteActive('/blogpostpage') ? 'underline' : ''
                  }`}
                >
                  Blog
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
