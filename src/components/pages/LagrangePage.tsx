import React, { useState } from 'react';
import { DynamicInput } from '../../types/ui';
import { DynamicForm } from '../ui/DynamicForm';
import { LagrangeSolutionRes } from '../../types/iterations';
import { Progress } from 'reactstrap';
import { LineGraph } from '../ui/LineGraph';

const formContent: DynamicInput[] = [
  { name: 'xi', type: 'text', label: 'Valores de x' },
  { name: 'fi', type: 'text', label: 'Valores de y' },
  { name: 'x', type: 'number', label: 'Valor de x a interpolar' }
];

export const LagrangePage = () => {

  const initialState: LagrangeSolutionRes = {
    xi: [],
    fi: [],
    x: 0,
    xL: 0
  };

  const [data, setRes] = useState<LagrangeSolutionRes>(initialState);
  const { xL, x } = data;
  const [loading, setLoading] = useState(false);
  
  return (
    <div className='animate__animated animate__fadeIn'>
      <h3>Método de la Interpolación de Lagrange</h3>
      <DynamicForm inputs={formContent} method={'interpolacion-lagrange'} returnData={(data) => setRes(data)}
          cleanData={() => setRes(initialState)} setLoading={(loading) => setLoading(loading)} />
      <div className="main-container animate__animated animate__fadeIn">
        {
          loading ? <Progress animated color="primary" value="100"/> : (
            xL !== 0 && (
              <div className="animate__animated animate__fadeIn">
                <LineGraph data={data} title={'Interpolación de Lagrange'}/>
                <h4>{`El valor aproximado de f(${x}) es de ${xL}`}</h4>
              </div>
            )
          )
        }
      </div>
    </div>
  )
}