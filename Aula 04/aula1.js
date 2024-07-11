/* Functions / funções 
- Trecho de codigo que é executado 
Somente quando solicitado (Parente gente boa)
- Trecho de cofigo que pode ser reutilizado várias vezes

[] O que é uma função e como usar
[] Função VOID (vazia)
[] Função com parâmetros
[] Função Return
[] Arrow function

*/ /* Voide 

function digameunome(){
    const name = 'Carlos'
    console.log("Carlos")
}

digameunome()

/* 
Parametros



function soma(numero1 , numero2){
    const resultado = numero1 + numero2
    
    console.log(resultado)
}
digaqualquernome("Carlos")

/* 
return

function estaEndividado(receita , gastos){
    if(receita > gastos) {
        return "Esta no Azul"
    } else {
        return "Está no vermelho"
    }
    
  
}
const Maria = estaEndividado(5000, 7000)
const Joao = estaEndividado(10000, 2000)

console.log (Maria)
console.log(Joao)

*/
/* Arrow fuction (função flecha) */
 
 const digaMeunome = () => {
    console.log("Carlos")
 }
 digaMeunome()