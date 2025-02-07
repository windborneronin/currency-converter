# Simple Currency Calculator
**Technologies used - HTML, CSS, JS, BEM**\
The app in current state is a simple currency calculator where you put the desired amount to exchange and the exchange rate with basic validation. The operation is finished with a 'Calculate' button and the result is shown. Regardless if your exchange rate has multiple numbers after the comma, the result is being rounded to 2 numbers after the whole number. Check it out!

List of functions/actions performed:  
1. calculation
```
  function calculateResult(amount, rate) {
  return amount * rate;
}
```

2. updating UI
```
function updateResult(result) {
        resultElement.innerText = result.toFixed(2);
    }
```

3. logic
```
 function handleFormSubmit(event) {
        event.preventDefault();
        const amount = parseFloat(amountElement.value);
        const rate = parseFloat(rateElement.value);
        
        const result = calculateResult(amount, rate);
        updateResult(result);
    }
```
4. adding the event listener

```
formElement.addEventListener("submit", handleFormSubmit);
```
