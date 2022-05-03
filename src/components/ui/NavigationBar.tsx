import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Navbar, NavbarBrand, NavItem } from 'reactstrap';

export const NavigationBar = () => {

  const navigate = useNavigate();

  const navigateToMainView = () => {
    navigate('/');
  }

  return (
    <Navbar color="dark" dark>
      <NavbarBrand onClick={navigateToMainView} className="brand">Métodos Numéricos</NavbarBrand>
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
        <NavLink className='link' to={'/metodos/gauss-seidel'}>Gauss Seidel</NavLink>
      </NavItem>
    </Navbar>
  )
}