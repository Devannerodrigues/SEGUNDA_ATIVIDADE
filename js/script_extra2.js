//Pegando elementos do dom
const formDados = document.getElementById("formulario");
const divResultado = document.getElementById("resultado");

//Capiturando o evento de submit do formulário
formDados.addEventListener("submit", (evt) => {
    //Prevenindo o comportamento padrão do submit
    evt.preventDefault();

    const objetoForm = new FormData(formDados);
    const codigo = objetoForm.get("codigo");
    const senha = parseFloat(objetoForm.get("senha"));

    // Verificando acesso
    if (codigo === "ABCD1234" && senha === 1234) {
        divResultado.innerHTML = `<p>ACESSO PERMITIDO</p>`;
    } else {
        divResultado.innerHTML = `<p>ACESSO NEGADO</p>`;
    }

    

    // Exibindo o resultado
    divResultado.innerHTML = `<p>ACESSO PERMITIDO</p>`;
})