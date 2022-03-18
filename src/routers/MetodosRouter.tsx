import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom';
import { BiseccionPage } from '../components/pages/BiseccionPage';
import { NewtonRaphsonPage } from '../components/pages/NewtonRaphsonPage';
import { VonMissesPage } from '../components/pages/VonMissesPage';
import { SecantePage } from '../components/pages/SecantePage';

export const MetodosRouter = () => {
  return (
    <Routes>
        <Route path="biseccion" element={<BiseccionPage/>}/>
        <Route path="newton-raphson" element={<NewtonRaphsonPage/>}/>
        <Route path="von-misses" element={<VonMissesPage/>}/>
        <Route path="secante" element={<SecantePage/>}/>
        <Route path="*" element={<Navigate to={'biseccion'}/>}/>
    </Routes>
  )
}
