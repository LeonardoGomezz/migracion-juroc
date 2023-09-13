import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import {
  bomberilProducts,
  industrailProducts,
} from '../../../../../DataInfo/data.component'
import ReactPaginate from 'react-paginate'
import React from 'react'

const ProductsMobil = () => {
  const { query, asPath } = useRouter()
  const { productscontent } = query
  const [service, setSetvice] = useState('')

  // console.log('rutas dinamicas mobile =>', typeof(id))

  useEffect(() => {
    setSetvice(productscontent as string)
  }, [asPath, productscontent])

  const [currentPage, setCurrentPage] = useState(0)
  const itemsPerPage = 7
  const startIndex = currentPage * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const displayedProducts = (
    service === 'industrial' ? industrailProducts : bomberilProducts
  )
    .map((item) => item.content)
    .flat()
    .slice(startIndex, endIndex)

  // Función para cambiar de página
  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected)
  }

  return (
    <>
      <div className="w-full">
        <div className="md:hidden block ">
          <div className="flex flex-col items-center justify-center">
            <div className="mt-20 w-9/12">
              {displayedProducts.map((productItem) => (
                <div key={productItem.name}>
                  <div
                    className="h-[400px] bg-neutral-700 bg-opacity-50 shadow-[0px_10px_20px_0px_#495098] 
                 brightness-75 hover:duration-500 hover:bg-transparent hover:filter-none border-4 border-[#495098] rounded-[30px] 
                 text-center p-4  relative"
                  >
                    <div className="flex flex-col justify-center items-center lg:w-[250px]">
                      <h2 className="font-PlayfairDisplay not-italic lg:font-semibold text-2xl lg:leading-8 absolute mb-[-108px] mx-4">
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
                      <div className="mt-4">
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
                      className="bg-[#47AF83] rounded-[10px] lg:h-[78px] font-PlayfairDisplay not-italic lg:font-semibold lg:text-3xl lg:leading-9 
                   text-center py-3 flex items-center justify-center mt-4 mb-4"
                    >
                      Quiero cotizar
                    </a>
                  </div>
                </div>
              ))}

              <ReactPaginate
                className="flex justify-center gap-4 mt-8"
                previousLabel={'Anterior'}
                nextLabel={'Siguiente'}
                breakLabel={'...'}
                pageCount={Math.ceil(
                  (service === 'industrial'
                    ? industrailProducts
                    : bomberilProducts
                  )
                    .map((item) => item.content)
                    .flat().length / itemsPerPage
                )}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={handlePageChange}
                containerClassName={'pagination'}
                activeClassName={'active'}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default ProductsMobil
