/*

через get value можно считать значения в точке

DONE научить MatrixCalc прощать ошибки пользовательского ввода 
DONE научить VectorCalc прощать ошибки пользовательского ввода (но теперь vector -> (1; 2; 3))

? чо делать с PolyCalc в универсальном Calc 
? как значение в точке находить ы
? при различных ошибках выводить "несовместимость типов" например

научить функцию getComplex понимать:
i
-i
2-i
1+i

*/

window.onload = function () {
    const operandHandler = (event) => {
        const calc = new Calculator;
        const a = calc.getValue(document.getElementById('a').value);
        const b = calc.getValue(document.getElementById('b').value);
        const operand = event.target.dataset.operand;
        const result = calc[operand](a, b);

        console.log(a, b, result);

        if (result === null) {
            document.getElementById('c').value = 'чё-то не так, товарищ... :(';
        } else {
            document.getElementById('c').value = result.toString();
        }
    }

    const buttons = document.querySelectorAll('.operand');
    buttons.forEach(button => {
        button.addEventListener('click', operandHandler);
    });
};