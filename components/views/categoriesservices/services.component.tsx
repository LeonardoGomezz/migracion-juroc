import Layout from '../../general/layout/layout.componen'
import HeroServices from './heroservices/heroservices.component'
import ProductsServices from './productservices/productservices.component'

const Services = () =>{
  return(
    
    <div className="bg-[url('/img/2x.webp')] lg:bg-[url('/img/home/fondo.webp')] bg-cover bg-no-repeat text-white">
      <Layout>
        <HeroServices/>
        <ProductsServices/>
      </Layout>
    </div>
    
  )
}
export default Services