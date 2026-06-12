//Pegando elementos do dom
const formDados = document.getElementById("formulario");
const divResultado = document.getElementById("resultado");

//Capiturando o evento de submit do formulário
formDados.addEventListener("submit", (evt) => {
    //Prevenindo o comportamento padrão do submit
    evt.preventDefault();

    const objetoForm = new FormData(formDados);
    const nome = objetoForm.get("nome");
    const peso = parseFloat(objetoForm.get("peso"));
    const altura = parseFloat(objetoForm.get("altura"));

    // Calculando o IMC
    const imc = peso / (altura * altura);

    // Classificação do IMC
    let faixaRisco;
    if (imc < 20) {
        faixaRisco = "abaixo do peso";
    } else if (imc < 25) {
        faixaRisco = "normal";
    } else if (imc < 30) {
        faixaRisco = "excesso de peso";
    } else if (imc < 35) {
        faixaRisco = "obesidade";
    } else {
        faixaRisco = "obesidade mórbida";
    }

    // Exibindo o resultado
    divResultado.innerHTML = `<p>O paciente ${nome} está na faixa de risco: ${faixaRisco}.</p>`;
})
        divResultado.innerHTML = `<p>O triângulo é equilátero.</p>`;
    } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
        divResultado.innerHTML = `<p>O triângulo é isósceles.</p>`;
    } else {
        divResultado.innerHTML = `<p>O triângulo é escaleno.</p>`;
    }

})