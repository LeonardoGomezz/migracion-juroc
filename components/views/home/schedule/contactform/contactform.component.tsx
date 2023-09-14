import { useContext, useEffect, useState } from 'react'
import useAnalyticsEventTracker from '../../../../../services/analytics/useAnalyticsEventTracker'
import { FormContext } from '../../../../../context/formContext'
import stateService from '../../../../../services/api-endpoints'
import SaveBooking from '../save/save'

const ContactForm = (props:any) => {

  const {form, setForm} = useContext(FormContext)
  const [dataJson, setDataJson] = useState<any>([])
  const gaEventTracker = useAnalyticsEventTracker('KRU')

  const handlerForm = (event:any) => {
    const value = event.target.value
    setForm({
      ...form,
      [event.target.name]: value
    })
  }

  const getBooking = () => {
    stateService.getAllBooking()
      .then((response: any) => {
        //console.log(response.data.data);
        setDataJson(response.data.data)
      })

      .catch((e: Error) => {
        console.log(e)
      })
  }

  useEffect(()=>{
    getBooking()
  }, [])

  const expression: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i

  useEffect(()=>{
    if(form.name !== '' && form.email !== '' && form.phone !== '' && form.phone?.length > 9 && expression.test(form.email)){
      gaEventTracker(`Llenó form: ${form.name}`)
    }
  }, [form])
    
  return (
    <>
      <div className="text-white flex flex-col  gap-5 justify-center items-center mt-10  w-full">
        <div className="w-fit flex  gap-8 justify-center items-center ">
          <form
            className="flex flex-col justify-center items-center gap-5 w-full"
            id="myForm"
          >
            <div className="flex mt-2 rounded relative">
              <input
                className="bg-transparent border-[3px] w-64 sm:w-96 h-8 sm:h-10 rounded-lg pl-14 focus:border-emerald-400 focus:ring-emerald-400 focus:outline-none
                font-PlayfairDisplay not-italic font-medium sm:font-medium text-xs sm:text-base sm:leading-7"
                name="name"
                id="nombre"
                type="text"
                placeholder="Nombre"
                required
                onChange={handlerForm}
              />
              <div className="absolute inset-y-0 flex items-center pl-4">
                <img
                  className="bg-cover w-6 h-6"
                  src="/img/home/contactform/nombre.svg"
                  alt="nombre"
                  title="nombre"
                />
              </div>
            </div>

            <div className="flex mt-2 rounded relative">
              <input
                className="bg-transparent border-[3px] w-64 sm:w-96  h-8 sm:h-10 rounded-lg pl-14 focus:border-emerald-400 focus:ring-emerald-400 focus:outline-none
                font-PlayfairDisplay not-italic font-medium sm:font-medium text-xs sm:text-base sm:leading-7"
                name="business"
                id="empresa"
                type="text"
                placeholder="Empresa"
                onChange={handlerForm}
              />
              <div className="absolute inset-y-0 flex items-center pl-4">
                <img
                  className="bg-cover w-6 h-6"
                  src="/img/home/contactform/empresa.svg"
                  alt="empresa"
                  title="empresa"
                />
              </div>
            </div>

            <div className="flex mt-2 rounded relative">
              <input
                className="bg-transparent border-[3px] w-64 sm:w-96 h-8 sm:h-10 rounded-lg pl-14 focus:border-emerald-400 focus:ring-emerald-400 focus:outline-none
                font-PlayfairDisplay not-italic font-medium sm:font-medium text-xs sm:text-base sm:leading-7"
                name="nit"
                id="nit"
                type="number"
                placeholder="Nit"
                required
                onChange={handlerForm}
              />
              <div className="absolute inset-y-0 flex items-center pl-4">
                <img
                  className="bg-cover w-6 h-6"
                  src="/img/home/contactform/nit.svg"
                  alt="nit"
                  title="nit"
                />
              </div>
            </div>

            <div className="flex mt-2 rounded relative">
              <input
                className="bg-transparent border-[3px] w-64 sm:w-96 h-8 sm:h-10 rounded-lg pl-14 focus:border-emerald-400 focus:ring-emerald-400 focus:outline-none
                font-PlayfairDisplay not-italic font-medium sm:font-medium text-xs sm:text-base sm:leading-7"
                name="phone"
                id="telefono"
                type="number"
                placeholder="Telefono"
                required
                onChange={handlerForm}
              />
              <div className="absolute inset-y-0 flex items-center pl-4">
                <img
                  className="bg-cover w-6 h-6"
                  src="/img/home/contactform/telefono.svg"
                  alt="telefono"
                  title="telefono"
                />
              </div>
            </div>

            <div className="flex mt-2 rounded relative">
              <input
                className="bg-transparent border-[3px] w-64 sm:w-96 h-8 sm:h-10 rounded-lg pl-14 focus:border-emerald-400 focus:ring-emerald-400 focus:outline-none
                font-PlayfairDisplay not-italic font-medium sm:font-medium text-xs sm:text-base sm:leading-7"
                name="email"
                id="email"
                type="email"
                placeholder="Correo"
                required
                onChange={handlerForm}
              />
              <div className="absolute inset-y-0 flex items-center pl-4">
                <img
                  className="bg-cover w-6 h-6"
                  src="/img/home/contactform/correo.svg"
                  alt="correo"
                  title="correo"
                />
              </div>
            </div>

            <div>
              <SaveBooking data={form} SlotTime={props.getSlotTime} date={props.date} dates={dataJson.slice(0,1)}/>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
export default ContactForm
