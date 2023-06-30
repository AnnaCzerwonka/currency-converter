{
    const init = () => {
        const formElement = document.querySelector(".js-form");
        const amountElement = document.querySelector(".js-amount");
        const currencyElement = document.querySelector(".js-currency");
        const resultElement = document.querySelector(".js-result");

        const getExchangeRate = (currency) => {
            const rates = {
                EUR: 4.56,
                USD: 4.14,
            };

            return rates[currency] || 1;
        };

        const calculateResult = (amount, currency) => {
            const exchangeRate = getExchangeRate(currency);
            return amount / exchangeRate;
        };

        formElement.addEventListener("submit", (event) => {
            event.preventDefault();

            const amount = +amountElement.value;
            const currency = currencyElement.value;

            if (amount <= 0) {
                resultElement.innerHTML = "Kwota musi być większa od zera!";
                return;
            }

            const result = calculateResult(amount, currency);

            resultElement.innerHTML = `Wynik: ${amount.toFixed(2)} zł = <strong>${result.toFixed(2)} ${currency}</strong>`;
        });
    };

    init();
}