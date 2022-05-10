import React, { useState } from 'react';
import { DynamicInput, DynamicTableContent } from '../../types/ui';
import { BiseccionSolutionRes, BisseccionRes } from '../../types/iterations';
import { DynamicForm } from '../ui/DynamicForm';
import { DynamicTable } from '../ui/DynamicTable';
import { Progress } from 'reactstrap';

const formContent: DynamicInput[] = [
  { name: 'ecuation', type: 'text', label: 'Ecuación a resolver' },
  { name: 'a', label: 'Valor de a', type: 'number' },
  { name: 'b', label: 'Valor de b', type: 'number' },
  { name: 'error', type: 'number', label: '% de error' }
];

const formatTable = (rows: BisseccionRes[]): JSX.Element[] => {
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
  ));
};

const setTableData = (data: BisseccionRes[]) => {
  const tableData: DynamicTableContent = {
    headers: [
      { key: 'index', label: 'Iteracion' },
      { key: 'x0', label: 'x_{n-1}' },
      { key: 'x1', label: 'x_{n}' },
      { key: 'm', label: "m" },
      { key: 'change', label: "f(x_{n-1})*f(x_{n})" },
      { key: 'error', label: '|x_{0}-x_{n+1}|' },
      { key: 'continue', label: '|x_{0}-x_{n+1}| < ε' }
    ],
    rows: formatTable(data)
  };
  return tableData;
};

export const BiseccionPage = () => {

  const initialState: BiseccionSolutionRes = {
    data: [],
    solution: 0
  }

  const [res, setRes] = useState<BiseccionSolutionRes>(initialState);
  const [loading, setLoading] = useState(false);
  const { data, solution } = res;
  const { headers, rows } = setTableData(data);

  return (
    <div className='animate__animated animate__fadeIn'>
      <h3>Método de Bisección</h3>
      <DynamicForm inputs={formContent} method={'biseccion'} returnData={(data) => setRes(data)}
             cleanData={() => setRes(initialState)} setLoading={(loading) => setLoading(loading)}/>
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