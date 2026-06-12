//Pegando elementos do dom
const formDados = document.getElementById("formulario");
const divResultado = document.getElementById("resultado");

//Capiturando o evento de submit do formulário
formDados.addEventListener("submit", (evt) => {
    //Prevenindo o comportamento padrão do submit
    evt.preventDefault();

    const objetoForm = new FormData(formDados);
    const nome = objetoForm.get("nome");
    const compra = parseFloat(objetoForm.get("compra"));

    // Calculando o valor da venda com base no lucro
    let venda;
    if (compra < 10) {
        venda = compra * 1.7;
    } else if (compra <= 30) {
        venda = compra * 1.5;
    } else if (compra <= 50) {
        venda = compra * 1.4;
    } else {
        venda = compra * 1.3;
    }

    // Exibindo o resultado
    divResultado.innerHTML = `<p>Produto: ${nome}</p><p>Valor da Venda: R$ ${venda.toFixed(2)}</p>`;
})