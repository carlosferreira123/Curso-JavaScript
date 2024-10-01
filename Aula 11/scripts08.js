window.addEventListener("load", () => {
    console.log("A pagina foi carregada")
})

addEventListener("click", (event) => {
   event.preventDefault()
   
   // Retorna todas as informações do evento
   // console.log(event)

   //Retorna o elemento clicado
   console.log(event.target)

   console.log(event.target.textContent)
})