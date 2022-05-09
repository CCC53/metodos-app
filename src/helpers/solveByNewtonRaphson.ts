import { MathNode, abs, derivative } from 'mathjs';
import { NewtonRaphsonRes } from '../types/iterations';

export const solveByNewtonRaphson = (f:MathNode, x0:number, e:number) => {
    let error = 1;
    let index = 0;
    const iterations: NewtonRaphsonRes[] = [];
    while(error > e) {
        let x1 = 0;
        let fx = Number(f.evaluate({x:x0}).toFixed(6));
        let dfx = Number(derivative(f.toString(), 'x').evaluate({x:x0}).toFixed(6));
        x1 = Number((x0-(fx/dfx)).toFixed(6));
        error = Number(abs(x1-x0).toFixed(6));
        index++;
        const iteration: NewtonRaphsonRes = {
            index,
            fx,
            dfx,
            x0,
            x1,
            error,
            continue: (error < e ? 'Si' : 'No')
        }
        iterations.push(iteration);
        x0 = x1;
    }
    return iterations;
}
