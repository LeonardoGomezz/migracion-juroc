import Calendar from './calendar/calendar.component'
import ContactForm from './contactform/contactform.component'
import {useState} from 'react'

const Schedule = () =>{

  const [getSlotTime, setGetSlotTime] = useState('')
  const [date, setDate] = useState('')
  
  return(
    <>

      <div className='mb-8 text-white'>
        <h2 className=" text-center mx-4 lg:mx-0 font-PlayfairDisplay not-italic font-semibold leading-7 lg:leading-normal text-3xl sm:text-6xl" data-aos="fade-down">Agenda una cita con nosotros</h2>
      </div>

      <div className='flex flex-col gap-8 justify-center lg:flex lg:flex-row lg:items-baseline' id='AgendaInicio' >

        <div>
          <ContactForm getSlotTime={getSlotTime} date={date}/>
        </div>
        <div>
          <Calendar setGetSlotTime={setGetSlotTime} setDate={setDate} getSlotTime={getSlotTime}/>
        </div>
      </div>
    </>
  )
}
export default Schedule