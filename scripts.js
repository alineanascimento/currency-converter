// Selecionando os elementos do DOM
const form = document.querySelector("form")
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")

// Manipulando o input amount para receber somente numeros
amount.addEventListener("input", () =>{
    const hasCharactersRegex = /\D+/g
    amount.value = amount.value.replace(hasCharactersRegex, "")
})

// outra forma de fazer a mesma validação , evento de submit

form.onsubmit = (event) => {
    event.preventDefault() // Evita o comportamento padrão do form

    console.log(currency.value)
}