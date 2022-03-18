import React from 'react';
import { parse } from 'mathjs';
import { NavBar } from '../ui/NavBar';
import { solveByBiseccion } from '../../helpers/solveByBiseccion';


export const BiseccionPage = () => {
  const f = parse('cos(x)^2-2sin(x)');
  const test = solveByBiseccion(f,0,1,0.001);

  return (
    <>
      <NavBar/>
      {
        !test ? <h1>La funcion no cambia de signo</h1> : (
          <div>
          <h1>Ecuacion: cos(x)^2-2sin(x)</h1>
          <table>
              <thead>
                <tr>
                  <th>Iteracion</th>
                  <th>x0</th>
                  <th>x1</th>
                  <th>m</th>
                  <th>f(x0)*f(xn+1)</th>
                  <th>|x0-xn+1|</th>
                  <th>{'|x0-xn+1| < e'}</th>
                </tr>
              </thead>
              <tbody>
                {
                  test.map(iteration => (
                    <tr key={iteration.index}>
                      <td>{iteration.index}</td>
                      <td>{iteration.x0}</td>
                      <td>{iteration.x1}</td>
                      <td>{iteration.m}</td>
                      <td>{iteration.change}</td>
                      <td>{iteration.error}</td>
                      <td>{iteration.continue}</td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
        )
      }
    </>
  )
}
