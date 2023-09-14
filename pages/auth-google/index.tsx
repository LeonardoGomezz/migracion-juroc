import {GoogleOAuthProvider} from '@react-oauth/google'
import GoogleAuthentication from '../../bussines/googleAuth/googleAuth'


export default function Home() {

  const client_id = '212801288551-i599j718rvav5plpqrphf0qkj9ehhm65.apps.googleusercontent.com'
  return(
    <>
      <GoogleOAuthProvider clientId={client_id}>
        <GoogleAuthentication/>
      </GoogleOAuthProvider>
    </>
  )
}
