import { MathNode, abs } from 'mathjs';
import { JacobiRes } from '../types/iterations';

export const solveByJacobi = (fx: MathNode, fy: MathNode, fz: MathNode, e:number) => {
    // Valores iniciales
    let x0 = 0;
    let y0 = 0;
    let z0 = 0;
    // Variables para los valores siguientes
    let x1 = 0;
    let y1 = 0;
    let z1 = 0;
    // Variables para contar iteraciones y el error
    let index = 0;
    let error = 1;
    const iterations: JacobiRes[] = [];
    while (error > e) {
        x0 = x1;
        y0 = y1;
        z0 = z1;
        x1 = Number((fx.evaluate({y: y0, z: z0})).toFixed(3));
        y1 = Number(fy.evaluate({x: x0, z: z0}).toFixed(3));
        z1 = Number(fz.evaluate({x: x0, y: y0}).toFixed(3));
        error = abs(x1-x0)+abs(y1-y0)+abs(z1-z0);
        index++;
        const iteration: JacobiRes = {
            x0,
            y0,
            z0,
            x1,
            y1,
            z1,
            index,
            continue: (error <= e ? 'Si' : 'No')
        }
        iterations.push(iteration);
    }
    return iterations;
}