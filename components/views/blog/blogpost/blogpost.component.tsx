import HeroBlogPost from './heroblogpost/heroblopost.component'
import Publications from './publications/publications.component'

const BlogPost = () =>{
  return(
    
    <div className="bg-[url('/home/fondo.webp')] bg-cover bg-no-repeat">
      <HeroBlogPost/>
      <Publications/>
    </div>
    
  )
}
export default BlogPost