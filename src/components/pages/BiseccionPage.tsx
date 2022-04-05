import React from 'react';
import { NavigationBar } from '../ui/NavigationBar';
import { DynamicInput, DynamicTableContent } from '../../types/ui';
import { DynamicForm } from '../ui/DynamicForm';
import { useState } from 'react';
import { BiseccionSolutionRes, BissectionRes } from '../../types/iterations';
import { DynamicTable } from '../ui/DynamicTable';
import { Progress } from 'reactstrap';

const formContent: DynamicInput[] = [
  { name: 'ecuation', type: 'text', label: 'Ecuacion a resolver' },
  { name: 'pointA', type: 'number', label: 'Valor de A' },
  { name: 'pointB', type: 'number', label: 'Valor de B' },
  { name: 'error', type: 'number', label: '% de error' }
];

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
  ));
};

const setTableData = (data: BissectionRes[]) => {
  const tableData: DynamicTableContent = {
    headers: [
      { key: 'index', label:'Iteracion' },
      { key: 'x0', label: 'x_{0}' },
      { key: 'x1', label: 'x_{1}' },
      { key: 'm', label: 'm' },
      { key: 'change', label: "f(x_{0})*f(x_{n+1})" },
      { key: 'error', label: '|x_{0}-x_{n+1}|' },
      { key: 'continue', label: '|x_{0}-x_{n+1}| < ε' }
    ],
    rows: formatTable(data)
  }
  return tableData;
}

export const BiseccionPage = () => {

  const initialState: BiseccionSolutionRes = {
    data: [],
    solution: 0
  };

  const [res, setData] = useState<BiseccionSolutionRes>(initialState);
  const [loading, setLoading] = useState(false);
  const { data, solution } = res;
  const { headers, rows } = setTableData(data);

  return (
    <div className='animate__animated animate__fadeIn'>
      <NavigationBar/>
      <h3>Método de bisección</h3>
      <DynamicForm inputs={formContent} method={'biseccion'} returnData={(data) => setData(data)}
          cleanData={() => setData(initialState)} setLoading={(loading) => setLoading(loading)} />
      <div className="main-container animate__animated animate__fadeIn">
        {
          loading ? <Progress animated color="primary" value="100"/> : (
            data.length > 0 && (
              <div className="animate__animated animate__fadeIn">
                <DynamicTable headers={headers} rows={rows}/>
                <h4>La solucion es {solution}</h4>
              </div>
            )
          )
        }
      </div>
    </div>
  );
}
