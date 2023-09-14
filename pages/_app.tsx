import type { AppProps } from 'next/app'
import '../styles/global.css'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Head from 'next/head'
import { FormDataProvider } from '../context/formContext'

export default function App({ Component, pageProps }: AppProps) {

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out'
    })
  }, [])

  return<>
    <Head >
      <meta charSet='utf-8' lang='es'/>
      <title>Juroc | Proveedor de equipos de protección contra incendios</title>
      <meta name='author' content='Juroc' />
      <meta name='description' content='Empresa dedicada a la protección contra incendios y a la seguridad industrial. Enfocados en la venta, recarga e instalación de todo tipo de extintores, señalización, redes hidráulicas, dotaciones EPP, planes de emergencia o evacuación y sistemas de gestión en la seguridad y salud en el trabajo.' />
      <meta name='keywords' content='proteccion, incendios, servicios, productos, seguridad, venta, instalacion, extintor, instalacion, industrial' />
    </Head>
    <FormDataProvider>
      <Component {...pageProps} />
    </FormDataProvider>
  </>
}