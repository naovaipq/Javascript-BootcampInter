function mapSemThis (array) {
    return array.map(function (item) {
        return item * 2
    })
}

const array = [1, 2, 3, 4, 5];

console.log(array);

console.log('array * 2 :', mapSemThis(array));