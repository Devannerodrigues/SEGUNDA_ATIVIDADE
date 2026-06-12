//Pegando elementos do dom
const formDados = document.getElementById("formulario");
const divResultado = document.getElementById("resultado");

//Capiturando o evento de submit do formulário
formDados.addEventListener("submit", (evt) => {
    //Prevenindo o comportamento padrão do submit
    evt.preventDefault();

    const objetoForm = new FormData(formDados);
    const altura = parseFloat(objetoForm.get("altura"));
    const largura = parseFloat(objetoForm.get("largura"));

    const area = altura * largura;
    const tintaNecessaria = area / 2;


    divResultado.innerHTML = `<p>A área da parede é: ${area} metros quadrados</p>`;
    divResultado.innerHTML += `<p>A quantidade de tinta necessária é: ${tintaNecessaria} litros</p>`;
    
})