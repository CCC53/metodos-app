import React, { useState } from 'react';
import { Progress } from 'reactstrap';
import { DynamicForm } from '../ui/DynamicForm';
import { DynamicTable } from '../ui/DynamicTable';
import { DynamicTableContent, DynamicInput } from '../../types/ui';
import { PuntoFijoRes, PuntoFijoSolutionRes } from '../../types/iterations';

const formatTable = (rows: PuntoFijoRes[]): JSX.Element[] => {
  return rows.map(row => (
    <tr key={row.index}>
      <td>{row.index}</td>
      <td>{row.x0}</td>
      <td>{row.x1}</td>
      <td>{row.error}</td>
      <td>{row.continue}</td>
    </tr>
  ));
};

const formContent: DynamicInput[] = [
  { name: 'transformed', type: 'text', label: 'Transformación de la función' },
  { name: 'x0', type: 'number', label: 'Valor inicial' },
  { name: 'error', type: 'number', label: '% de error' }
];

const setTableData = (data: PuntoFijoRes[]) => {
  const tableData: DynamicTableContent = {
    headers: [
      { key: 'index', label: 'Iteracion' },
      { key: 'x0', label: 'x_{n}' },
      { key: 'x1', label: "x_{n+1}" },
      { key: 'error', label: '|x_{n}-x_{n+1}|' },
      { key: 'continue', label: '|x_{n}-x_{n+1}| < ε' }
    ],
    rows: formatTable(data)
  }
  return tableData;
}

export const PuntoFijoPage = () => {

  const initialState: PuntoFijoSolutionRes = {
    data: [],
    solution: 0
  }

  const [res, setData] = useState<PuntoFijoSolutionRes>(initialState);
  const [loading, setLoading] = useState(false);
  const { data, solution } = res;
  const { headers, rows } = setTableData(data);

  return (
    <div className='animate__animated animate__fadeIn'>
      <h3>Método de punto fijo</h3>
      <DynamicForm inputs={formContent} method={'punto-fijo'} returnData={(data) => setData(data)}
          cleanData={() => setData(initialState)} setLoading={(loading) => setLoading(loading)} />
      <div className="main-container animate__animated animate__fadeIn">
        {
          loading ? <Progress animated color="primary" value="100"/> : (
            data.length > 0 && (
              <div className="animate__animated animate__fadeIn">
                <DynamicTable headers={headers} rows={rows}/>
                <h4>Una posible solución a esta ecuación es {solution}</h4>
              </div>
            )
          )
        }
      </div>
    </div>
  )
}