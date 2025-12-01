async function converter() {
    const valor = document.querySelector("#valor").value;

    const res = await fetch("https://economia.awesomeapi.com.br/json/last/USD-BRL");
    const data = await res.json();

    const cotacao = data.USDBRL.high;
    const result = (valor / cotacao).toFixed(2);

    document.querySelector("#resultado").innerHTML = `
        $${result} dólares
    `;
}
