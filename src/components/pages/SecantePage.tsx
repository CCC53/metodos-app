import React from 'react'
import { parse } from 'mathjs';
import { NavBar } from '../ui/NavBar';
import { solveBySecante } from '../../helpers/solveBySecante';
import { SecanteRes } from '../../types/iterations';
import { DynamicTableContent } from '../../types/dynamicTable';
import { DynamicTable } from '../ui/DynamicTable';

const formatTable = (rows: SecanteRes[]): JSX.Element[] => {
  return rows.map(row => (
    <tr key={row.index}>
      <td>{row.index}</td>
      <td>{row.x0}</td>
      <td>{row.x1}</td>
      <td>{row.fx0}</td>
      <td>{row.fx1}</td>
      <td>{row.x2}</td>
      <td>{row.error}</td>
      <td>{row.continue}</td>
    </tr>
  ))
}

export const SecantePage = () => {
  const f = parse('2x^2+1-e^x');
  const data = solveBySecante(f,0.5,1,0.001);
  const solution = data.find(iteration => iteration.continue === 'Si');
  const tableData: DynamicTableContent = {
    headers: [
      { key: 'index', label: 'Iteracion' },
      { key: 'x0', label: 'xn-1' },
      { key: 'x1', label: 'xn' },
      { key: 'fx0', label: "f(xn-1)" },
      { key: 'fx1', label: "f(xn)" },
      { key: 'x2', label: "xn+1" },
      { key: 'error', label: '|x0-xn+1|' },
      { key: 'continue', label: '|x0-xn+1| < e' }
    ],
    rows: formatTable(data)
  }


  return (
    <>
      <NavBar/>
      <h1>Ecuacion: 2x^2+1-e^x</h1>
      <DynamicTable headers={tableData.headers} rows={tableData.rows}/>
      <h3>{ solution && `La solucion de la ecuacion es ${solution.x2}`}</h3>
    </>
  )
}