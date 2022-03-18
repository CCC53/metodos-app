import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { PortadaPage } from './components/pages/PortadaPage';
import { MetodosRouter } from './routers/MetodosRouter';

export const MetodosApp = () => {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<PortadaPage/>} />
          <Route path="metodos/*" element={<MetodosRouter/>}/>
          <Route path="*" element={<Navigate to={'/'}/>}/>
        </Routes>
    </Router>
  )
}
