import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom';
import { SecantePage } from '../components/pages/SecantePage';
import { PuntoFijoPage } from '../components/pages/PuntoFijoPage';
import { JacobiPage } from '../components/pages/JacobiPage';

export const MetodosRouter = () => {
  return (
    <Routes>
        <Route path="secante" element={<SecantePage/>}/>
        <Route path="punto-fijo" element={<PuntoFijoPage/>}/>
        <Route path="jacobi" element={<JacobiPage/>}/>
        <Route path="*" element={<Navigate to={'secante'}/>}/>
    </Routes>
  )
}
