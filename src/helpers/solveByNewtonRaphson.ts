import { MathNode, abs, derivative } from 'mathjs';
import { NewtonRaphsonRes } from '../types/types';

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
