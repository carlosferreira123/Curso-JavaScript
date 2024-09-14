
/*
try {
    // Tenta executar algo.
    console.log(result)
} catch (error) {
    // Caputura o erro
    console.log (error)


} finally {
    
    console.log("Fim")
}
    */

let result = 0 

try {
  if (result === 0){
    throw new Error("O valor é igual a zero")
  }

} catch (error) {
   console.log(error)

} finally {
    console.log("Fim")
}
