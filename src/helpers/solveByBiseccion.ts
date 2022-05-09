import { MathNode, abs } from 'mathjs';
import { BisseccionRes } from '../types/iterations';

export const solveByBiseccion = (f: MathNode, a:number, b:number, e:number) => {
    const iterations: BisseccionRes[] = [];
    let error = 1;
    let index = 1;
    while (error >= e) {
        let m = (a+b)/2;
        const fa = Number(f.evaluate({x:a}).toFixed(6));
        const fx1 = Number(f.evaluate({x:m}).toFixed(6));
        const change = Number((fa*fx1).toFixed(6));
        const iteration: BisseccionRes = {
            index,
            x0: a,
            x1: b,
            m,
            change,
            error,
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