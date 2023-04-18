/*La app pide números hasta que pida cancelar.
Cuando se cancela se deben mostrar todos los números ingresados juntos.
y si se ingresa algo que no sea válido se debe mostrar un alert y seguir
pidiendo un número.*/

let concatenar_numero = "", confirmar = confirm('Seleccione OK y/o Aceptar  para concatenar Numeros');
while (confirmar) {
    let numeroIngresado = parseInt(prompt('Escriba el numero a concatenar'));
    if (!isNaN(numeroIngresado)) {
        if (numeroIngresado > 0) {
            concatenar_numero = concatenar_numero + numeroIngresado + "-";
        } else {
            concatenar_numero = concatenar_numero + "(" + numeroIngresado + ")" + "-";
        }
    } else {
        alert('ingrese un numero valido. Recomendacion: numeros positivos y negativos. NO letras y/o palabras!! ')
    }
    confirmar = confirm('¿Desea Agregar mas numeros?');
}

if (confirmar === false && concatenar_numero.length !== 0) {
    concatenar_numero = concatenar_numero.slice(0, concatenar_numero.length - 1);
    document.write(`<p style= "color: black; font-size: 30px">Su texto  es:  <span style= "color: red; font-size: 30px" >${concatenar_numero}</span></p>`)
}else{
    alert('Fin de la concatenacion...... ');
}


