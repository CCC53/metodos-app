import { parse } from 'mathjs';
import { solveBySecante } from './solveBySecante';
import { solveByPuntoFijo } from './solveByPuntoFIjo';
import { SecanteSolutionRes, PuntoFijoSolutionRes } from '../types/iterations';

export const selectMethod = (method: string, formData: any) => {
    switch (method) {
        case 'secante':
            const fx = parse(formData.ecuation);
            const x0 = Number(formData.x0);
            const x1 = Number(formData.x1);
            const e = Number(formData.error);
            const data = solveBySecante(fx, x0, x1, e);
            const solIteration = data.find(item => item.continue === 'Si');
            const solution = solIteration ? solIteration.x2 : 0;
            const secanteSolution: SecanteSolutionRes = {
                data,
                solution
            }
            return secanteSolution;
        case 'punto-fijo':
            const gx = parse(formData.transformed);
            const x = Number(formData.x0);
            const e1 = Number(formData.error);
            const data2 = solveByPuntoFijo(gx,x,e1);
            const solIteration2 = data2.find(item => item.continue === 'Si');
            const solution3 = solIteration2 ? solIteration2.x1 : 0;
            const puntoFijoSolution: PuntoFijoSolutionRes = {
                data: data2,
                solution: solution3
            }
            return puntoFijoSolution;
        default:
            break;
    }
}
