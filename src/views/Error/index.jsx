import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar } from '../../components/Navbar'
import WhatsappLink from '../../components/WhatsappLink'

const Error = () => {
  return (
    <div>
        <Navbar />
        <h1>Error</h1>
        <p>La pagina que estas intentando visitar no existe. Puedes regresar a <Link to='/'>Inicio</Link></p>
        <WhatsappLink />
    </div>
  )
}

export default Error