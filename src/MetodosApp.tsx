import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { PortadaPage } from './components/pages/PortadaPage';
import { NavigationBar } from './components/ui/NavigationBar';
import { MetodosRouter } from './routers/MetodosRouter';

export const MetodosApp = () => {
  console.log(process.env.NODE_ENV);
  return (
    <Router>
      <NavigationBar/>
        <Routes>
          <Route path="/" element={<PortadaPage/>} />
          <Route path="metodos/*" element={<MetodosRouter/>}/>
          <Route path="*" element={<Navigate to={'/'}/>}/>
        </Routes>
    </Router>
  )
}