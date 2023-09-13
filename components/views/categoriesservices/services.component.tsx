import HeroServices from './heroservices/heroservices.component'
import ProductsServices from './productservices/productservices.component'

const Services = () =>{
  return(
    
    <div className="bg-[url('/home/fondo.webp')] bg-cover bg-no-repeat text-white">
      <HeroServices/>
      <ProductsServices/>
    </div>
    
  )
}
export default Services