import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Navbar, NavbarBrand, NavItem } from 'reactstrap';
import { NavigationItem } from '../../types/ui';

export const NavigationBar = () => {

  const navigate = useNavigate();

  const navigateToMainView = () => {
    navigate('/');
  }

  const navItems: NavigationItem[] = [
    { label: 'Bisección', url: 'biseccion' },
    { label: 'Newton Raphson', url: 'newton-raphson' },
    { label: 'Von Misses', url: 'von-misses' },
    { label: 'Secante', url: 'secante' },
    { label: 'Punto Fijo', url: 'punto-fijo' },
    { label: 'Jacobi', url: 'jacobi' },
    { label: 'Gauss Seidel', url: 'gauss-seidel' },
    { label: 'Interpolación de Lagrange', url: 'interpolacion-lagrange' }
  ];

  return (
    <Navbar color="dark" dark>
      <NavbarBrand onClick={navigateToMainView} className="brand">Métodos Numéricos</NavbarBrand>
      {
        navItems.map(({ label, url }) => (
          <NavItem key={url}>
            <NavLink className={({isActive}) => `link ${isActive && "active"}`} to={`/metodos/${url}`}>{label}</NavLink>
          </NavItem>
        ))
      }
    </Navbar>
  )
}