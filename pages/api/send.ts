import type { NextApiRequest, NextApiResponse } from 'next'
import { EmailTemplate } from '../../components/emailtemplate/emailtemplate.component'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export default  async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const data2 = await req.body
    

    
    const data = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['leonardo.gomez@kru360.com'],
      subject: 'Agendamiento de cita',
      react: EmailTemplate({data2: JSON.parse(data2)}),
    })

    console.log('send =>',data2)
    res.status(200).json(data)
  } catch (error) {
    res.status(400).json(error)
  }

}
