import Layout from '../../../general/layout/layout.componen'
import ContentBlog from './blogcontent/content.component'
import HeroBlogContent from './heroblogcontent/heroblogcontent.component'


const BlogContent = () =>{
  
  return(
    
    <div className="bg-[url('/img/home/fondo.webp')] bg-cover bg-no-repeat">
      <Layout>
        <HeroBlogContent/>
        <ContentBlog/>
      </Layout>
    </div>
    
  )
}
export default BlogContent