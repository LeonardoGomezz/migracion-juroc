import * as React from 'react'


interface EmailTemplateProps {
  data2: {
    name: '',
    business: '',
    nit: '',
    phone: '',
    email: '',
    date: ''
  }
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  data2,
}) => (
  <div>
    <h1>notificacion agendamiento de cita con {data2.name}, de: {data2.business}</h1>
    <p>
      Cordial saludo, el agendamiento de tu cita quedó registrado para la fecha {data2.date}
    </p>
  </div>
)
