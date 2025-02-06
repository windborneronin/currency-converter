{
    const formElement = document.querySelector(".js-form");
    const amountElement = document.querySelector(".js-amount");
    const rateElement = document.querySelector(".js-rate");
    const resultElement = document.querySelector(".js-result");

    function calculateResult(amount, rate) {
        return amount * rate;
    }

    function updateResult(result) {
        resultElement.innerText = result.toFixed(2);
    }

    function handleFormSubmit(event) {
        event.preventDefault();
        const amount = parseFloat(amountElement.value);
        const rate = parseFloat(rateElement.value);
        
        const result = calculateResult(amount, rate);
        updateResult(result);
    }

    formElement.addEventListener("submit", handleFormSubmit);
}

