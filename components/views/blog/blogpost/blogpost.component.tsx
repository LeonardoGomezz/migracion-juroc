import Layout from '../../../general/layout/layout.componen'
import HeroBlogPost from './heroblogpost/heroblopost.component'
import Publications from './publications/publications.component'

const BlogPost = () =>{
  return(
    
    <div className="bg-[url('/img/2x.webp')] lg:bg-[url('/img/home/fondo.webp')] bg-cover bg-no-repeat">
      <Layout>
        <HeroBlogPost/>
        <Publications/>
      </Layout>
    </div>
    
  )
}
export default BlogPost