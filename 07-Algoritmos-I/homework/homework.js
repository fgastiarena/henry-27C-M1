'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
    // Factorear el número recibido como parámetro y devolver en un array
    // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
    // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
    // Tu código:
    let array = [1];
    let aux = 2;

    while (num > 1) {
        if (num % aux === 0) {
            array.push(aux);
            num /= aux;
        } else {
            aux++;
        }
    }
    return array;

}

function bubbleSort(array) {
    // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
    // el array recibido como parámetro
    // Devolver el array ordenado resultante
    // Tu código:
    let swap = true;
    while (swap) { //Si es true, es pq no hice ningún cambio y está ordenado.
        swap = false;
        for (let i = 0; i < array.length - 1; i++) {
            if (array[i] > array[i + 1]) {
                let aux = array[i];
                array[i] = array[i + 1];
                array[i + 1] = aux;
                swap = true;
            }
        }
    }
    return array;
}


function insertionSort(array) {
    // Implementar el método conocido como insertionSort para ordenar de menor a mayor
    // el array recibido como parámetro utilizando arreglos
    // Devolver el array ordenado resultante
    // Tu código:
    for (let i = 1; i < array.length; i++) { //arranca i=1 porque en BubbleS comparabamos el i con la posicion de adelante, pero acaa se compara con la de atrás, por eso se arranca en 1.
        let j = i - 1;
        let aux = array[i];
        while (j >= 0 && aux < array[j]) {
            array[j + 1] = array[j];
            j--
        }
        array[j + 1] = aux;
    }
    return array;

}


function selectionSort(array) {
    // Implementar el método conocido como selectionSort para ordenar de menor a mayor
    // el array recibido como parámetro utilizando dos arreglos
    // Devolver el array ordenado resultante
    // Tu código:
    for (let i = 0; i < array.length - 1; i++) {
        let min = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[min]) {
                min = j;
            }
        }
        if (i !== min) {
            let aux = array[i];
            array[i] = array[min];
            array[min] = aux;
        }
    }
    return array;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
    factorear,
    bubbleSort,
    insertionSort,
    selectionSort,
};