import React from 'react'
import { useState } from 'react';
import { Progress } from 'reactstrap';
import { DynamicForm } from '../ui/DynamicForm';
import { DynamicTable } from '../ui/DynamicTable';
import { NavigationBar } from '../ui/NavigationBar';
import { SecanteRes, SecanteSolutionRes } from '../../types/iterations';
import { DynamicTableContent, DynamicInput } from '../../types/ui';

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
  ));
};

const formContent: DynamicInput[] = [
  { name: 'ecuation', type: 'text', label: 'Ecuación a resolver' },
  { name: 'x0', label: 'Valor de xn-1', type: 'number' },
  { name: 'x1', label: 'Valor de xn', type: 'number' },
  { name: 'error', type: 'number', label: '% de error' }
];

const setTableData = (data: SecanteRes[]) => {
  const tableData: DynamicTableContent = {
    headers: [
      { key: 'index', label: 'Iteracion' },
      { key: 'x0', label: 'x_{n-1}' },
      { key: 'x1', label: 'x_{n}' },
      { key: 'fx0', label: "f(x_{n-1})" },
      { key: 'fx1', label: "f(x_{n})" },
      { key: 'x2', label: "x_{n+1}" },
      { key: 'error', label: '|x_{0}-x_{n+1}|' },
      { key: 'continue', label: '|x_{0}-x_{n+1}| < ε' }
    ],
    rows: formatTable(data)
  };
  return tableData;
};

export const SecantePage = () => {

  const initialState: SecanteSolutionRes = {
    data: [],
    solution: 0
  };

  const [res, setData] = useState<SecanteSolutionRes>(initialState);
  const [loading, setLoading] = useState(false);
  const { data, solution } = res;
  const { headers, rows } = setTableData(data);

  return (
    <div className='animate__animated animate__fadeIn'>
      <NavigationBar/>
      <h3>Método de la secante</h3>
      <DynamicForm inputs={formContent} method={'secante'} returnData={(data) => setData(data)}
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