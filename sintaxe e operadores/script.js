function compara(n1, n2){
    const frase1 = criaPrimeiraFrase(n1, n2);
    const frase2 = criaSegundaFrase(n1, n2);

    return `${frase1} ${frase2}`
}

function criaPrimeiraFrase(n1, n2){
    let saoIguais = '';

    if(n1 !== n2){
        saoIguais = 'não'
    }

    return `Os números ${n1} e ${n2} ${saoIguais} são iguais.`
}

function criaSegundaFrase(n1, n2){
    let soma = n1 + n2;
    let mM1, mM2;

    (soma > 10) ? mM1 = 'maior' : mM1 = 'menor';
    (soma > 20) ? mM2 = 'maior' : mM2 = 'menor';
    
    return ` Sua soma é ${soma}, que é ${mM1} que 10 e ${mM2} que 20.`
}

console.log(compara(5, 10));