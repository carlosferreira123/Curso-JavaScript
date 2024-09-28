// Visualizar o conteudo do document.
// conole.log(document)

// Obter o title da pagina.
console.log(document.title)

// Acessar o elemenrto pelo ID
const guest = document.getElementById("guest-2")
console.log(guest)

// Mostrar o elemento
console.dir(guest)

// Acessar elemento com class (SELETOR class)
const guestsByClass = document.getElementsByClassName("guest")
console.log(guestsByClass)

// Exibir o primeiro elemento da lista. 
console.log(guestsByClass.item(0))
console.log(guestsByClass[1])

// Selecioanr lista de elementos pela tag
const guestsTag = document.getElementsByTagName("li")
console.log(guestsTag)