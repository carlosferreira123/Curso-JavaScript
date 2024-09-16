// Arrow Function (Função de seta)
const showMessage1 =  () => {
    console.log("Ola")

}

console.log(showMessage1)
showMessage1()

const showMessage2 = (username, email) => {
    console.log(`Ola, ${username}. Seu email é: ${email}.`, )
}

showMessage2("maria", "Maria@gmil.com")