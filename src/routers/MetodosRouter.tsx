import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom';
import { SecantePage } from '../components/pages/SecantePage';
import { PuntoFijoPage } from '../components/pages/PuntoFijoPage';
import { JacobiPage } from '../components/pages/JacobiPage';
import { GaussSeidelPage } from '../components/pages/GaussSeidelPage';
import { BiseccionPage } from '../components/pages/BiseccionPage';
import { NewtonRaphsonPage } from '../components/pages/NewtonRaphsonPage';
import { VonMissesPage } from '../components/pages/VonMissesPage';
import { LagrangePage } from '../components/pages/LagrangePage';

export const MetodosRouter = () => {
  return (
    <Routes>
        <Route path="biseccion" element={<BiseccionPage/>}/>
        <Route path="newton-raphson" element={<NewtonRaphsonPage/>}/>
        <Route path="von-misses" element={<VonMissesPage/>} />
        <Route path="secante" element={<SecantePage/>}/>
        <Route path="punto-fijo" element={<PuntoFijoPage/>}/>
        <Route path="jacobi" element={<JacobiPage/>}/>
        <Route path="gauss-seidel" element={<GaussSeidelPage/>}/>
        <Route path="interpolacion-lagrange" element={<LagrangePage/>}/>
        <Route path="*" element={<Navigate to={'biseccion'}/>}/>
    </Routes>
  )
}