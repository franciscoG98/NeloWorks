import React from 'react'
import './contactFormStyles.scss'

const ContactForm = () => {
  return (
    <form className='contact__form '>
        <div>
            <input className='form_input' placeholder='Nombre' />
            <input className='form_input' placeholder='Email' />
            <input className='form_input' placeholder='Telefono' />
            <textarea className='form_input' placeholder='Mensaje' rows="4" />
        </div>
        <div>
            <button className='submit_btn' type='submit'>Enviar</button>
        </div>
    </form>
  )
}

export default ContactForm