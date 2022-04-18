import { parse } from 'mathjs';
import { solveBySecante } from './solveBySecante';
import { solveByPuntoFijo } from './solveByPuntoFIjo';
import { SecanteSolutionRes, PuntoFijoSolutionRes, SystemEcuationSolution, JacobiSolutionRes } from '../types/iterations';
import { solveByJacobi } from './solveByJacobi';

export const selectMethod = (method: string, formData: any) => {
    switch (method) {
        case 'secante':
            const fx = parse(formData.ecuation);
            const x0 = Number(formData.x0);
            const x1 = Number(formData.x1);
            const e = Number(formData.error);
            const dataSecante = solveBySecante(fx, x0, x1, e);
            const solIteration = dataSecante.find(item => item.continue === 'Si');
            const solutionSecante = solIteration ? solIteration.x2 : 0;
            const secanteSolution: SecanteSolutionRes = {
                data: dataSecante,
                solution: solutionSecante
            };
            return secanteSolution;
        case 'punto-fijo':
            const gx = parse(formData.transformed);
            const x = Number(formData.x0);
            const e1 = Number(formData.error);
            const dataPuntoFijo = solveByPuntoFijo(gx,x,e1);
            const solIteration2 = dataPuntoFijo.find(item => item.continue === 'Si');
            const solutionPuntoFijo = solIteration2 ? solIteration2.x1 : 0;
            const puntoFijoSolution: PuntoFijoSolutionRes = {
                data: dataPuntoFijo,
                solution: solutionPuntoFijo
            };
            return puntoFijoSolution;
        case 'jacobi':
            const ex = parse(formData.ex);
            const ey = parse(formData.ey);
            const ez = parse(formData.ez);
            const error = Number(formData.error);
            const dataJacobi = solveByJacobi(ex,ey,ez,error);
            const solIteration3 = dataJacobi.find(item => item.continue === 'Si');
            console.log(solIteration3)
            const solutionJacobi: SystemEcuationSolution = solIteration3 ? { x: solIteration3.x1, y: solIteration3.y1, z: solIteration3.z1 } : { x:0, y:0, z:0 };
            const jacobiSolution: JacobiSolutionRes = {
                data: dataJacobi,
                solution: solutionJacobi
            };
            return jacobiSolution;
    }
}
