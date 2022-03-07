var inputNombre = document.querySelector('#nombre');
var inputApellido = document.querySelector('#apellido');
var inputAñoNacimiento = document.querySelector('#añoNacimiento');
var colorFav = document.querySelector('#colorFav');
var botonProcesar = document.querySelector('#procesar');
var errores = document.querySelector('#error');
var formulario = document.querySelector('#formulario');
errores.style.color = 'red';
function enviarFormulario() {
    console.log('Procesando formulario...');
    var mensajesError = [];
    //Input Nombre
    if (isNaN(parseInt(inputNombre.value)))
        mensajesError.push('No se permiten Numeros');
    if (inputNombre.value === '')
        mensajesError.push('El campo no puede estar vacio');
    //Input Apellido
    if (isNaN(parseInt(inputApellido.value)))
        mensajesError.push('No se permiten Numeros');
    if (inputApellido.value === '')
        mensajesError.push('El campo no puede estar vacio');
    //Input Año Nacimiento
    if (isNaN(parseInt(inputAñoNacimiento.value)))
        mensajesError.push('No se permiten Numeros');
    if (inputAñoNacimiento.isInteger(inputAñoNacimiento))
        mensajesError.push('No se permiten Letras');
    if (inputAñoNacimiento.value === '')
        mensajesError.push('El campo no puede estar vacio');
    // Mostramos los errores
    imprimirErrores(mensajesError);
    botonProcesar.addEventListener('click', enviarFormulario);
    // return false;
}
function imprimirErrores(mensajesError) {
    // Limpiamos los errores anteriores en HTML
    errores.textContent = '';
    // Generamos todos LI con su mensaje
    mensajesError.forEach(function (mensaje) {
        // Creamos nuevo LI
        var nuevoLi = document.createElement('li');
        nuevoLi.textContent = mensaje;
        // Lo añadimos dentro de nuestro UL
        errores.appendChild(nuevoLi);
    });
}
//function sumar(valor1: number, valor2: number)
//{
//    return valor1 + valor2;
//}
