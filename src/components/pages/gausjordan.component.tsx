import { matrix } from "mathjs";
import React from "react";
import { DynamicForm } from "../ui/DynamicForm";
import { Button, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";

import { NavigationBar } from "../ui/NavigationBar";

export const GaussjordanComponent: React.FC = (): JSX.Element => {
  const [matriz, setMatriz] = React.useState<any>({
    filas: 0,
    columnas: 0,
  });

  const [matrizGenerated, SetMatrizFenerate] = React.useState<any[]>([]);
  const handleInputChange = (e: any) => {
    setMatriz({
      ...matriz,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="animate__animated animate__fadeIn">
      <NavigationBar />
      <h1>Jordan</h1>
      <div className="container">
        <Label htmlFor="filas">{"filas"}</Label>
        <Input
          name={"filas"}
          type="number"
          step="any"
          onChange={handleInputChange}
        />
        <br />
        <br />
        <br />
        <Label htmlFor="columnas">{"columnas"}</Label>
        <Input
          name={"columnas"}
          type="number"
          step="any"
          onChange={handleInputChange}
        />
        <Button
          name={"columnas"}
          onClick={() => {
            const matrizNueva = new Array(Number(matriz.filas)).fill(0);
            for (var i = 0; i < Number(matriz.filas); i++) {
              matrizNueva[i] = new Array(Number(matriz.columnas)).fill(0);
            }
            SetMatrizFenerate(matrizNueva);
          }}
        />

        <div>
          {matrizGenerated.map((element, index: any) => (
            <div key={index} style={{ display: "flex" }}>
              {element.map((el: any, indexSubArray: any) => (
                <div key={indexSubArray}>
                  <Input
                    style={{ width: 70 }}
                    name={"columnas"}
                    type="number"
                    step="any"
                    defaultValue={el}
                    onChange={(eve) => {
                      element[indexSubArray] = Number(eve.target.value);

                      SetMatrizFenerate((oldState) => {
                        return matrizGenerated;
                      });
                    }}
                  />
                </div>
              ))}

                <div key={index+1}>
                  <Input
                    style={{ width: 70 }}
                    name={"columnas"}
                    type="number"
                    step="any"
                    defaultValue={element}
                    onChange={(eve) => {
                      element = Number(eve.target.value);

                      SetMatrizFenerate((oldState) => {
                        return matrizGenerated;
                      });
                    }}
                  />
                </div>
            </div>
          ))}

          <Button
            name={"columnas"}
            onClick={() => {
              const diagonalMatriz: number[] = [];

              for (let i = 0; i < matrizGenerated.length; i++) {
                diagonalMatriz.push(matrizGenerated[i][i]);
              }

              let sumas = [];
              for (let i = 0; i < matrizGenerated.length; i++) {
                let res = 0;
                for (let j = -0; j <= matrizGenerated[i].length - 1; j++) {
                  if (!(i === j)) {
                    console.log(matrizGenerated[i][j]);
                  }
                }
                console.log("a");
              }
            }}
          >
            Calcular matriz
          </Button>
        </div>
      </div>
    </div>
  );
};
