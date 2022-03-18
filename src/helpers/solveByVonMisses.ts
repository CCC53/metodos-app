import { abs, derivative, MathNode } from "mathjs";
import { VonMissesRes } from '../types/types';

export const solveByVonMisses = (f:MathNode, x0:number, e:number): VonMissesRes[] => {
    const iterations: VonMissesRes[] = [];
    let error = 1;
    let index = 0;
    const dfx = derivative(f.toString(), 'x').evaluate({x:x0});
    while (error > e) {
        const fx = f.evaluate({x:x0});
        const x1 = x0-(fx/dfx);
        error = abs(x1-x0);
        index++;
        const iteration: VonMissesRes = {
            index,
            x0,
            x1,
            fx,
            dfx,
            error,
            continue: (error < e ? 'Si' : 'No')
        }
        iterations.push(iteration);
        x0 = x1;
    }
    return iterations;
}
