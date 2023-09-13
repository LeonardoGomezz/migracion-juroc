import Blog from './blog/blog.component'
import Experiences from './experiences/experiences.component'
import HeroComponent from './hero/hero.component'
import OurClientsComponent from './ourclients/ourclients.component'
import ServiceAndProducts from './servicesandproducts/servicesandproducts.component'
import Testimonials from './testimonials/testimonials.component'

const Home = () =>{
  return(
    <div className="bg-[url('/home/fondo.webp')] bg-cover bg-no-repeat">
      <HeroComponent/>
      <OurClientsComponent/>
      <Experiences/>
      <Testimonials/>
      <ServiceAndProducts/>
      <Blog/>
    </div>
  )
}
export default Home