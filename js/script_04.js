//Pegando elementos do dom
const formDados = document.getElementById("formulario");
const divResultado = document.getElementById("resultado");

//Capiturando o evento de submit do formulário
formDados.addEventListener("submit", (evt) => {
    //Prevenindo o comportamento padrão do submit
    evt.preventDefault();

    const objetoForm = new FormData(formDados);
    const nota1 = parseFloat(objetoForm.get("nota1"));
    const nota2 = parseFloat(objetoForm.get("nota2"));
    const nota3 = parseFloat(objetoForm.get("nota3"));

    const media = (nota1 + nota2 + nota3) / 3;

    divResultado.innerHTML = `<p>A média do aluno é: ${media.toFixed(2)}</p>`;
    if (media >= 6) {
        divResultado.innerHTML += `<p>O aluno está aprovado.</p>`;
    } else {
        divResultado.innerHTML += `<p>O aluno está reprovado.</p>`;
    }

})