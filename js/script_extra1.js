//Pegando elementos do dom
const formDados = document.getElementById("formulario");
const divResultado = document.getElementById("resultado");

//Capiturando o evento de submit do formulário
formDados.addEventListener("submit", (evt) => {
    //Prevenindo o comportamento padrão do submit
    evt.preventDefault();

    const objetoForm = new FormData(formDados);
    const numero = parseFloat(objetoForm.get("numero"));

    // Verificando divisibilidade
    if (numero % 3 === 0 && numero % 7 === 0) {
        divResultado.innerHTML = `<p>O número ${numero} é divisível por 3 e por 7.</p>`;
    } else {
        divResultado.innerHTML = `<p>O número ${numero} não é divisível por 3 e por 7.</p>`;
    }

    

   
})