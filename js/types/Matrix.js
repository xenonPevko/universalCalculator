class Matrix {
    constructor (values = [[]]) {
        this.values = [];
        values.forEach((arr, i) => {
            this.values[i] = [];
            arr.forEach(el => this.values[i].push(el))
        });
    }

    /*
    1, 2, 3
    4, 5, 6
    7, 8, 9 
    */
   
    toString() {
        return this.values.map(arr => arr.map(el => el.toString()).join(', ')
        ).join('\n');
    }
}