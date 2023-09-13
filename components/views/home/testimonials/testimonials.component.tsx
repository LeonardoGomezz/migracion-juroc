import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { useState } from 'react'
import { HOME } from '../../../../DataInfo/slider.component'

const Testimonials = () => {
  const [activeSlider] = useState(1)

  const sliderContent = HOME.map((item, index) => {
    return (
      <SwiperSlide key={index}>
        <div
          className={
            index != activeSlider
              ? 'w-[100%] h-auto text-center font-manrope text-xl flex shadow-[0px_4px_20px_0px_#5EC398] border-4 border-emerald-400 rounded-[20px] '
              : 'w-[100%] text-center font-manrope text-xl flex  border-4 border-emerald-400 rounded-[20px]'
          }
        >
          <div className=" flex flex-col items-center mx-10 space-y-4 pb-4 pt-8">
            <img
              className="bg-cover w-[100px] sm:w-[200px]"
              src={item.image}
              title={item.imageTitle}
              alt={item.alt}
            />
            <h2 className=" font-PlayfairDisplay not-italic font-bold sm:font-semibold text-base sm:text-3xl leading-4 sm:leading-9 ">
              {item.title}
            </h2>
            <hr className="h-1 bg-gradient-to-r from-indigo-800 to-emerald-400 "></hr>
            <h2 className="font-PlayfairDisplay not-italic sm:leading-9 font-semibold sm:font-bold text-xs sm:text-3xl">
              {item.subtitle}
            </h2>
            <p className="font-manrope not-italic font-normal sm:font-semibold leading-4 sm:leading-6 text-xs sm:text-base  ">
              {item.description}
            </p>
          </div>
        </div>
      </SwiperSlide>
    )
  })

  return (
    <>
      <div className="w-full mt-16 lg:mt-56 pb-10 text-white">
        <div className="w-[100%]">
          <div className="mb-10 sm:mb-20">
            <h2
              className="font-PlayfairDisplay text-center text-3xl leading-7 sm:leading-none sm:text-6xl not-italic font-semibold mx-2"
              data-aos="fade-down"
            >
              Testimonios que hablan por nosotros
            </h2>
          </div>

          <div className="mx-10">
            <Swiper
              initialSlide={1}
              loop={true}
              centeredSlides={true}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
              breakpoints={{
                995: {
                  slidesPerView: 3,
                  spaceBetween: 15,
                },
                600: {
                  slidesPerView: 2,
                  spaceBetween: 15,
                },
              }}
            >
              {sliderContent}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  )
}
export default Testimonials
