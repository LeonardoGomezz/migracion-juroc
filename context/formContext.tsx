import React, {createContext, useState} from 'react'

export const FormContext = createContext<any>(null)

export const FormDataProvider = ({ children }:any) => {

  const [form, setForm] = useState({})
  const [spinnerStatus, setSpinnerStatus] = useState(false)

  return (
    <FormContext.Provider value={{form, setForm, spinnerStatus, setSpinnerStatus}}>
      {children}
    </FormContext.Provider>
  )
}
