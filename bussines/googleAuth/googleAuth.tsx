import styles from './styles.module.css'
import {useEffect, useState} from 'react'
import {useRouter} from 'next/router'
import {getTokens, googleAuthConfig, googleAuthToken, saveCredentialsAccess} from '../../services/api-endpoints'
import {getGoogleUrl} from '../../services/external-service'

export default function GoogleAuthentication() {
  const [seeLogin, setSeeLogin] = useState(true)
  const [configData, setConfiData] = useState<any>([])
  const router = useRouter()
  const {
    query: {code},
  } = router

  const verifyToken = async () => {
    googleAuthToken().then(( res ) => {
      console.log(res)
    }).catch(( err ) => {
      console.log(err.response.data.message)
      if (err.response.data.message) {
        googleAuthConfig().then(( r ) => {
          console.log(r.data)
          if (r.data) {
            setConfiData(r.data)
            setSeeLogin(false)
          }
        }).then(( e ) => {
          console.log(e)
        })
      }
    })
  }

  const saveCredentials = () => {
    googleAuthConfig().then((r)=>{
      setConfiData(r.data)
      if(code != undefined){
        getTokens(r.data, code as string).then((res)=>{
          console.log(res.data)

          saveCredentialsAccess(res.data, code as string).then((response)=>{
            console.log(response)
          }).catch((er)=>{
            console.log(er)
          })

        }).then((error)=>{
          console.log(error)
        })
      }
    }).then((e)=>{
      console.log(e)
    })

  }

  useEffect(()=>{
    saveCredentials()
  }, [code])

  return(
    <>
      <div className={styles.authLogin}>
        <button onClick={verifyToken} hidden={!seeLogin}>Verificar Google Auth</button>
        <a hidden={seeLogin} href={getGoogleUrl('/calendar', configData?.clientId, configData?.redirectUri)}>
                    Login Auth Google
        </a>
      </div>
    </>
  )
}
