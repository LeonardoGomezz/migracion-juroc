import Calendar from './calendar/calendar.component'
import ContactForm from './contactform/contactform.component'

const Schedule = () =>{
  return(
    <>
      <div className='flex flex-col justify-center lg:flex lg:flex-row lg:items-center'>
        <ContactForm/>
        <Calendar/>
      </div>
    </>
  )
}
export default Schedule