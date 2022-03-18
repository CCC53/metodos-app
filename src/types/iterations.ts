export interface Iteration {
    index: number;
    x0: number;
    x1: number;
    error: number;
    continue: string;
}

export interface BissectionRes extends Iteration {
    m: number;
    change: number;
}

export interface NewtonRaphsonRes extends Iteration {
    fx:number;
    dfx: number;
}

export interface VonMissesRes extends NewtonRaphsonRes {};

export interface SecanteRes extends Iteration {
    fx0: number;
    fx1: number;
    x2: number;
}