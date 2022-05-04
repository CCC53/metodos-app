import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, NavbarBrand, NavItem } from 'reactstrap';

export const NavigationBar = () => {
  return (
    <Navbar color="dark" dark>
      <NavbarBrand href='/'>Métodos Numéricos</NavbarBrand>
      <NavItem>
        <NavLink className='link' to={'/metodos/secante'}>Secante</NavLink>
      </NavItem>
      <NavItem>
        <NavLink className='link' to={'/metodos/punto-fijo'}>Punto Fijo</NavLink>
      </NavItem>
      <NavItem>
        <NavLink className='link' to={'/metodos/jacobi'}>Jacobi</NavLink>
      </NavItem>
      <NavItem>
        <NavLink className='link' to={'/metodos/gaussjordan'}>gaussjordan</NavLink>
      </NavItem>
    </Navbar>
  )
}