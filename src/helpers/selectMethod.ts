import { parse } from 'mathjs';
import { solveByJacobi } from './solveByJacobi';
import { solveBySecante } from './solveBySecante';
import { solveByPuntoFijo } from './solveByPuntoFIjo';
import { solveByGaussSeidel } from './solveByGaussSeidel';
import { SecanteSolutionRes, PuntoFijoSolutionRes, SystemEcuationSolution, JacobiSolutionRes,
         GaussSeidelSolutionRes, BiseccionSolutionRes, NewtonRaphsonSolutionRes } from '../types/iterations';
import { solveByBiseccion } from './solveByBiseccion';
import { solveByNewtonRaphson } from './solveByNewtonRaphson';

export const selectMethod = (method: string, formData: any) => {
    switch (method) {
        case 'biseccion':
            const fx = parse(formData.ecuation);
            const a = Number(formData.a);
            const b = Number(formData.b);
            const e = Number(formData.error);
            const dataBiseccion = solveByBiseccion(fx,a,b,e);
            const solIteration0 = dataBiseccion.find(item => item.continue === 'Si');
            const solutionBiseccion = solIteration0 ? solIteration0.m : 0;
            const biseccionSolutionRes: BiseccionSolutionRes = {
                data: dataBiseccion,
                solution: solutionBiseccion
            }
            return biseccionSolutionRes;
        case 'newton-raphson': 
            const fx1 = parse(formData.ecuation);
            const xi = Number(formData.x0);
            const e2 = Number(formData.error);
            const dataNewtonRaphson = solveByNewtonRaphson(fx1, xi, e2);
            const solIteration1 = dataNewtonRaphson.find(item => item.continue === 'Si');
            const solutionNewtonRaphson = solIteration1 ? solIteration1.x1 : 0;
            const newtonRaphsonSolutionRes: NewtonRaphsonSolutionRes = {
                data: dataNewtonRaphson,
                solution: solutionNewtonRaphson
            }
            return newtonRaphsonSolutionRes; 
        case 'secante':
            const fx2 = parse(formData.ecuation);
            const x0 = Number(formData.x0);
            const x1 = Number(formData.x1);
            const error = Number(formData.error);
            const dataSecante = solveBySecante(fx2, x0, x1, error);
            const solIteration = dataSecante.find(item => item.continue === 'Si');
            const solutionSecante = solIteration ? solIteration.x2 : 0;
            const secanteSolutionRes: SecanteSolutionRes = {
                data: dataSecante,
                solution: solutionSecante
            };
            return secanteSolutionRes;
        case 'punto-fijo':
            const gx = parse(formData.transformed);
            const x = Number(formData.x0);
            const error2 = Number(formData.error);
            const dataPuntoFijo = solveByPuntoFijo(gx,x,error2);
            const solIteration2 = dataPuntoFijo.find(item => item.continue === 'Si');
            const solutionPuntoFijo = solIteration2 ? solIteration2.x1 : 0;
            const puntoFijoSolutionRes: PuntoFijoSolutionRes = {
                data: dataPuntoFijo,
                solution: solutionPuntoFijo
            };
            return puntoFijoSolutionRes;
        case 'jacobi':
            const ex = parse(formData.ex);
            const ey = parse(formData.ey);
            const ez = parse(formData.ez);
            const error3 = Number(formData.error);
            const dataJacobi = solveByJacobi(ex,ey,ez,error3);
            const solIteration3 = dataJacobi.find(item => item.continue === 'Si');
            const solutionJacobi: SystemEcuationSolution = solIteration3 ? { x: solIteration3.x1, y: solIteration3.y1, z: solIteration3.z1 } : { x:0, y:0, z:0 };
            const jacobiSolutionRes: JacobiSolutionRes = {
                data: dataJacobi,
                solution: solutionJacobi
            };
            return jacobiSolutionRes;
        case 'gauss-seidel':
            const exG = parse(formData.ex);
            const eyG = parse(formData.ey);
            const ezG = parse(formData.ez);
            const error4 = Number(formData.error);
            const dataGaussSeidel = solveByGaussSeidel(exG,eyG,ezG,error4);
            const solIteration4 = dataGaussSeidel.find(item => item.continue === 'Si');
            const solutionGauss: SystemEcuationSolution = solIteration4 ? { x: solIteration4.x1, y: solIteration4.y1, z: solIteration4.z1 } : { x:0, y:0, z:0 };
            const gaussSolutionRes: GaussSeidelSolutionRes = {
                data: dataGaussSeidel,
                solution: solutionGauss
            }
            return gaussSolutionRes;
    }
}