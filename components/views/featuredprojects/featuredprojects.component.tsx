import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import { otherClients } from "../../../DataInfo/slider.component";

const FeaturedProjects = () => {

  const ImageContent = otherClients.map((item) => {
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
    );
  });

  return (
    <>
      <div className="mt-36">
        <h2
          data-aos="fade-down"
          className="text-center font-PlayfairDisplay lg:leading-normal lg:font-semibold not-italic lg:text-6xl text-xl font-bold leading-normal"
        >
          Proyectos destacados con nuestros productos
        </h2>

        <div className="hidden lg:flex items-baseline gap-24 justify-center lg:h-60 mt-4">
          <div className="flex flex-col items-center justify-center h-48 w-2/12">
            <div>
              <img
                className="bg-cover"
                src="/home/ourclients/02.png"
                alt="jardin-plaza"
                title="jardin plaza"
              />
            </div>
            <div className="">
              <p className="text-center font-manrope not-italic lg:leading-normal lg:font-bold lg:text-xl">
                Productos certificados
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center h-48 w-2/12">
            <div>
              <img
                className="bg-cover"
                src="/home/ourclients/03.png"
                alt="fundacion-carvajal"
                title="fundacion carvajal"
              />
            </div>
            <div className="">
              <p className="text-center font-manrope not-italic lg:leading-normal lg:font-bold lg:text-xl">
                Productos certificados
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center h-48 w-2/12">
            <div>
              <img
                className="bg-cover"
                src="/home/ourclients/04.png"
                alt="naty-london"
                title="naty london"
              />
            </div>
            <div className="">
              <p className="text-center font-manrope not-italic lg:leading-normal lg:font-bold lg:text-xl">
                Productos certificados
              </p>
            </div>
          </div>
        </div>

        {/* <div className="pt-8 lg:hidden">
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
          <div className="text-center font-manrope text-xs not-italic font-bold leading-4">
            <p>Productos certificados</p>
          </div>
        </div> */}

      </div>
    </>
  );
};
export default FeaturedProjects;
