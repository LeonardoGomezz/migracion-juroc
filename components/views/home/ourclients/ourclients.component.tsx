import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import { CLIENTS } from '../../../../DataInfo/slider.component'

const OurClientsComponent = () => {
  const ImageContent = CLIENTS.map((item) => {
    return (
      <SwiperSlide key={item.id}>
        <div className="flex flex-col justify-center items-center h-56 align-baseline content-center mx-4">
          <img
            className="object-bottom"
            src={item.cliente}
            alt={item.alt}
            title={item.title}
          />
        </div>
      </SwiperSlide>
    )
  })

  return (
    <>
      <div className="text-white mx-auto max-w-screen-xl mt-12 lg:mt-36">
        <h2
          className="text-center text-white font-PlayfairDisplay  text-3xl sm:text-4xl lg:text-6xl 
        font-semibold leading-normal mt-6"
          data-aos="fade-down"
        >
          Nuestros Clientes
        </h2>

        <div className="items-center gap-8 lg:flex-row mt-8 lg:mt-10 hidden lg:flex mx-8">
          <div className="sm:hover:transition sm:hover:scale-125">
            <img
              className="bg-cover"
              src="/img/home/ourclients/01.webp"
              alt="jaramillomora"
              title="jaramillomora"
            />
          </div>

          <div className="sm:hover:transition sm:hover:scale-125">
            <img
              className="bg-cover"
              src="/img/home/ourclients/02.webp"
              alt="jardin-plaza"
              title="jardin-plaza"
            />
          </div>

          <div className="sm:hover:transition sm:hover:scale-125">
            <img
              className="bg-cover"
              src="/img/home/ourclients/03.webp"
              alt="fundacion-carvajal"
              title="fundacion-carvajal"
            />
          </div>

          <div className="sm:hover:transition sm:hover:scale-125">
            <img
              className="bg-cover"
              src="/img/home/ourclients/04.webp"
              alt="naty-london"
              title="naty-london"
            />
          </div>

          <div className="sm:hover:transition sm:hover:scale-125">
            <img
              className="bg-cover"
              src="/img/home/ourclients/05.webp"
              alt="jm"
              title="jm"
            />
          </div>

          <div className="sm:hover:transition sm:hover:scale-125">
            <img
              className="bg-cover"
              src="/img/home/ourclients/06.webp"
              alt="evacol"
              title="evacol"
            />
          </div>
        </div>

        <div className="pt-8 lg:hidden">
          <Swiper
            slidesPerView={1}
            loop={true}
            // onSlideChange={() => console.log('slide change')}
            // onSwiper={(swiper) => console.log(swiper)}
            modules={[Autoplay, Navigation, Pagination]}
            autoplay={{
              delay: 1000,
            }}
          >
            {ImageContent}
          </Swiper>
        </div>
      </div>
    </>
  )
}
export default OurClientsComponent
