export default function iteration(x0: number,
                                  a: number,
                                  b: number,
                                  epsilon: number,
                                  sigma: (x: number) => number,
                                  maxModDerSig: (a: number, b: number) => number) {
    const delta = Math.max(b - x0, x0 - a);
    const q = maxModDerSig(a, b);

    if (q >= 1) {
        throw new Error("q must be < 1! Unable to continue! Choose other sigma or [a, b]!");
    }

    if (Math.abs(sigma(x0) - x0) > (1 - q) * delta) {
        throw new Error("Condition (|sigma(x0) - x0| <= (1 - q) * delta) has not been met! Choose other sigma, [a, b] or x0!");
    }

    do {
        x0 = sigma(x0);
    } while (Math.abs(sigma(x0)) > epsilon);

    return x0;
}