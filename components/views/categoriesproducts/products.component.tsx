import ProductsContent from "./contentproducts/contentproducts.component"
import HeroProducts from "./heroproducts/heroproducts.component"

const Products = () =>{
  return(
    <div className="bg-[url('/home/fondo.webp')] bg-cover bg-no-repeat text-white">
      <HeroProducts/>
      <ProductsContent/>
    </div>
  )
}
export default Products