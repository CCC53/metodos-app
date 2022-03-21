import { abs, derivative, MathNode } from "mathjs";
import { VonMissesRes } from '../types/iterations';

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
            x0: Number(x0.toFixed(6)),
            x1: Number(x1.toFixed(6)),
            fx: Number(fx.toFixed(6)),
            dfx: Number(dfx.toFixed(6)),
            error: Number(error.toFixed(6)),
            continue: (error < e ? 'Si' : 'No')
        }
        iterations.push(iteration);
        x0 = x1;
    }
    return iterations;
}
