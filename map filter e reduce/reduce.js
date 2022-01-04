const precos = [
    {
        nome: 'Sabão',
        preco: 22.00,
    },
    {
        nome: 'Pão',
        preco: 12.00,
    },
    {
        nome: 'Leite',
        preco: 5.00,
    }
]

function saldoFinal(precos, saldoAtual) {
    return saldoAtual - precos.reduce(function (prev, current, index) {
        
        console.log('rodada: ', index + 1);
        console.log({prev});
        console.log({current});

        console.log('\n');
        return prev - current.preco
    }, saldoAtual)
}

const saldoAtual = 100
console.log(saldoFinal(precos, saldoAtual));