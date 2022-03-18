import React from 'react';
import { parse } from 'mathjs';
import { NavBar } from '../ui/NavBar';
import { solveByBiseccion } from '../../helpers/solveByBiseccion';
import { BissectionRes } from '../../types/iterations';
import { DynamicTable } from '../ui/DynamicTable';
import { DynamicTableContent } from '../../types/dynamicTable';

const formatTable = (rows: BissectionRes[]): JSX.Element[] => {
  return rows.map(row => (
    <tr key={row.index}>
      <td>{row.index}</td>
      <td>{row.x0}</td>
      <td>{row.x1}</td>
      <td>{row.m}</td>
      <td>{row.change}</td>
      <td>{row.error}</td>
      <td>{row.continue}</td>
    </tr>
  ))
}

export const BiseccionPage = () => {
  const f = parse('cos(x)^2-2sin(x)');
  const data = solveByBiseccion(f,0,1,0.001);
  const solution = data && data.find(iteration => iteration.continue === 'Si');
  const tableData: DynamicTableContent = {
    headers: [
      { key: 'index', label:'Iteracion' },
      { key: 'x0', label: 'x0' },
      { key: 'x1', label: 'x1' },
      { key: 'm', label: 'm' },
      { key: 'change', label: "f(x0)*f(xn+1)" },
      { key: 'error', label: '|x0-xn+1|' },
      { key: 'continue', label: '|x0-xn+1| < e' }
    ],
    rows: data ? formatTable(data) : []
  }
  
  return (
    <>
      <NavBar/>
      <h1>Ecuacion: cos(x)^2-2sin(x)</h1>
      {
        !data ? <h1>La funcion no cambia de signo</h1> : (
          <div>
            <DynamicTable headers={tableData.headers} rows={tableData.rows} />
            <h3>{solution && `La solucion de la ecuacion es ${solution.m}`}</h3>
          </div>
        )
      }
    </>
  )
}
