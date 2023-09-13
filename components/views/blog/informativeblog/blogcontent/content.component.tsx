import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { BlogContent } from '../../../../../DataInfo/data.component'

const ContentBlog = () => {
  const { query, asPath } = useRouter()
  const { blogcontent } = query
  const [service, setSetvice] = useState('')

  useEffect(() => {
    setSetvice(blogcontent as string)
  }, [asPath, blogcontent])

  const blogFilter = BlogContent.filter((info) => service === info.id)
  // console.log("este es =>", blogFilter)

  return (
    <>
      <div className="text-white">
        <div>
          {blogFilter.map((item) => (
            <div
              className="flex flex-col justify-center  items-center mt-11 sm:mt-16 lg:mt-32 lg:gap-10"
              key={item.title}
            >
              <div className="flex flex-col items-center lg:flex-row sm:justify-center sm:items-center">
                <div className="mx-8 lg:mx-0 sm:w-9/12 lg:w-4/12 flex flex-col lg:gap-4 ">
                  <h2 className="font-PlayfairDisplay mb-4 font-bold leading-6 sm:leading-10 not-italic text-lg sm:text-4xl">
                    {item.content.blogTitle}
                  </h2>
                  <p className="font-manrope not-italic font-medium leading-4 lg:leading-9 text-xs sm:text-xl">
                    {item?.content.parrafo1}
                  </p>
                </div>
                <div className="flex justify-center mt-4 mb-4 lg:mb-0 lg:mt-20">
                  <img
                    className="bg-cover w-40 sm:w-56"
                    src={item?.content.img1}
                    alt={item?.content.atl1}
                    title={item?.content.title1}
                  />
                </div>
              </div>

              <div className="flex flex-col items-center lg:flex-row sm:justify-center sm:items-center ">
                <div className="mx-8 lg:mx-0 sm:w-9/12 lg:w-4/12 flex flex-col lg:gap-4">
                  <h2 className="font-PlayfairDisplay font-bold leading-10 not-italic text-lg sm:text-4xl text-[#47AF83]"></h2>
                  <p className="font-manrope not-italic font-medium leading-4 sm:leading-9 text-xs sm:text-xl">
                    {item?.content.parrafo2}
                  </p>
                </div>
                <div className="flex justify-center mt-4 lg:mt-0">
                  <img
                    className="w-40 sm:w-56 bg-cover"
                    src={item?.content.img2}
                    alt={item?.content.atl2}
                    title={item?.content.title2}
                  />
                </div>
              </div>

              <div className="flex flex-col lg:flex-row justify-center items-center ">
                <div className="mx-8 lg:mx-0 sm:w-9/12 lg:w-6/12 flex flex-col lg:gap-4">
                  <h2 className="font-PlayfairDisplay font-bold leading-10 not-italic text-lg sm:text-4xl"></h2>
                  <p className="font-manrope not-italic font-medium leading-4 sm:leading-9 text-xs sm:text-xl">
                    {item?.content.parrafo3}
                  </p>
                </div>
              </div>

              <div className="items-center w-12/12 mb-4 lg:mb-0">
                <div className="sm:flex mt-4 lg:mt-0">
                  <div>
                    <img
                      className="w-48 bg-cover"
                      src={item?.content.img3}
                      alt={item?.content.atl3}
                      title={item?.content.title3}
                    />
                  </div>

                  <div>
                    <img
                      className="w-48 bg-cover"
                      src={item?.content.img4}
                      alt={item?.content.atl4}
                      title={item?.content.title4}
                    />
                  </div>

                  <div>
                    <img
                      className="w-48 bg-cover"
                      src={item?.content.img5}
                      alt={item?.content.atl5}
                      title={item?.content.title5}
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center lg:flex lg:flex-row sm:justify-center sm:items-center">
                <div className="mx-8 lg:mx-0 sm:w-9/12 lg:w-4/12 flex flex-col lg:gap-4 ">
                  <h2 className="font-PlayfairDisplay font-bold leading-10 not-italic text-lg sm:text-4xl"></h2>
                  <p className="font-manrope not-italic font-medium leading-4 lg:leading-9 text-xs sm:text-xl">
                    {item?.content.parrafo4}
                  </p>
                </div>
                <div className="flex justify-center mt-4 lg:mt-0">
                  <img
                    className="bg-cover w-40 sm:w-56"
                    src={item?.content.img6}
                    alt={item?.content.atl6}
                    title={item?.content.title6}
                  />
                </div>
              </div>

              <div className="flex justify-center items-center mt-4">
                <div className="mx-8 lg:mx-0 lg:w-6/12 flex flex-col lg:gap-4">
                  <p className="font-manrope not-italic font-mediu leading-4m lg:leading-9 text-xs sm:text-xl">
                    {item?.content.parrafo5}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
export default ContentBlog
