// cotacao de moedas do dia
const USD = 5.16
const EUR = 5.51
const GBP = 6.36


// Selecionando os elementos do DOM
const form = document.querySelector("form")
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")
const footer = document.querySelector("main footer")
const description = document.getElementById("description")

// Manipulando o input amount para receber somente numeros
amount.addEventListener("input", () =>{
    const hasCharactersRegex = /\D+/g
    amount.value = amount.value.replace(hasCharactersRegex, "")
})

// outra forma de fazer a mesma validação , evento de submit

form.onsubmit = (event) => {
    event.preventDefault() // Evita o comportamento padrão do form

    switch (currency.value) {
        case "USD":
            convertCurrency(amount.value, USD, "US$")
            break
        case "EUR":
            convertCurrency(amount.value, EUR, "€")
            break
        case "GBP":
            convertCurrency(amount.value, GBP, "£")
            break
    }

}

// funcao para converter a moeda

function convertCurrency(amount, price, symbol){
    // aplica a classe que exibe o footer para mostrar o resultado
    try{
        description.textContent = `${symbol} 1 = ${price}`
        // Aplica a classe que exibe o footer para mostrar o resultado
        footer.classList.add("show-result")
    } catch (error){
    // remove a classe do footer removendo ele da tela
        footer.classList.remove("show-result")
        console.log(error)
        alert("Não foi possível converter. Tente novamente mais tarde.")

    }
}