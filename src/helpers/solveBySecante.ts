import { MathNode, abs } from 'mathjs';
import { SecanteRes } from "../types/iterations";

export const solveBySecante = (f:MathNode, x0:number, x1:number, e:number): SecanteRes[] => {
    const iterations: SecanteRes[] = [];
    let index = 0;
    let error = 1;
    while (error > e) {
        const fx0 = Number(f.evaluate({x:x0}).toFixed(6));
        const fx1 = Number(f.evaluate({x:x1}).toFixed(6));
        const x2 = Number((x0-((x1-x0)/(fx1-fx0))*fx0).toFixed(6));
        error = Number(abs(x2-x1).toFixed(6));
        index++;
        const iteration: SecanteRes = {
            index,
            x0,
            x1,
            fx0,
            fx1,
            x2,
            error,
            continue: (error < e ? 'Si' : 'No')
        }
        iterations.push(iteration);
        x0=x1;
        x1=x2;
    }
    return iterations;
}