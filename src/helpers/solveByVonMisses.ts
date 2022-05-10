import { abs, derivative, MathNode } from "mathjs";
import { VonMissesRes } from '../types/iterations';

export const solveByVonMisses = (f:MathNode, x0:number, e:number) => {
    let x1 = 0;
    let error = 1;
    let index = 0;
    const iterations: VonMissesRes[] = [];
    let dfx = Number(derivative(f.toString(), 'x').evaluate({x:x0}).toFixed(6));
    while (error > e) {
        let fx = Number(f.evaluate({x:x0}).toFixed(6));
        x1 = Number((x0-(fx/dfx)).toFixed(6));
        error = Number(abs(x1-x0).toFixed(6));
        index++;
        const iteration: VonMissesRes = {
            index,
            x0,
            fx,
            dfx,
            x1,
            error,
            continue: (error < e ? 'Si' : 'No')
        }
        iterations.push(iteration);
        x0 = x1;
    }
    return iterations;
}
