import ContentBlog from './blogcontent/content.component'
import HeroBlogContent from './heroblogcontent/heroblogcontent.component'


const BlogContent = () =>{
  
  return(
    
    <div className="bg-[url('/home/fondo.webp')] bg-cover bg-no-repeat">
      <HeroBlogContent/>
      <ContentBlog/>
    </div>
    
  )
}
export default BlogContent