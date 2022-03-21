import { MathNode, abs } from 'mathjs';
import { BissectionRes } from '../types/iterations';

export const solveByBiseccion = (f: MathNode, a:number, b:number, e:number): BissectionRes[]|null => {
    const iterations: BissectionRes[] = [];
    let error = 1;
    let index = 1;
    if (f.evaluate({x:a})*f.evaluate({x:b}) > 0) {
        return null;
    }
    while (error > e) {
        let m = (a+b)/2;
        const fa = f.evaluate({x:a});
        const fx1 = f.evaluate({x:m});
        const change = fa*fx1;
        const iteration: BissectionRes = {
            index,
            x0: Number(a.toFixed(6)),
            x1: Number(b.toFixed(6)),
            m: Number(m.toFixed(6)),
            change: Number(change.toFixed(6)),
            error: Number(error.toFixed(6)),
            continue: ''
        }
        if (change < 0) {
            b=m;
        } else {
            a=m;
        }
        error=abs(b-a);
        index++;
        iteration.continue = error > e ? 'No' : 'Si';
        iterations.push(iteration);
    }
    return iterations;
}
