import React from 'react'
import { Link } from 'react-router-dom'

export const NavBar = () => {
  return (
    <div>
      <Link to={'/'}>Portada</Link>
      <Link to={'/metodos/biseccion'}>Bisccion</Link>
      <Link to={'/metodos/newton-raphson'}>Newton Raphson</Link>
      <Link to={'/metodos/von-misses'}>Von Misses</Link>
      <Link to={'/metodos/secante'}>Secante</Link>
      <Link to={'/metodos/punto-fijo'}>Punto Fijo</Link>
    </div>
  )
}
