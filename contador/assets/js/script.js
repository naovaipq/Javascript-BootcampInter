var currentNumberWrapper = document.getElementById("currentNumber");
var currentNumber = 0;


var buttonDecrement = document.getElementsByName("subtrair")[0]
var buttonIncrement = document.getElementsByName("adicionar")[0]

function increment() {
    currentNumber++;
    currentNumberWrapper.innerHTML = currentNumber;
    
    if (currentNumber >= 0) {
        currentNumberWrapper.style.color = 'white'
    }
}

function decrement() {
    currentNumber--;
    currentNumberWrapper.innerHTML = currentNumber;

    if (currentNumber < 0) {
        currentNumberWrapper.style.color = 'red';
    }
}
