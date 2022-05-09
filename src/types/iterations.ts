export interface Iteration {
    index: number;
    x0: number;
    x1: number;
    error: number;
    continue: string;
}

export interface BisseccionRes extends Iteration {
    m: number;
    change: number;
}

export interface NewtonRaphsonRes extends Iteration {
    fx:number;
    dfx: number;
}

export interface SecanteRes extends Iteration {
    fx0: number;
    fx1: number;
    x2: number;
}

export interface PuntoFijoRes extends Iteration {}

export interface JacobiRes {
    index: number;
    x0: number;
    y0: number;
    z0: number;
    x1: number;
    y1: number;
    z1: number;
    continue: string;
}

export interface GaussSeidelRes extends JacobiRes {}

export interface SystemEcuationSolution {
    x: number;
    y: number;
    z: number;
}

export interface BiseccionSolutionRes {
    data: BisseccionRes[];
    solution: number;
}

export interface NewtonRaphsonSolutionRes {
    data: NewtonRaphsonRes[];
    solution: number;
}

export interface SecanteSolutionRes {
    data: SecanteRes[];
    solution: number;
}

export interface PuntoFijoSolutionRes {
    data: PuntoFijoRes[];
    solution: number;
}

export interface JacobiSolutionRes {
    data: JacobiRes[];
    solution: SystemEcuationSolution;
}

export interface GaussSeidelSolutionRes {
    data: GaussSeidelRes[];
    solution: SystemEcuationSolution;
}