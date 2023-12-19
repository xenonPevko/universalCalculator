class Polynomial {
    constructor(poly = []) {
        this.poly = poly;
        this.poly.sort((a, b) => b.power - a.power);
    }

    getValue(x) {
        const calc = new Calculator;
        return this.poly.reduce((S, elem) =>
            calc.add(
                S,
                calc.prod(
                    calc.pow(x, elem.power),
                    elem.value)
            ),
            calc.zero(null, x)
        );
    }

    toString() {
        return this.poly.map(
            (el, i) => (el.value > 0) ?
                `${(i === 0) ? '' : ' + '}${el.toString()}` :
                el.toString()
        ).join('');
    }
}