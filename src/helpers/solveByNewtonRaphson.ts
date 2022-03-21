import { MathNode, abs, derivative } from 'mathjs';
import { NewtonRaphsonRes } from '../types/iterations';

export const solveByNewtonRaphson = (f:MathNode, x0:number, e:number): NewtonRaphsonRes[] => {
    let error = 1;
    let index = 0;
    const iterations: NewtonRaphsonRes[] = [];
    while(error > e) {
        let x1 = 0;
        let fx = f.evaluate({x:x0});
        let dfx = derivative(f.toString(), 'x').evaluate({x:x0});
        x1 = x0-(fx/dfx);
        error = abs(x1-x0);
        index++;
        const iteration: NewtonRaphsonRes = {
            index,
            fx: Number(fx.toFixed(6)),
            dfx: Number(dfx.toFixed(6)),
            x0: Number(x0.toFixed(6)),
            x1: Number(x1.toFixed(6)),
            error: Number(error.toFixed(6)),
            continue: (error < e ? 'Si' : 'No')
        }
        iterations.push(iteration);
        x0 = x1;
    }
    return iterations;
}
