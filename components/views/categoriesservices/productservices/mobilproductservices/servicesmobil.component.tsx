import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { EngineeringProducts } from '../../../../../DataInfo/data.component'

const ServicesMobil = () => {
  const { query, asPath } = useRouter()
  const { servicescontent } = query
  const [service, setSetvice] = useState('')
  // console.log('Service =>', service)

  // EngineeringProducts.map((items) => console.log(items))

  // console.log('rutas dinamicas =>', typeof(id))

  useEffect(() => {
    setSetvice(servicescontent as string)
  }, [asPath])

  return (
    <>
      <div className="sm:hidden block ">
        <div className="mt-11 mx-auto flex flex-col items-center w-full px-4 overflow-x-auto ">
          {service === 'ingenieria'
            ? EngineeringProducts.map((item) => (
              <div
                className="mx-auto grid grid-cols-1 sm:grid-cols-2 gap-11 lg:grid-cols-3"
                key={item.title}
              >
                {item.content.map((productItem) => (
                  <div
                    className="w-full sm:w-[50%] md:w-[33.33%] mb-8 flex flex-col justify-center items-center"
                    key={productItem.name}
                  >
                    <div
                      className="flex flex-col justify-center items-center h-[385px] w-full bg-neutral-700 bg-opacity-50 shadow-[0px_10px_20px_0px_#47AF83] 
                      brightness-75 hover:duration-500 hover:bg-transparent hover:filter-none border-8  border-[#47AF83]
                      rounded-[50px] text-center p-4 relative"
                    >
                      <div className="flex flex-col justify-center items-center lg:w-[250px]">
                        <h2 className="font-PlayfairDisplay not-italic font-semibold text-2xl leading-6 absolute mb-[-138px] mx-7">
                          {productItem.name}
                        </h2>
                        <div className="h-[253px] flex items-center">
                          <img
                            className="mx-auto bg-cover w-full h-full"
                            src={productItem.img}
                            alt={productItem.alt}
                            title={productItem.title}
                          />
                        </div>
                        <div className="mt-6">
                          <p className="font-manrope not-italic font-normal leading-6 text-lg">
                            {productItem.description}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="w-full sm:w-full">
                      <a
                        title="cotizar"
                        href="https://api.whatsapp.com/send/?phone=573155217146"
                        target="_blank"
                        className="bg-[#495098] rounded-[10px] h-[48px] font-PlayfairDisplay not-italic font-semibold text-2xl leading-9 text-center py-3 flex items-center justify-center mt-4"
                      >
                          Quiero cotizar
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            ))
            : 'no hay otra seccion aun'}
        </div>
      </div>
    </>
  )
}
export default ServicesMobil
