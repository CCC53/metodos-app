import React from 'react';
import { Button, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import { DynamicFormContent } from '../../types/ui';
import { useForm } from '../../hooks/useForm';
import { selectMethod } from '../../helpers/selectMethod';

export const DynamicForm = ({ inputs, method, returnData, cleanData, setLoading }: DynamicFormContent) => {

  const initialState: any = {};

  inputs.forEach(input => {
    Object.defineProperty(initialState, input.name, {
      value: '',
      writable: true,
      enumerable: true,
      configurable: true
    });
  });

  const [formValues, handleInputChange, reset] = useForm(initialState);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true)
    setTimeout(() => {
      const data = selectMethod(method, formValues);
      returnData(data);
      setLoading(false);
    }, 500);
  }

  const handleReset = () => {
    reset(initialState);
    cleanData();
  }

  return (
    <div className='form'>
      <Form onSubmit={handleSubmit}>
        <Row>
          {
            inputs.map(({name, type, label}, index) => (
              <Col md={4} key={index}>
                <FormGroup floating>
                  <Input name={name} type={type} step="any" onChange={handleInputChange} value={formValues[name]}/>
                  <Label>{label}</Label>
                </FormGroup>
              </Col>
            ))
          }
        </Row>
        <div className='d-flex justify-content-evenly buttons'>
          <Button type='submit' color='outline-primary'>Resolver</Button>
          <Button type='button' color='outline-danger' onClick={handleReset}>Limpiar</Button>
        </div>
      </Form>
    </div>
  )
}