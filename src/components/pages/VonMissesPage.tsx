import React from 'react'
import { parse } from 'mathjs';
import { NavBar } from '../ui/NavBar';
import { solveByVonMisses } from '../../helpers/solveByVonMisses';
import { DynamicTable } from '../ui/DynamicTable';
import { DynamicTableContent } from '../../types/dynamicTable';
import { VonMissesRes } from '../../types/iterations';

const formatTable = (row: VonMissesRes[]): JSX.Element[] => {
  return row.map(item => (
    <tr key={item.index}>
      <td>{item.index}</td>
      <td>{item.x0}</td>
      <td>{item.fx}</td>
      <td>{item.dfx}</td>
      <td>{item.x1}</td>
      <td>{item.error}</td>
      <td>{item.continue}</td>
    </tr>
  ))
}

export const VonMissesPage = () => {
  const f = parse('cos(x)-x^2');
  const data = solveByVonMisses(f,1,0.001);
  const solution = data.find(iteration => iteration.continue === 'Si');
  const tableData: DynamicTableContent = {
    headers: [
      { key: 'index', label:'Iteracion' },
      { key: 'x0', label: 'xn' },
      { key: 'fx', label: 'f(xn)' },
      { key: 'dfx', label: "f'(xn)" },
      { key: 'x1', label: "xn+1=xn-f(xn)/f'(xn)" },
      { key: 'error', label: '|x0-xn+1|' },
      { key: 'continue', label: '|x0-xn+1| < e' }
    ],
    rows: formatTable(data)
  }

  return (
    <>
      <NavBar/>
      <h1>Ecuacion: cos(x)-x^2</h1>
      <DynamicTable headers={tableData.headers} rows={tableData.rows}/>
      <h3>{ solution && `La solucion de la ecuacion es ${solution.x1}`}</h3>
    </>
  )
}
