import { BlogTarjets } from '../../../../DataInfo/data.component'
import { AiOutlineDoubleLeft } from 'react-icons/ai'
import Link from 'next/link'

const Blog = () => {
  const blogTarjet = BlogTarjets.slice(-2)

  return (
    <>
      <div className="tex-white flex flex-col gap-11 justify-center items-center mt-20 text-white">
        <div className="gap-4">
          <h2
            className="font-manrope text-center not-italic font-semibold underline sm:no-underline sm:font-bold sm:leading-9 text-xs sm:text-3xl"
            data-aos="fade-down"
          >
            Nuestro Blog
          </h2>
          <h2
            className="font-PlayfairDisplay text-center not-italic leading-5 font-semibold text-3xl sm:text-6xl"
            data-aos="fade-down"
          >
            Ultimas entradas
          </h2>
        </div>

        {blogTarjet.map(({ content }) => (
          <div
            className="mx-4 w-10/12 sm:w-8/12 lg:w-9/12 xl:w-7/12"
            key={content.tarjetTitle}
          >
            <Link href={content.url} title={content.urlTitle}>
              <div
                className=" gap-5 pt-5 px-5 pb-5 bg-neutral-700 bg-opacity-50 rounded-[50px] shadow-[0px_1px_20px_1px_#5EC398] border-4 border-emerald-400
                h-auto w-auto mx-9 sm:mx-0 sm:hover:transition lg:hover:scale-110 lg:hover:bg-transparent"
              >
                <div className="flex flex-col items-center sm:flex lg:flex-row gap-5">
                  <div className="flex justify-center w-4/12">
                    <img
                      className="bg-cover w-40 h-40 sm:w-56 lg:w-[400px] lg:h-60 rounded-lg"
                      src={content.img}
                      alt="tarjeta-blog"
                      title="tarjeta-blog"
                    />
                  </div>
                  <div className="flex flex-col gap-6 pr-7 w-11/12">
                    <div className="">
                      <h2 className="font-PlayfairDisplay text-center sm:text-start not-italic text-base sm:text-4xl font-semibold sm:font-bold leading-4 sm:leading-10">
                        {content.tarjetTitle}
                      </h2>
                    </div>
                    <div>
                      <p className="font-manrope not-italic font-medium sm:font-normal leading-5 sm:leading-6  text-xs sm:text-base">
                        {content.text}
                      </p>
                    </div>
                    <div className="w-6/12">
                      <p className="font-manrope not-italic sm:font-bold sm:leading-7 text-xs sm:text-base hover:underline cursor-pointer">
                        <a title="entradas-blog" href={content.url}>
                          Leer más ➜
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}

        <div className="flex items-center gap-x-2 mb-4">
          <AiOutlineDoubleLeft />
          <Link href="/blogpostpage" title="entradas-blog">
            <p className="font-manrope underline sm:no-underline not-italic text-xs sm:text-base font-bold leading-normal sm:leading-7 cursor-pointer">
              Ver entradas más antiguas
            </p>
          </Link>
        </div>
      </div>
    </>
  )
}
export default Blog
