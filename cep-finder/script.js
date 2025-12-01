async function buscarCEP() {
    const cep = document.querySelector("#cep").value;
    const res = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const data = await res.json();

    document.querySelector("#resultado").innerHTML = `
        <p><strong>Rua:</strong> ${data.logradouro}</p>
        <p><strong>Bairro:</strong> ${data.bairro}</p>
        <p><strong>Cidade:</strong> ${data.localidade}</p>
        <p><strong>UF:</strong> ${data.uf}</p>
    `;
}
