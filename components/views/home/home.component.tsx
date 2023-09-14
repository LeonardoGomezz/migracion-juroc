import Layout from '../../general/layout/layout.componen'
import Blog from './blog/blog.component'
import Experiences from './experiences/experiences.component'
import HeroComponent from './hero/hero.component'
import OurClientsComponent from './ourclients/ourclients.component'
import Schedule from './schedule/schedule.component'
import ServiceAndProducts from './servicesandproducts/servicesandproducts.component'
import Testimonials from './testimonials/testimonials.component'

const Home = () =>{
  return(
    <div className="bg-[url('/img/home/fondo.webp')] bg-cover bg-no-repeat">
      <Layout>
        <HeroComponent/>
        <OurClientsComponent/>
        <Experiences/>
        <Testimonials/>
        <ServiceAndProducts/>
        <Blog/>
        <Schedule/>
      </Layout>
    </div>
  )
}
export default Home