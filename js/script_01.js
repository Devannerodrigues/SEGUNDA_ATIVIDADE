//Pegando elementos do dom
const formDados = document.getElementById("formulario");
const divResultado = document.getElementById("resultado");

//Capiturando o evento de submit do formulário
formDados.addEventListener("submit", (evt) => {
    //Prevenindo o comportamento padrão do submit
    evt.preventDefault();

    const objetoForm = new FormData(formDados);
    const numero1 = parseInt(objetoForm.get("numero1"));
    const numero2 = parseInt(objetoForm.get("numero2"));
    const numero3 = parseInt(objetoForm.get("numero3"));    

    const media = (numero1 + numero2 + numero3) / 3;

    divResultado.innerHTML = `<p>A média dos números é: ${media}</p>`;
    
})