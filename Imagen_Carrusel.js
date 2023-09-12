let imagenes = [
    "img/imagen1.webp",
    "img/imagen2.webp",
    "img/imagen3.webp",
];
const buttonAnterior = document.getElementById("button-anterior")
const buttonSiguiente = document.getElementById("button-siguiente")
const cuadroImagen = document.getElementById("img")

let contador = 0

buttonAnterior.addEventListener("click", () => {
    contador --;
    if (contador < 0) {
        contador = imagenes.length - 1;
    }
    cuadroImagen.src = imagenes[contador];
})

buttonSiguiente.addEventListener("click", () => {
    contador ++;
    if (contador >= imagenes.length) {
        contador = 0;
    }
    cuadroImagen.src = imagenes[contador];
})