import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import {bomberilProducts, industrailProducts} from '../../../../DataInfo/data.component'
import ProductsMobil from './productsmobil/productsmobil.component'
import FeaturedProjects from '../../featuredprojects/featuredprojects.component'



const ProductsContent = () => {
  const { query, asPath } = useRouter()
  const { productscontent } = query
  const [service, setSetvice] = useState('')

  useEffect(() => {
    setSetvice(productscontent as string)
  }, [asPath, productscontent])

  // console.log(tarjetFilter)

  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <div data-aos="fade-down" className="mt-24 sm:mt-36 lg:mt-64">
          <h2 className="mx-4 lg:mx-0 text-center font-PlayfairDisplay not-italic font-semibold text-2xl sm:text-4xl lg:text-6xl">
            Productos linea {productscontent} Juroc
          </h2>
          <p className="mx-4 mt-8 lg:mx-0 text-center font-manrope not-italic font-medium leading-6 sm:leading-9 text-lg sm:text-xl lg:text-3xl">
            Portafolio de productos contra incendio para el segmento industrial
          </p>
        </div>

        <div className="mt-20 mx-8 hidden sm:block">
          {service == 'industrial'
            ? industrailProducts.map((item) => (
              <div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12"
                key={item.title}
              >
                {item.content.map((productItem) => (
                  <div key={productItem.name}>
                    <div
                      className="h-[350px] bg-neutral-700 bg-opacity-50 shadow-[0px_10px_20px_0px_#495098] 
                      brightness-75 hover:duration-500 hover:bg-transparent hover:filter-none border-8 border-[#495098] 
                      rounded-[30px] text-center p-4 w-full relative"
                    >
                      <div className="flex flex-col justify-center items-center lg:w-[250px]">
                        <h2 className="font-PlayfairDisplay not-italic lg:font-semibold text-xl lg:text-2xl lg:leading-8 absolute mb-[-138px]">
                          {productItem.name}
                        </h2>
                        <div className="h-[253px] flex items-center">
                          <img
                            className="mx-auto bg-cover"
                            src={productItem.img}
                            alt={productItem.alt}
                            title={productItem.title}
                          />
                        </div>
                        <div className="">
                          <p className="font-manrope not-italic lg:font-normal lg:leading-6">
                            {productItem.description}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <a
                        title="cotizar"
                        href="https://api.whatsapp.com/send/?phone=573155217146"
                        target="_blank"
                        className="bg-[#47AF83] rounded-[10px] lg:h-[78px] font-PlayfairDisplay not-italic lg:font-semibold lg:text-3xl lg:leading-9 text-center py-3 flex items-center justify-center mt-4"
                      >
                          Quiero cotizar
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            ))
            : bomberilProducts.map((item) => (
              <div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12"
                key={item.title}
              >
                {item.content.map((productItem) => (
                  <div key={productItem.name}>
                    <div
                      className="h-[350px] bg-neutral-700 bg-opacity-50 shadow-[0px_10px_20px_0px_#495098] 
                      brightness-75 hover:duration-500 hover:bg-transparent hover:filter-none border-8 border-[#495098] 
                      rounded-[30px] text-center p-4 w-full relative"
                    >
                      <div className="flex flex-col justify-center items-center lg:w-[250px]">
                        <h2 className="font-PlayfairDisplay not-italic lg:font-semibold text-xl lg:text-2xl lg:leading-8 absolute mb-[-138px]">
                          {productItem.name}
                        </h2>
                        <div className="h-[253px] flex items-center">
                          <img
                            className="mx-auto bg-cover"
                            src={productItem.img}
                            alt={productItem.alt}
                            title={productItem.title}
                          />
                        </div>
                        <div className="">
                          <p className="font-manrope not-italic lg:font-normal lg:leading-6">
                            {productItem.description}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <a
                        title="cotizar"
                        href="https://api.whatsapp.com/send/?phone=573155217146"
                        target="_blank"
                        className="bg-[#47AF83] rounded-[10px] lg:h-[78px] font-PlayfairDisplay not-italic lg:font-semibold lg:text-3xl lg:leading-9 text-center py-3 flex items-center justify-center mt-4"
                      >
                          Quiero cotizar
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            ))}
        </div>

        <div className="block sm:hidden">
          <ProductsMobil />
        </div>
        <div>
          <FeaturedProjects/>
        </div>
      </div>
    </>
  )
}
export default ProductsContent
