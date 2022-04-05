import { solveByBiseccion } from './solveByBiseccion';
import { parse } from 'mathjs';
import { BiseccionSolutionRes } from '../types/iterations';

export const selectMethod = (method: string, formData: any) => {
    switch (method) {
        case 'biseccion':
            const fx = parse(formData.ecuation);
            const a = Number(formData.pointA);
            const b = Number(formData.pointB);
            const e = Number(formData.error);
            const data = solveByBiseccion(fx,a,b,e);
            const solIteration = data.find(item => item.continue === 'Si');
            const solution = solIteration ? solIteration.m : 0;
            const biseccionSolution: BiseccionSolutionRes = {
                data,
                solution
            }
            return biseccionSolution;
    
        default:
            break;
    }
}
