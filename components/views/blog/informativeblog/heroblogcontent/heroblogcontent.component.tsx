import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import { BlogContent } from "../../../../../DataInfo/data.component"

const HeroBlogContent = () => {
  
  const { query, asPath } = useRouter()
  const { blogcontent } = query
  const [service, setSetvice] = useState("")

  useEffect(() => {
    setSetvice(blogcontent as string)
  }, [asPath])

  const blogFilter = BlogContent.filter((info) => service === info.id)
  // console.log("este es =>", blogFilter)

  return (
    <>
      <div className="text-white">
        {blogFilter.map((item) => (
          <div key={item.title}>
            <div
              className="flex justify-center "
              data-aos="fade-down "
            >
              <img
                className="w-10/12 bg-cover"
                src={item.content.cabecera}
                alt={item.content.altCabecera}
                title={item.content.titleCabecera}
              />
            </div>

            <h2
              className="text-center font-PlayfairDisplay text-4xl sm:text-6xl font-bold leading-7 sm:leading-[90px] sm:mt-10"
              data-aos="fade-down"
            >
              {item.title}
            </h2>
          </div>
        ))} 

        

        <div data-aos="fade-right">
          <p
            className="text-center font-manrope not-italic sm:font-semibold leading-5 sm:leading-8 
        text-base mt-2 sm:text-xl"
          >
            <span className="">Por:</span> Juan David |{" "}
            <span className="">Cargo: </span>Ceo de Juroc
            <br />
            <span className="">Fecha: </span>Julio 02,2023
          </p>
        </div>
      </div>
    </>
  )
}
export default HeroBlogContent
