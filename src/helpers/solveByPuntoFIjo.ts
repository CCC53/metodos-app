import { abs, MathNode } from 'mathjs';
import { PuntoFijoRes } from '../types/iterations';

export const solveByPuntoFijo = (gx: MathNode, x0: number, e: number): PuntoFijoRes[] => {
  const iterations: PuntoFijoRes[] = [];
  let error = 1;
  let index = 0;
  while(error > e) {
    const x1 = Number(gx.evaluate({x: x0}).toFixed(6));
    error = Number(abs(x1-x0).toFixed(6));
    index++;
    const iteration: PuntoFijoRes = {
      index,
      x0,
      x1,
      error,
      continue: (error < e ? 'Si' : 'No')
    }
    x0 = x1;
    iterations.push(iteration);
  }
  return iterations;
}