//pegando todos os campos que iremos utilizar
const calcular = document.getElementById('calcular');


function imc() {
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if (nome !== '' && altura !== '' && peso !== '') {

        const valorIMC = (peso / (altura * altura)).toFixed(2);

        let classificacao = '';
        if (valorIMC < 18.5) {
            classificacao = 'Abaixo de peso'
        } else if (valorIMC < 25) {
            classificacao = 'com Peso ideal'
        } else if (valorIMC < 30) {
            classificacao = 'levemente acima do peso '
        } else if (valorIMC < 35) {
            classificacao = 'com Obesidade Grau I'
        }else if (valorIMC < 40) {
            classificacao = 'com Obesidade Grau II'
        }else{
            classificacao = 'com Obesidade Grau III - Cuidado!'
        }


        resultado.textContent = `${nome}, seu IMC é ${valorIMC}, portanto, você está ${classificacao}`

    } else {
        resultado.textContent = 'Preencha todos os Campos!!';
    }


}

calcular.addEventListener('click', imc);
