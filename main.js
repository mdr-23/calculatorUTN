/* SUMA */
const sumar = () => {
    let suma = parseFloat(document.getElementById("number1").value) + parseFloat(document.getElementById("number2").value)
    document.getElementById("resultado").innerHTML = suma
}

/* RESTA */
const restar = () => {
    let resta = parseFloat(document.getElementById("number1").value) - parseFloat(document.getElementById("number2").value)
    document.getElementById("resultado").innerHTML = resta
}

/* MULTIPLICAR */
const multiplicar = () => {
    let multiplicacion = parseFloat(document.getElementById("number1").value) * parseFloat(document.getElementById("number2").value)
    document.getElementById("resultado").innerHTML = multiplicacion
}

/* DIVIDR */
const dividir = () => {
    let division = parseFloat(document.getElementById("number1").value) / parseFloat(document.getElementById("number2").value)
    document.getElementById("resultado").innerHTML = division
}