import React, { useState } from 'react';
import { Progress } from 'reactstrap';
import { DynamicForm } from '../ui/DynamicForm';
import { DynamicTable } from '../ui/DynamicTable';
import { NavigationBar } from '../ui/NavigationBar'
import { GaussSeidelRes, GaussSeidelSolutionRes } from '../../types/iterations';
import { DynamicInput, DynamicTableContent } from '../../types/ui';

const formatTable = (rows: GaussSeidelRes[]): JSX.Element[] => {
  return rows.map(row => (
    <tr key={row.index}>
      <td>{row.index}</td>
      <td>{row.x0}</td>
      <td>{row.y0}</td>
      <td>{row.z0}</td>
      <td>{row.x1}</td>
      <td>{row.y1}</td>
      <td>{row.z1}</td>
    </tr>
  ));
};

const formContent: DynamicInput[] = [
  { name: 'ex', type: 'text', label: 'Despeje de x' },
  { name: 'ey', type: 'text', label: 'Despeje de y' },
  { name: 'ez', type: 'text', label: 'Despeje de z' },
  { name: 'error', type: 'number', label: '% de error' }
];

const setTableData = (data: GaussSeidelRes[]) => {
  const tableData: DynamicTableContent = {
    headers: [
      { key: 'index', label: 'Iteracion' },
      { key: 'x0', label: 'x_{n-1}' },
      { key: 'y0', label: 'y_{n-1}' },
      { key: 'z0', label: 'z_{n-1}' },
      { key: 'x1', label: "x_{n+1}" },
      { key: 'y1', label: "y_{n+1}" },
      { key: 'z1', label: "z_{n+1}" },
    ],
    rows: formatTable(data)
  }
  return tableData;
}

export const GaussSeidelPage = () => {
  
  const initialState: GaussSeidelSolutionRes = {
    data: [],
    solution: {
        x: 0,
        y: 0,
        z: 0
    }
  }

  const [res, setData] = useState<GaussSeidelSolutionRes>(initialState);
  const [loading, setLoading] = useState<boolean>(false);
  const { data, solution } = res;
  const { headers, rows } = setTableData(data);

  return (
    <div className='animate__animated animate__fadeIn'>
      <NavigationBar/>
      <h3>Método de Gauss Seidel</h3>
      <DynamicForm inputs={formContent} method={'gauss-seidel'} returnData={(data) => setData(data)}
           cleanData={() => setData(initialState)} setLoading={(loading) => setLoading(loading)}/>
        <div className="main-container animate__animated animate__fadeIn">
          {
            loading ? <Progress animated color="primary" value="100"/> : (
              data.length > 0 && (
                <div className="animate__animated animate__fadeIn">
                  <DynamicTable headers={headers} rows={rows}/>
                  <h4>La solución a este sistema de ecuaciones es: <pre>{JSON.stringify(solution, null, 2)}</pre></h4>
                </div>
              )
            )
          }
        </div>
    </div>
  )
}