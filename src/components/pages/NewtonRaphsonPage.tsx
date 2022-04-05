import React from 'react'
import { parse } from 'mathjs';
import Latex from "react-latex-next";
import { NavigationBar } from '../ui/NavigationBar';
import { solveByNewtonRaphson } from '../../helpers/solveByNewtonRaphson';
import { DynamicTable } from '../ui/DynamicTable';
import { NewtonRaphsonRes } from '../../types/iterations';
import { DynamicTableContent } from '../../types/ui';

const formatTable = (rows: NewtonRaphsonRes[]): JSX.Element[] => {
  return rows.map(row => (
    <tr key={row.index}>
      <td>{row.index}</td>
      <td>{row.x0}</td>
      <td>{row.fx}</td>
      <td>{row.dfx}</td>
      <td>{row.x1}</td>
      <td>{row.error}</td>
      <td>{row.continue}</td>
    </tr>
  ))
}

export const NewtonRaphsonPage = () => {
  const fx = parse('cos(x)-x^2');
  const data = solveByNewtonRaphson(fx,1,0.001);
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
    <div className='animate__animated animate__fadeIn'>
      <NavigationBar/>
      <h2>Ecuacion: {<Latex>{`$${fx.toTex()}$`}</Latex>}</h2>
      <DynamicTable headers={tableData.headers} rows={tableData.rows}/>
      <h3>{ solution && `La solucion de la ecuacion es ${solution.x1}`}</h3>
    </div>
  )
}
