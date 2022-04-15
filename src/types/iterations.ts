export interface Iteration {
    index: number;
    x0: number;
    x1: number;
    error: number;
    continue: string;
}

export interface SecanteRes extends Iteration {
    fx0: number;
    fx1: number;
    x2: number;
}

export interface PuntoFijoRes extends Iteration {}

export interface SecanteSolutionRes {
    data: SecanteRes[];
    solution: number;
}

export interface PuntoFijoSolutionRes {
    data: PuntoFijoRes[];
    solution: number;
}