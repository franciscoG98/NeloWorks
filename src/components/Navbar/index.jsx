import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav>
        <ul>
            <Link to='/'>Inicio</Link>
            <Link to='/informacion'>Informacion</Link>
            <Link to='/productos'>Productos</Link>
            <Link to='/galeria'>Galeria</Link>
            <Link to='/contacto'>Contacto</Link>
        </ul>
    </nav>
  )
}
