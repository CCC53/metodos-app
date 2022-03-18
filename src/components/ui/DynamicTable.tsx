import React from 'react'
import { Table } from 'reactstrap';
import { DynamicTableContent } from '../../types/dynamicTable';

export const DynamicTable = ({headers, rows}:DynamicTableContent) => {

  return (
    <Table bordered>
      <thead>
        <tr>
          {
            headers.map(({key, label}) => <th key={key}>{label}</th>)
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