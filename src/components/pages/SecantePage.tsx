import React from 'react'
import { parse } from 'mathjs';
import { NavBar } from '../ui/NavBar';
import { solveBySecante } from '../../helpers/solveBySecante';

export const SecantePage = () => {
  const f = parse('2x^2+1-e^x');
  const test = solveBySecante(f,0.5,1,0.001);

  return (
    <>
      <NavBar/>
      <h1>Ecuacion: 2x^2+1-e^x</h1>
      <table>
        <thead>
          <tr>
            <th>Iteracion</th>
            <th>xn-1</th>
            <th>xn</th>
            <th>f(xn-1)</th>
            <th>f(xn)</th>
            <th>xn+1</th>
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
                <td>{iteration.fx0}</td>
                <td>{iteration.fx1}</td>
                <td>{iteration.x2}</td>
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