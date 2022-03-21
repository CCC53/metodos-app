import { abs, MathNode } from 'mathjs';
import { PuntoFijoRes } from '../types/iterations';

export const solveByPuntoFijo = (gx: MathNode, x0: number, e: number): PuntoFijoRes[] => {
  const iterations: PuntoFijoRes[] = [];
  let error = 1;
  let index = 0;
  while(error > e) {
    const x1 = gx.evaluate({x: x0});
    error = abs(x1-x0);
    index++;
    const iteration: PuntoFijoRes = {
      index,
      x0: Number(x0.toFixed(6)),
      x1: Number(x1.toFixed(6)),
      error: Number(error.toFixed(6)),
      continue: (error < e ? 'Si' : 'No')
    }
    x0 = x1;
    iterations.push(iteration);
  }
  return iterations;
}