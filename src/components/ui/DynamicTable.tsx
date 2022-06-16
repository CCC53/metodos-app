import React from 'react';
import { Table } from 'reactstrap';
import Latex from "react-latex-next";
import { DynamicTableContent } from '../../types/ui';

export const DynamicTable = ({headers, rows}:DynamicTableContent) => {
  return (
    <Table bordered>
      <thead>
        <tr>
          {
            headers.map(({key, label}) => <th key={key}><Latex>{`$${label}$`}</Latex></th>)
          }
        </tr>
      </thead>
      <tbody>
          {
            rows
          }
      </tbody>
    </Table>
  )
}