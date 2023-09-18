import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { EngineeringProducts } from '../../../../DataInfo/data.component'
import ServicesMobil from './mobilproductservices/servicesmobil.component'
import FeaturedProjects from '../../featuredprojects/featuredprojects.component'

const ProductsServices = () => {
  const { query, asPath } = useRouter()
  const { servicescontent } = query
  const [service, setSetvice] = useState('')
  // console.log('service =>', service)
  // console.log('id =>', query)
  // console.log('products =>', EngineeringProducts)


  useEffect(() => {
    setSetvice(servicescontent as string)
  }, [asPath, servicescontent])

  return (
    <>
      <div className="mt-32 lg:mt-44 text-center">
        <h2
          data-aos="fade-down"
          className="font-PlayfairDisplay not-italic text-2xl sm:text-4xl lg:text-6xl font-semibold leading-5 lg:leading-[80px]"
        >
          Instalaciones Juroc
        </h2>
        <p
          data-aos="fade-down"
          className="mt-4 sm:mt-6 lg:mt-8 mx-4 font-manrope not-italic text-lg sm:text-xl lg:text-3xl lg:font-medium lg:leading-9"
        >
          Portafolio contra incendio para el segmento hidraulico
        </p>

        <div className="hidden sm:block mt-8">
          <div className="flex flex-col justify-center items-center">
            {service === 'ingenieria'
              && EngineeringProducts.map((item) => (
                <div
                  className="lg:w-[950px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12"
                  key={item.title}
                >
                  {item.content.map((productItem) => (
                    <div className="w-[300px]" key={productItem.name}>
                      <div
                        className="h-[350px] bg-neutral-700 bg-opacity-50 shadow-[0px_10px_20px_0px_#47AF83] 
                      brightness-75 hover:duration-500 hover:bg-transparent hover:filter-none border-8 border-[#47AF83] 
                      rounded-[30px] text-center p-4 w-full relative flex flex-col items-center justify-center"
                      >
                        <div className="flex flex-col justify-center items-center lg:w-[250px]">
                          <h2 className="font-PlayfairDisplay not-italic lg:font-semibold text-xl lg:text-2xl lg:leading-8 absolute mb-[-138px] px-4">
                            {productItem.name.split('\n').map((line, index) => (
                              <React.Fragment key={index}>
                                {line}
                                {index < productItem.name.split('\n').length - 1 && <br />}
                              </React.Fragment>
                            ))}
                          </h2>
                          <div className="h-[253px] flex items-center">
                            <img
                              className="mx-auto bg-cover "
                              src={productItem.img}
                              alt={productItem.alt}
                              title={productItem.title}
                            />
                          </div>
                          <div className="">
                            <p className="font-manrope not-italic lg:font-normal leading-5 text-lg">
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
                          className="bg-[#495098] rounded-[10px] sm:h-[58px] lg:h-[78px] font-PlayfairDisplay not-italic lg:font-semibold sm:text-2xl lg:text-3xl lg:leading-9 text-center py-3 flex items-center justify-center mt-4"
                        >
                            Quiero cotizar
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              ))
            }
          </div>
        </div>

        {/* productos en vista mobil */}
        <div>
          <ServicesMobil />
        </div>
        
        <FeaturedProjects />
        
      </div>
    </>
  )
}
export default ProductsServices
