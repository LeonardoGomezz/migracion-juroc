import moment from 'moment'
import {useContext, useEffect, useState} from 'react'
import stateService from '../../../../../services/api-endpoints'
import Swal from 'sweetalert2'
import useAnalyticsEventTracker from '../../../../../services/analytics/useAnalyticsEventTracker'
import { FormContext } from '../../../../../context/formContext'

export default function SaveBooking(props:any) {
  const gaEventTracker = useAnalyticsEventTracker('KRU')
  const dates = props.dates ? props.dates[0] : null
  const nowDefault = moment.utc().local().add(1, 'day')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const currentDateDefault = nowDefault.toJSON()
  const now = moment(dates ? dates._props.date_to : currentDateDefault).add(1, 'day').add(10, 'second')
  const now2 = moment(dates ? dates._props.date_to: currentDateDefault).add(2, 'day').add(10, 'second')
  const currentDate = now.toJSON()
  const currentDate2 = now2.toJSON()
  const {form} = useContext(FormContext)
  console.log('form=>', form)


  useEffect(()=>{
    setStartDate(`${props.date}T${props.SlotTime.slice(0, 5)}:00-05:00`)
    setEndDate(`${props.date}T${props.SlotTime.slice(8, 14)}:00-05:00`)
  }, [props.SlotTime, props.date])

  // console.log("start => ", startDate);
  // console.log("end => ", endDate);
  const initSaveBooking = {
    tenant: process.env.NEXT_PUBLIC_TENANT as string,
    user: {
      dni: Date.now().toString().slice(3, 12),
      name: props.data.name,
      email: props.data.email,
      cellphone: props.data.phone,
      details: {
        code: 'comment',
        value: 'comentario',
        dni: Date.now().toString().slice(3, 12),
        description: 'Agendamiento de cita'
      }
    },
    booking: {
      status: 'paid',
      code: '',
      details: {
        time_cron: 2,
        start_date: startDate,
        end_date: endDate,
        description: 'servicio de citas KRU',
        api_key: process.env.NEXT_PUBLIC_REACT_APP_GOOGLE_API_KEY as string,
        calendar_id: process.env.NEXT_PUBLIC_CALENDAR_ID as string,
        booked: 'appointment',
        location: 'Juroc',
        summary: `Cita con ${props.data.name} - kru360.com`
      },
      resource_code: process.env.NEXT_PUBLIC_RESOURCE_CODE_KRU as string,
      start_date: currentDate,
      end_date: currentDate2
    }
  }
  // console.log("props => ",props);
  const handleSubmit = async (ev:any) => {
    ev.preventDefault()
    gaEventTracker('Agendar')
    if(props.SlotTime.slice(0,5) !== '' && props.SlotTime.slice(8,14) !== ''){
      if(initSaveBooking.user.name !== undefined && initSaveBooking.user.email !== undefined && initSaveBooking.user.cellphone !== undefined){
        stateService.postBooking(initSaveBooking).then((res)=>{
          console.log(res)
          if (res.status === 200) {
            console.log('¡Success! code status: ' + res.status)
            
            Swal.fire(
              {
                title: '!Cita agendada!',
                text: 'Gracias por ponerte en contacto con KRU',
                icon: 'success'
              }
            ).then(function() {
              window.location.reload()
            })
            fetch('/api/send', {
              method: 'POST',
              body:JSON.stringify(form)
            })
          }
        }).catch((e:Error) => {
          console.log(e)
          Swal.fire(
            {
              title: '!Error - No se ha podido crear!',
              text: 'Intentelo nuevamente o más tarde',
              icon: 'error'
            }
          )
        })
      }else{
        Swal.fire(
          {
            title: '!Faltan datos!',
            text: 'Por favor rellene todos los campos para continuar',
            icon: 'warning'
          }
        )
      }

    }else{
      Swal.fire(
        {
          title: '!Debe seleccionar una fecha y hora!',
          text: 'seleccione una fecha y hora para continuar',
          icon: 'warning'
        }
      )
    }

  }

  return(
    <>
      <div >
        <button className="rounded-md shadow-[0px_0px_0px_0px_#5EC398] bg-[#495098] h-10 sm:h-14 font-PlayfairDisplay not-italic w-auto mx-4 
        drop-shadow-[0px_4px_8px_rgba(255,255,255,0.8)] font-semibold sm:text-3xl px-6 flex  items-center" 
        onClick={handleSubmit} type="submit">Agendar una cita</button>
      </div>
    </>
  )
}
