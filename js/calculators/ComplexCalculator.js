class ComplexCalculator extends RealCalculator {
    add(a, b) { return new Complex(a.re + b.re, a.im + b.im); }
    sub(a, b) { return new Complex(a.re - b.re, a.im - b.im); }
    inv(a) {
        q = a.re * a.re + a.im * a.im;
        return new Complex(a.re / q, -a.im / q);
    }
    mult(a, b) {
        return new Complex((a.re * b.re - a.im * b.im), (a.re * b.im + b.re * a.im));
    }
    div(a, b) {
        const m = Math.pow(b.re, 2) + Math.pow(b.im, 2);
        return new Complex(
            (a.re * b.re + a.im * b.im) / m,
            (b.re * a.im - a.re * b.im) / m
        );
    }
    pow(a, n) {
        let S = this.one();
        for (let i = 0; i < n; i++) {
            S = this.mult(S, a)
        }
        return S;
    }

    prod(a, p) { return new Complex(a.re * p, a.im * p) }; //комплексное на скаляр (?)
    one() { return new Complex(super.one()); }
    zero() { return new Complex; }
}

/*
pow(a, n) {
        let a_i = a;
        if (n === 1) {
            return a_i;
        } else {
            for (let i = 1; i < n; i++) {
                a_i = this.mult(a_i, a)
            }
            return a_i;
        }
*/