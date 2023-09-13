import Link from 'next/link'
import { BlogTarjets } from '../../../../../DataInfo/data.component'

const Publications = () => {
  const blogTarjetFilter = BlogTarjets.filter((tarjets) => tarjets.title)

  return (
    <>
      <div className="text-white">
        <div className="flex flex-col gap-6 sm:gap-11 justify-center items-center mt-10 sm:mt-20">
          <div>
            <h2
              className="font-PlayfairDisplay not-italic font-semibold text-center text-3xl sm:text-6xl"
              data-aos="fade-down"
            >
              Ultimas entradas
            </h2>
          </div>

          <div className="flex flex-col gap-8 items-center">
            {blogTarjetFilter.map((item) => (
              <div
                className="mx-4 w-10/12 sm:w-8/12 lg:w-6/12"
                key={item.title}
              >
                <div className="gap-5 pt-5 px-5 pb-5 bg-neutral-700 bg-opacity-50 rounded-[50px] shadow-[0px_1px_20px_1px_#5EC398] border-4 border-emerald-400 h-auto w-auto sm:mx-0 sm:hover:transition lg:hover:scale-110 lg:hover:bg-transparent">
                  <div className="flex flex-col items-center sm:flex xl:flex-row gap-5">
                    <div className="flex justify-center ">
                      <img
                        className="bg-cover sm:w-[200px] lg:w-[300px] rounded-lg"
                        src={item.content.img}
                        alt="tarjeta-blog"
                        title="tarjeta-blog"
                      />
                    </div>
                    <div className="flex flex-col gap-6 pr-7 w-9/12">
                      <div>
                        <h2
                          className="font-PlayfairDisplay text-center sm:text-start not-italic text-base sm:text-2xl font-semibold 
                      sm:font-bold leading-4 sm:leading-10"
                        >
                          {item.content.tarjetTitle}
                        </h2>
                      </div>
                      <div>
                        <p className="font-manrope not-italic font-medium sm:font-normal leading-5 sm:leading-6 text-xs sm:text-xs">
                          {item.content.text}
                        </p>
                      </div>
                      <div>
                        <p className="font-manrope not-italic sm:font-bold sm:leading-7 text-xs sm:text-base hover:underline cursor-pointer">
                          <Link
                            title={item.content.urlTitle}
                            href={item.content.url}
                          >
                            Leer más ➜
                          </Link>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
export default Publications
