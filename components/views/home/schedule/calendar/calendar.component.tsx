import styles from './styles.module.css'
import React, { CSSProperties, useEffect, useState } from 'react'
import { getAccessToken, getCalendarEvents } from '../../../../../services/api-endpoints'
import moment from 'moment'
import Flatpickr from 'react-flatpickr'
import { Spanish } from 'flatpickr/dist/l10n/es'
import 'flatpickr/dist/flatpickr.min.css'
import { DateTime } from 'luxon'
import useAnalyticsEventTracker from '../../../../../services/analytics/useAnalyticsEventTracker'
import 'moment/locale/es'

const timeSlots = [
  { start: '08:00', end: '09:00' },
  { start: '09:00', end: '10:00' },
  { start: '10:00', end: '11:00' },
  { start: '11:00', end: '12:00' },
  { start: '13:00', end: '14:00' },
  { start: '14:00', end: '15:00' },
  { start: '15:00', end: '16:00' },
  { start: '16:00', end: '17:00' },
  { start: '17:00', end: '18:00' }
]

const Calendar = (props: any) =>{

  // const [value, onChange] = useState(new Date())
  // const value = new Date()
  const [date, setSelectDate] = useState<any>()
  const [slotDate, setSlotDates] = useState<any>([])
  const [accessToken, setAccessToken] = useState('')
  const [slotsFilter, setSlotsFilter] = useState<any>()
  const gaEventTracker = useAnalyticsEventTracker('KRU')
  const [selectedStyles, setSelectedStyles] = useState<Array<CSSProperties | null>>(
    new Array(slotsFilter?.length).fill({})
  )

  const options = {
    enableTime: false,
    dateFormat: 'd/m/Y',
    locale: Spanish,
    inline: true,
    minDate: 'today',
    disable: [
      function(date:any) {
        // Comprueba si el día de la semana es domingo (0) y lo deshabilita
        return date.getDay() === 0
      }
    ]
  }
  console.log('fecha => ', date?.toJSON())

  const handleChange = (selectedDates: any) => {
    const date = DateTime.fromJSDate(selectedDates[0])
    gaEventTracker(`Reserva: Seleccionó fecha ${date}`)
    console.log('date => ', selectedDates[0])

    setSelectDate(date)
  }

  const getToken = () => {
    getAccessToken().then((res) => {
      console.log(res)
      setAccessToken(res.data.accessToken)
    }).catch((e: Error) => {
      console.log(e)
    })
  }
  const getSlotDates = async () => {
    try {
      const res = await getCalendarEvents(accessToken, date?.toJSON())
      const slots = res.data.items.filter((st: any) => st.status !== 'cancelled').map((item: any) => ({ start: moment(item.start.dateTime).format('HH:mm'), end: moment(item.end.dateTime).format('HH:mm') }))
      setSlotDates(slots)
      // console.log("slots => ", slots);
    } catch (e) {
      console.log(e)
    }
  }
  // console.log("times slotDates => ",slotDate);

  // const onDateChange = async (newDate: any) => {
  //     onChange(newDate);
  //     console.log("newDate => ", newDate)
  // }
  //
  // const disablePassDates = ({ date }: any) => {
  //     return moment(date).isBefore(moment(), 'day');
  //     //view === 'month' && date.getDay() === 0
  // }

  const filterSlots = () => {
    props.setDate(moment(date?.toJSON()).format('YYYY-MM-DD'))
    const filteredTimeSlots = timeSlots.filter(slot => {
      return !slotDate.some((f:any) => (f.start === slot.start && f.end === slot.end) ||
                (f.start < slot.end && f.end > slot.start))
    })
    setSlotsFilter(filteredTimeSlots)
    return filteredTimeSlots
  }

  useEffect(() => {
    filterSlots()
  }, [slotDate, timeSlots])

  useEffect(() => {
    getToken()
  })

  useEffect(() => {
    getSlotDates()
  }, [accessToken, date])

  const handleTimeSlot = (event: any, index: number) => {
    const value = event.target.value
    console.log('value ', value)
    props.setGetSlotTime(value)
    const newStyles = new Array(slotsFilter?.length).fill(null)
    newStyles[index] = {
      backgroundColor: '#f08312', // cambiar a cualquier otro color
      // otras propiedades CSS que que quieran cambiar
    }
    gaEventTracker(`Reserva: Seleccionó Hora ${value}`)
    setSelectedStyles(newStyles)
  }

  const done = {
    backgroundColor: 'transparent'
  }

  return (
    <>
      <div className={styles.general} data-aos="fade-down" data-aos-duration="2000">
        <div className={styles.generalCalendar}>
          {/*<Calendar*/}
          {/*    className={styles.calendar}*/}
          {/*    locale="es"*/}
          {/*    value={value}*/}
          {/*    onChange={onDateChange}*/}
          {/*    tileDisabled={disablePassDates}*/}
          {/*/>*/}
          <Flatpickr onChange={handleChange} options={options} />
          <div className={styles.availability}>
            <p><span className={styles.d}></span>Disponibles</p>
            <p><span className={styles.n}></span>No disponibles</p>
          </div>
          {props.getSlotTime ? <div className={styles.selected}>
            <p>Fecha: <strong>{moment(date?.toJSON()).format('dddd YYYY-MM-DD')}</strong></p>
            <p>Hora seleccionada: <strong>{props.getSlotTime}</strong></p>
          </div> : null}
        </div>
        <div className={styles.time}>
          <div className={styles.title}>
            <h3>Horarios</h3>

            <div className={styles.hourGeneral}>
              {slotsFilter ? slotsFilter.map((items: any, index: number) => (
                <div className={styles.hour} key={index}>
                  <input onClick={(event) => handleTimeSlot(event, index)}
                    type="button" name="times"
                    value={`${items.start} - ${items.end}`}
                    style={selectedStyles[index] || done}
                  />
                </div>
              )) : null}
            </div>

          </div>
        </div>

      </div>

    </>
  )
}
export default Calendar