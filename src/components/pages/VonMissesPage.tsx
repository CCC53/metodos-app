import React from 'react'
import { parse } from 'mathjs';
import { NavBar } from '../ui/NavBar';
import { solveByVonMisses } from '../../helpers/solveByVonMisses';

export const VonMissesPage = () => {
  const f = parse('cos(x)-x^2');
  const test = solveByVonMisses(f,1,0.001);

  return (
    <>
      <NavBar/>
      <h1>Ecuacion: cos(x)-x^2</h1>
      <table>
        <thead>
          <tr>
            <th>Iteracion</th>
            <th>xn</th>
            <th>f(xn)</th>
            <th>f'(xn)</th>
            <th>xn+1=xn-f(xn)/f'(xn)</th>
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
                <td>{iteration.fx}</td>
                <td>{iteration.dfx}</td>
                <td>{iteration.x1}</td>
                <td>{iteration.error}</td>
                <td>{iteration.continue}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </>
  )
}
