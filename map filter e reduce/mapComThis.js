const maca = {
    valor: 2,
}

const laranja = {
    valor: 3,
}

function mapComThis(array, thisArg) {
    return array.map(function (item) {
        return item * this.valor;
    }, thisArg);
}

const array = [1, 2]

console.log('This -> maça: ', mapComThis(array, maca))
console.log('This -> laranja: ', mapComThis(array, laranja))