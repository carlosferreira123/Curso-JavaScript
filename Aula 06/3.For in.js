/* 
   Estrutura de Repetição - LOOP

    - for in
    - Usando para iterar Objetos

    */

    const user = {
        name: 'Carlos',
        age: 33,
        street: "Rua dos Bobos"
    }
    
    /* console.log(user['name'])
    // users.name -> Carlos
    // users['name'] -> Carlos

    */

    for(let key in user) {
        console.log(key)
    }