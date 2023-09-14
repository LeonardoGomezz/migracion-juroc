import Layout from '../../general/layout/layout.componen'
import ProductsContent from './contentproducts/contentproducts.component'
import HeroProducts from './heroproducts/heroproducts.component'

const Products = () =>{
  return(
    <div className="bg-[url('/img/home/fondo.webp')] bg-cover bg-no-repeat text-white">
      <Layout>
        <HeroProducts/>
        <ProductsContent/>
      </Layout>
    </div>
  )
}
export default Products