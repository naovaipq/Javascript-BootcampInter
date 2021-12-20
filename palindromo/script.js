//solução 1
function verificaPalidromo(string){
    if(!string){
        return "string não existe!";
    }

    return string.split("").reverse().join("") === string; 
}

//solução 2
function verificaPalidromo2(string){
    if(!string){
        return "string não existe!";
    }

    for(let i = 0; i < string.length / 2; i++){
        if(string[i] !== string[string.length - 1 - i]){
            return false;
        }
    }

    return true;
}

console.log(verificaPalidromo2("aba"));