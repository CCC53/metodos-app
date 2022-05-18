import React from 'react';

export const PortadaPage = () => {
  return (
    <div className='animate__animated animate__fadeIn'>
        <div className="logosContainer">
          <img src={'/assets/logo_ipn.png'} alt='Logo IPN'/>
          <img src={'/assets/logo_upiicsa.png'} alt='Logo UPIICSA'/>
        </div>
        <div className="header">
          <h3 className='title'>Instituto Politécnico Nacional</h3>
          <h3 className='title'>Unidad Profesional Interdisciplinaria de Ciencias Sociales y Administrativas</h3>
          <h3>Métodos Numéricos</h3>
          <h3 className='title'>Secuencia</h3>
          <h3>2NM51</h3>
          <h3 className='title'>Profesor</h3>
          <h3>Vazquez Torres Fernando</h3>
          <h3 className='title'>Integrantes</h3>
          <h3>Calette Cornelio Juan Carlos</h3>
          <h3>Duran Cruz Abel Ignacio</h3>
        </div>
    </div>
  )
}