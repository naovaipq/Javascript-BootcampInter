function filtroPares(array) {
    return array.filter(function(item){
        return item % 2 === 0;
    })
}

const array = [1, 2, 3, 4, 5, 6];

console.log(filtroPares(array));