export const solveByLagrange = (xi: number[], fi: number[], x: number) => {
    let xL = 0;
    for (let i=0; i<xi.length; i++) {
        let terminoL = 1;
        for (let j=0; j<xi.length; j++) {
            if (i !== j) {
                terminoL = terminoL*((x-xi[j])/(xi[i]-xi[j]));
            }
        }
        xL = xL+terminoL*fi[i];
    }
    return Number(xL.toFixed(6));
}