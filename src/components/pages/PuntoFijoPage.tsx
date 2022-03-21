import React from 'react'
import Latex from "react-latex-next";
import { parse } from 'mathjs';
import { solveByPuntoFijo } from '../../helpers/solveByPuntoFIjo';
import { DynamicTable } from '../ui/DynamicTable';
import { DynamicTableContent } from '../../types/dynamicTable';
import { PuntoFijoRes } from '../../types/iterations';
import { NavBar } from '../ui/NavBar';

const formatTable = (rows: PuntoFijoRes[]): JSX.Element[] => {
  return rows.map(row => (
    <tr key={row.index}>
      <td>{row.index}</td>
      <td>{row.x0}</td>
      <td>{row.x1}</td>
      <td>{row.error}</td>
      <td>{row.continue}</td>
    </tr>
  ))
}

export const PuntoFijoPage = () => {
  const fx = parse('cos(x)-x^2');
  const gx = parse('sqrt(cos(x))');
  const data = solveByPuntoFijo(gx, 0.75, 0.001);
  const solution = data.find(iteration => iteration.continue === 'Si');
  const tableData: DynamicTableContent = {
    headers: [
      { key: 'index', label: 'Iteracion' },
      { key: 'x0', label: 'xn' },
      { key: 'x1', label: "xn+1" },
      { key: 'error', label: '|x0-xn+1|' },
      { key: 'continue', label: '|x0-xn+1| < e' }
    ],
    rows: formatTable(data)
  }

  return (
    <>
      <NavBar/>
      <h2>Ecuacion: {<Latex>{`$${fx.toTex()}$`}</Latex>}</h2>
      <br/>
      <h2><Latex>{`$g(x)=${gx.toTex()}$`}</Latex></h2>
      <DynamicTable headers={tableData.headers} rows={tableData.rows}/>
      <h3>{ solution && `La solucion de la ecuacion es ${solution.x1}`}</h3>
    </>
  )
}