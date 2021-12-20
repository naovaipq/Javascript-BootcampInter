function substituiPares(array) {

    if (!array) return -1;
    if (!array.length) return -1;

    console.log(array)
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            console.log(`Substituindo ${array[i]} por 0`);
            array[i] = 0;
        }
    }

    return (array);
}

let array = [1, 2, 3, 4, 5, 6];
console.log(substituiPares(array));

