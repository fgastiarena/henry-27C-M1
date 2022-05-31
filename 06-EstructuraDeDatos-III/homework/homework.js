"use strict";

const { arrayReplaceAt } = require("markdown-it/lib/common/utils");

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/

function BinarySearchTree(value) {
    this.right = null;
    this.left = null;
    this.value = value;
}

BinarySearchTree.prototype.insert = function(value) {
    //1º comparo si el valor > || < root
    if (this.value > value) {
        //menor
        //pregunto si tengo a la izq
        //si left.insert(value)
        //no agregamos a la izq del nuevo arbol(value)
        if (this.left) {
            this.left.insert(value);
        } else {
            this.left = new BinarySearchTree(value);
        }
    } else {
        //mayor o igual
        //preguntamos si tenemos derecha
        if (this.right) {
            this.right.insert(value);
        } else {
            this.right = new BinarySearchTree(value);
        }
    }


};

BinarySearchTree.prototype.contains = function(value) {
    if (this.value === value) return true;
    if (this.value > value) {
        if (this.left) {
            return this.left.contains(value);
        } else {
            return false;
        }
    } else {
        if (this.right !== null) {
            return this.right.contains(value)
        } else {
            return false;
        }
    }

};

BinarySearchTree.prototype.size = function() {

    if (!this.left && !this.right) return 1;
    if (!this.left && this.right) return 1 + this.right.size();
    if (this.left && !this.right) return 1 + this.left.size();
    if (this.left && this.right) return 1 + this.left.size() + this.right.size();
};

BinarySearchTree.prototype.depthFirstForEach = function(cb, order) {
    switch (order) {
        case 'post-order':
            //izq - der - root
            if (this.left) this.left.depthFirstForEach(cb, order);
            if (this.right) this.right.depthFirstForEach(cb, order);
            cb(this.value);
            break;
        case 'pre-order':
            //root - izq - der
            cb(this.value);
            if (this.left) this.left.depthFirstForEach(cb, order);
            if (this.right) this.right.depthFirstForEach(cb, order);
            break;
        default:
            //in-order: izq.root.der
            if (this.left) this.left.depthFirstForEach(cb, order);
            cb(this.value);
            if (this.right) this.right.depthFirstForEach(cb, order);
            break;
    }
};

BinarySearchTree.prototype.breadthFirstForEach = function(cb, array = []) {
    cb(this.value)
    if (this.left) {
        array.push(this.left);
    }
    if (this.right) {
        array.push(this.right);
    }
    if (array.length) {
        array.shift().breadthFirstForEach(cb, array);
    }
};




// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
    BinarySearchTree,
};