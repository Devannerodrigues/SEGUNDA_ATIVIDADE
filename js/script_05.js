//Pegando elementos do dom
const formDados = document.getElementById("formulario");
const divResultado = document.getElementById("resultado");

//Capiturando o evento de submit do formulário
formDados.addEventListener("submit", (evt) => {
    //Prevenindo o comportamento padrão do submit
    evt.preventDefault();

    const objetoForm = new FormData(formDados);
    const lado1 = parseFloat(objetoForm.get("lado1"));
    const lado2 = parseFloat(objetoForm.get("lado2"));
    const lado3 = parseFloat(objetoForm.get("lado3"));

    // Classificação do triângulo
    if (lado1 === lado2 && lado2 === lado3) {
        divResultado.innerHTML = `<p>O triângulo é equilátero.</p>`;
    } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
        divResultado.innerHTML = `<p>O triângulo é isósceles.</p>`;
    } else {
        divResultado.innerHTML = `<p>O triângulo é escaleno.</p>`;
    }

})