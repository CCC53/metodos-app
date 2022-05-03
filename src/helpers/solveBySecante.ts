import { MathNode, abs } from 'mathjs';
import { SecanteRes } from "../types/iterations";

export const solveBySecante = (f:MathNode, x0:number, x1:number, e:number): SecanteRes[] => {
    const iterations: SecanteRes[] = [];
    let index = 0;
    let error = 1;
    while (error > e) {
        const fx0 = f.evaluate({x:x0});
        const fx1 = f.evaluate({x:x1});
        const x2 = x0-((x1-x0)/(fx1-fx0))*fx0;
        error = abs(x2-x1);
        index++;
        const iteration: SecanteRes = {
            index,
            x0: Number(x0.toFixed(6)),
            x1: Number(x1.toFixed(6)),
            fx0: Number(fx0.toFixed(6)),
            fx1: Number(fx1.toFixed(6)),
            x2: Number(x2.toFixed(6)),
            error: Number(error.toFixed(6)),
            continue: (error < e ? 'Si' : 'No')
        }
        iterations.push(iteration);
        x0=x1;
        x1=x2;
    }
    return iterations;
}