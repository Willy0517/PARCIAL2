function calculate(operator) {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    let result;
    if (operator === 'sum') {
        result = num1 + num2;
    } else if (operator === 'res') {
        result = num1 - num2;
    } else if (operator === 'mul') {
        result = num1 * num2;
    } else if (operator === 'div') {
        if (num2 === 0) {
           
        result = 'No se puede dividir por cero';
        }
        else  result = num1 / num2;
    
    }
    document.getElementById('result').value = result;
}