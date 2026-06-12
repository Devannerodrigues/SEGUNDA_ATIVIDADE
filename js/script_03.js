//Pegando elementos do dom
const formDados = document.getElementById("formulario");
const divResultado = document.getElementById("resultado");

//Capiturando o evento de submit do formulário
formDados.addEventListener("submit", (evt) => {
    //Prevenindo o comportamento padrão do submit
    evt.preventDefault();

    const objetoForm = new FormData(formDados);
    const distancia = parseFloat(objetoForm.get("distancia"));
    const consumo = parseFloat(objetoForm.get("consumo"));
    const preco = parseFloat(objetoForm.get("preco"));

    const combustivelNecessario = distancia / consumo;
    const valorTotal = combustivelNecessario * preco;


    divResultado.innerHTML = `<p>A quantidade de combustível necessário é: ${combustivelNecessario} litros</p>`;
    divResultado.innerHTML += `<p>O valor total a pagar é: R$ ${valorTotal.toFixed(2)}</p>`;
    
})