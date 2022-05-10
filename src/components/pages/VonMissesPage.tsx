import React, { useState } from 'react';
import { Progress } from 'reactstrap';
import { VonMissesRes, VonMissesSolutionRes } from '../../types/iterations';
import { DynamicInput, DynamicTableContent } from '../../types/ui';
import { DynamicForm } from '../ui/DynamicForm';
import { DynamicTable } from '../ui/DynamicTable';

const formContent: DynamicInput[] = [
  { name: 'ecuation', type: 'text', label: 'Ecuación a resolver' },
  { name: 'x0', label: 'Valor de x0', type: 'number' },
  { name: 'error', type: 'number', label: '% de error' }
];

const formatTable = (rows: VonMissesRes[]): JSX.Element[] => {
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
  ));
};

const setTableData = (data: VonMissesRes[]) => {
  const tableData: DynamicTableContent = {
    headers: [
      { key: 'index', label: 'Iteracion' },
      { key: 'x0', label: 'x_{n-1}' },
      { key: 'fx', label: "f(x_{n})" },
      { key: 'dfx', label: "f'(x_{n})" },
      { key: 'x1', label: "x_{n+1}" },
      { key: 'error', label: '|x_{0}-x_{n+1}|' },
      { key: 'continue', label: '|x_{0}-x_{n+1}| < ε' }
    ],
    rows: formatTable(data)
  };
  return tableData;
};

export const VonMissesPage = () => {

  const initialState: VonMissesSolutionRes = {
    data: [],
    solution: 0
  };

  const [res, setRes] = useState<VonMissesSolutionRes>(initialState);
  const [loading, setLoading] = useState(false);
  const { data, solution } = res;
  const { headers, rows } = setTableData(data);

  return (
    <div className='animate__animated animate__fadeIn'>
      <h3>Método de Von Misses</h3>
      <DynamicForm inputs={formContent} method={'von-misses'} returnData={(data) => setRes(data)}
          cleanData={() => setRes(initialState)} setLoading={(loading) => setLoading(loading)} />
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