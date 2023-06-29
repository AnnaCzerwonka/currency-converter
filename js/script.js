let formElement = document.querySelector(".js-form");
let amountElement = document.querySelector(".js-amount");
let currencyElement = document.querySelector(".js-currency");
let resultElement = document.querySelector(".js-result");

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let amount = +amountElement.value;
    let currency = currencyElement.value;
    let result;

    let rateEUR = 4.56;
    let rateUSD = 4.14;

    if (amount <= 0) {
        resultElement.innerHTML = "Kwota musi być większa od zera!";
        return;
    }

    switch (currency) {
        case "EUR":
            result = amount / rateEUR;
            break;

        case "USD":
            result = amount / rateUSD;
            break;
    }

    resultElement.innerHTML = `Wynik: ${amount.toFixed(2)} zł = <strong>${result.toFixed(2)} ${currency}</strong>`;
});