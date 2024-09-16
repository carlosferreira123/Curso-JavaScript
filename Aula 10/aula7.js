// Callback function: é uma função passada para outra função com um argumento 

function execute(taskName, callback) {
    console.log("executamos a tarefa: ", taskName)

    callback()
}
function callback() {
    console.log("Tarefa finalizada.")
}

// Passando para a função.
execute("Download do arquivo..." , callback)

// Criando a funçãao no proprio paramentro.
execute("Upload do arquivo..." , function() {
    console.log("Função de callbacl com uma função anonima")
})

//Utilizando Arrow Functions
execute("Excluindo arquivo...", () => {
    console.log("Arquivo excluido")
})

execute("salvando arquivos", () => console.log("Arquivo"))