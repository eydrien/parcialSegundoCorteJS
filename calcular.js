function calculate(op) {
    // Parseo en JavaScript
    var num1 = parseFloat(document.getElementById('num1').value) || 0;
    var num2 = parseFloat(document.getElementById('num2').value) || 0;

    var result;
    // Switch en JavaScript
    switch (op) {
        case 'suma':
            // código a efectuar
            result = num1 + num2;
            break;
        case 'resta':
            // código a efectuar
            result = num1 - num2;
            break;
        case 'multiplicacion':
            // código a efectuar
            result = num1 * num2;
            break;
        case 'division':
            // código a efectuar
            result = num1 / num2;
            break;
        default:
            result = "ERROR jaja"
        // ...
    }

    /* mostrar resultado */
    document.getElementById('result').value = result;

}
