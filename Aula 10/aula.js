
/*
 - Paramentros: é a variavel (escopo da função) que irá receber um
 valor em uma função.
 - Argumentos: é o valor que é passado para a função.
*/
function message (username) {
    console.log("Ola" , username)
}

message("rodrigo")
message("Ana")


function sum( a , b) {
    console.log(a + b)
}
sum(10,20)
sum(7,3)


// Defininando um valor (argumento) padrão.
function joinTexto () {
    console.log(text1, text2 = " ", text3 = " ")
}

joinTexto("Rodrigo", "Gonçalves", "Santana")
joinTexto("Gonçalves", "Rodrigo", "Sanatana")

joinTexto("Pedro")