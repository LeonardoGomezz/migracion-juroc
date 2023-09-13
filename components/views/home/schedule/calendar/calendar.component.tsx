import { Spanish } from 'flatpickr/dist/l10n/es'
import 'flatpickr/dist/flatpickr.min.css'
import Flatpickr from 'react-flatpickr'
import React, { useRef  } from 'react'

// const timeSlots = [
//   { start: '08:00', end: '09:00' },
//   { start: '09:00', end: '10:00' },
//   { start: '10:00', end: '11:00' },
//   { start: '11:00', end: '12:00' },
//   { start: '13:00', end: '14:00' },
//   { start: '14:00', end: '15:00' },
//   { start: '15:00', end: '16:00' },
//   { start: '16:00', end: '17:00' },
//   { start: '17:00', end: '18:00' }
// ]

const Calendar = () =>{

  const options = {
    enableTime: false,
    dateFormat: 'd/m/Y',
    locale: Spanish,
    inline: true,
    minDate: 'today',
    theme: 'transparent',
    disable: [
      function(date) {
        return date.getDay() === 0 || date.getDay() === 6
      },
    ],
  }

  const flatpickrInstance = useRef(null)

  return(
    <>
      <div className='w-full flex justify-center lg:justify-start'>
        <Flatpickr
          value={null}
          // onChange={handleChange}
          options={options}
          ref={flatpickrInstance}
          // container={document.querySelector(`.${styles['calendar-container']}`)}
        /> 
      </div>
    </>
  )
}
export default Calendar